<template>
<div class="header">
   <div class="header-left">
     <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
     <span class="iconfont">&#xe632;</span>
     输入城市/景点/游玩主题
     </div>
     <router-link to="/city">
   <div class="header-right">{{this.$store.state.city}}
     <span class="iconfont xiaJianTou-icon">&#xeb6d;</span>
   </div>
   </router-link>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import '~styles/QuanJu.styl';
//头所有样式
  .header
    display: flex
    // 原来是86px，设计师给的图是2倍的，所以除以2,1rem =50px，所以43px除50就是rem的大小
    line-height  $headerHight
    background  $bgColor
    color #fff
//头左边样式
  .header-left
     width  .64rem
     float  left
  .back-icon
     text-align center
     font-size .4rem
     padding-left 0.2rem
//搜索栏样式
  .header-input
     line-height .64rem
     flex 1
     background-color #fff
     border-radius 0.1rem
     color #ccc
     margin-top .12rem
     margin-bottom .12rem
     text-align center
     margin-left .2rem
//头右边样式
  .header-right
    min-width  1.04rem
    padding 0 .1rem
    float right
    text-align center
    color #fff
  .xiaJianTou-icon
    font-size .23rem
 </style>
