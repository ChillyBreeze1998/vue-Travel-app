<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hot="hotCities"></city-list>
      <city-alphabet  :cities="cities"></city-alphabet> <!-- 调用字母表 -->
    </div>
</template>

<script>

import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    // 请求
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    // 获取
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    // 调用 在生命周期函数安装这个函数里写一个方法的调用
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
 body
   background-color #fff
</style>
