<template>
<div>
   <Header></Header>
   <!-- 引入轮播图 -->
   <carrousel></carrousel>
   <!-- 引入主页图标 -->
   <home-icons></home-icons>
   <!-- 引入主页推荐部分 -->
   <br>
   <home-recommend></home-recommend>
   <home-weekend></home-weekend>
   <div></div>
    </div>
</template>

<script>
import Header from './components/Header'
import carrousel from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    Header,
    carrousel,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang="stylus" scoped>

</style>
