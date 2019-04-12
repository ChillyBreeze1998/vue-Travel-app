<template>
<div>
    <div class="recommend">
    <div class="recommend-title">
        周末去哪儿
    </div>
    <ul>
        <li class="item border-bottom" v-for="item in list" :key="item.id">
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
  props: {
    list: Array
  },
  data () {
    return {

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
