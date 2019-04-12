<template>
<div>
    <div class="recommend">
    <div class="recommend-title">
        周末去哪儿
    </div>
    <ul>
        <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
               <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl">
               </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc"> <span>{{item.desc}} </span></p>
            </div>
        </li>
    </ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/b5/102e9610089aa5.jpg_r_640x214_80fe0bd7.jpg',
        title: '石家庄温泉胜地',
        desc: '石家庄有没有让你心动的温泉'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/83/d532bca9d7b91a.jpg_r_640x214_c3069246.jpg',
        title: '石家庄必游',
        desc: '旅游资源丰富，名胜古迹众多'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/82/06e79c5f8d6e7.jpg_r_640x214_5e63707e.jpg',
        title: '当地人玩什么',
        desc: '石家庄人民周末好玩法，来这里欣赏“红日浴海”的奇景，观看海上壮观的日出景象'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend-title
    box-sizing border-box
    padding-left .4rem
    padding-top .25rem
    font-size 0.3rem
    flex 1
    height .8rem

//   每一条图文的样式
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 38.3%
.item-img
    width 100%
.item-info .item-title
    font-size .3rem
.item-info
   background-color #fff
   flex 1
   padding .1rem
   height 1.04rem
   line-height .5rem
.item-desc
    overflow:hidden
    text-overflow ellipsis
    white-space nowrap
    color #616161
    font-size .24rem
</style>
