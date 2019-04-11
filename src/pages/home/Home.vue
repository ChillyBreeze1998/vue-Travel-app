<template>
<div>
   <Header></Header>
   <!-- 引入轮播图 -->
   <carrousel></carrousel>
   <div>home</div>
    </div>
</template>

<script>
import Header from './components/Header'
import carrousel from './components/Swiper'
export default {
  name: 'Home',
  components: {
    Header,
    carrousel
  }
}
</script>

<style>

</style>
