
<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
   </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        //   添加轮播图下面的圆圈标识
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/26c9b54e3e02d3724f614883d77a62c6.jpg_750x200_57aa8efa.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/389d0194766566f8f1185aa19b759c25.jpg_750x200_22620261.jpg'
      },
      {
        id: '0003',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
      },
      {
        id: '0004',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ed5f4115226306e48e6fad106a038afe.jpg_750x200_64df48d6.jpg'
      },
      {
        id: '0005',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/a9658b2ee2c2c6de227c9710a8b04d48.jpg_750x200_f38fba28.jpg'
      }]
    }
  }

}
</script>

<style lang="stylus" scoped>
  .swiper-img
    width 100%
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 27%
</style>
