<template>
<div>
   <Header :city="city"></Header>
   <!-- 引入轮播图 -->
   <carrousel :list="swiperList"></carrousel>
   <!-- 引入主页图标 -->
   <home-icons :list="iconList"></home-icons>
   <!-- 引入主页推荐部分 -->
   <br>
   <home-recommend :list="recommendList"></home-recommend>
   <home-weekend :list="weekendList"></home-weekend>
   <div></div>
    </div>
</template>

<script>
import Header from './components/Header'
import carrousel from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Header,
    carrousel,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // ajax请求数据地址，然后返回值
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    // 拿到数据之后要做的事
    getHomeInfoSucc (res) {
      res = res.data
      // 如果获取到res下的ret 与 res下的data同时得到则让city = data的city,这样就可以直接调用city了
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
