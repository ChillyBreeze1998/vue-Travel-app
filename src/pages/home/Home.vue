<template>
<div>
   <Header></Header>
   <!-- 引入轮播图 -->
   <carrousel></carrousel>
   <!-- 引入主页图标 -->
   <home-icons></home-icons>
   <div></div>
    </div>
</template>

<script>
import Header from './components/Header'
import carrousel from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    Header,
    carrousel,
    HomeIcons
  }
}
</script>

<style>

</style>
