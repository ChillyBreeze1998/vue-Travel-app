<template>
<div>
    <div class="banner" @click="handleBannerClick">
       <img class="banner-img" :src="bannerImg">
       <div class="banner-info">
           <div class="banner-title">{{this.sightName}}</div>
       </div>
        <div class="banner-number">
                 <span class="iconfont banner-number-img">&#xe691;</span>
               {{this.bannerImgs.length}}
               </div>
    </div>
    <fade-animation>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1605/99/994a4f48dd1ee9fa90.water.jpg_r_800x800_25dde9cc.jpg',
        'http://img1.qunarzz.com/sight/p0/1605/99/994a4f48dd1ee9fa90.water.jpg_r_800x800_25dde9cc.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
.banner-img
    width 100%
.banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .8rem
    color #fff
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
.banner-title
    flex 1
    font-size .4rem
.banner-number
    position absolute
    top 3rem
    left .2rem
    padding 0 .4rem
    height .4rem
    line-height .4rem
    border-radius .2rem
    background rgba(0,0,0,.6)
    color #fff
    font-size .1rem
.banner-number-img
    font-size .1rem
</style>
