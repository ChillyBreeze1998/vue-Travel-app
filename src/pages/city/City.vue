<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
      <city-alphabet  :cities="cities"  @change="handleLetterChange"></city-alphabet> <!-- 调用字母表 -->
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
      hotCities: [],
      // 城市列表右边字母（alphabet.vue）通过emit暴露出去的方式传到父组件也就是（city.vue），在这里获取，在methods定义方法
      letter: ''
    }
  },
  methods: {
    // 请求城市的ajax
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    // 获取ajax
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    // 在这里定义城市列表右侧字母alphabet.vue暴露出去的字母的值的方法
    handleLetterChange (letter) {
      // data的letter在这里使用要加this，定义好后传到list列表的子组件
      this.letter = letter
    }
  },
  mounted () {
    // 调用ajax 在生命周期函数安装这个函数里写一个方法的调用
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
 body
   background-color #fff
</style>
