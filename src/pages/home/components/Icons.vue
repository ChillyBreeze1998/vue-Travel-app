<template>
   <div class="icons">
    <swiper :options="swiperOption">
     <swiper-slide v-for="(page, index) of pages" :key="index" >
      <div class="icon" v-for= "item of page" :key="item.id">
          <div class="icon-img">
          <img class="icon-img-centenet" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
         </div>
        </swiper-slide>
          </swiper>
          </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {

      },

      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '石家庄必游'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '天津海昌'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '荣国府'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '石家庄动物园'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/d1/5053d0519cf1cc02.png',
        desc: '红崖谷'
      }, {
        id: '0009',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        desc: '北京欢乐谷'
      }, {
        id: '0010',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f85ce21492e4f7896498dc70dc43f8b3.png',
        desc: '天桂山'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        //   如果不存在pages下的page(超过8个自动隐藏，因为样式写了overflow hidden，超过大小自动隐藏)，如果不存在则让他等于一个新的空数组，这样就变成2个数组了
        if (!pages[page]) {
          pages[page] = []
        }
        // 每个数组加上item每一条
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus">
@import '~styles/Quanju.styl';
@import '~styles/mixins.styl';
.icons
     overflow hidden
     height 0
     padding-bottom 50%
     background-color #fff
.icons>>> .swiper-container
     height 0
     padding-bottom 50%
.icon
     position relative
     float left
     width 25%
     padding-bottom 25%
     height 0
.icon-img
     position absolute
     top:0
     left 0
     right 0
     bottom .44rem
     box-sizing border-box
     padding .1rem
.icon-img-centenet
     height  100%
     display block
     margin 0 auto
.icon-desc
     position absolute
     left 0
     right 0
     bottom 0
     line-height  .44rem
     height .44rem
     text-align center
     color $darkTextColor
     ellipsis()
</style>
