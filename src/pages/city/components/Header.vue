<template>
    <div class="header">
        <h1>城市选择</h1>
         <router-link to="/">
             <div class="iconfont header-back">&#xe624;</div>
         </router-link>
    </div>
</template>

<script>

export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/Quanju.styl'
 .header
   position relative
   overflow hidden
   height $headerHight
   line-height $headerHight
   text-align center
   color #fff
   background $bgColor
   font-size .32rem
.header-back
   position absolute
   top 0
   left 0
   width .64rem
   text-align center
   font-size .3rem
   color #fff
</style>
