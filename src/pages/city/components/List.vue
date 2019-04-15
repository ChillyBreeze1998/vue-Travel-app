<template>
  <div class="list" ref="wrapper">
      <div>
      <div class="area">
          <div class="title" border-topbuttom>当前城市</div>
          <div class="button-list">
             <div class="button-wrapper">
                  <div class="button">{{this.$store.state.city}}</div>
             </div>
         </div>
      </div>
       <!-- ajax获取热门城市的信息 -->
      <div class="area">
          <div class="title" border-topbuttom>热门城市</div>
           <div class="button-list">
                  <div class="button-wrapper" v-for="item in hot" :key="item.id"
                  @click="handleCityClick (item.name)"
                  >
                  <div class="button">{{item.name}}</div>
             </div>
            </div>
          </div>
          <!-- ajax获取字母对应区域城市的信息 -->
     <div class="area" v-for="(item, key) in cities" :key="key" :ref="key"><!--想直接操作dom，必须用ref注册-->
          <div class="title" border-topbuttom>{{key}}</div>
          <div class="item-list">
              <!-- 二次循环继续循环key(城市字母)内部的值 -->
              <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id"
               @click="handleCityClick (innerItem.name)"
              >{{innerItem.name}}</div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
// 引入better-scroll插件（上下滚动）,实现原生滚动的效果
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    // 在这里接收父组件的letter,这样就监听到了
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('./')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  //   在这里侦听letter的变化
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/Quanju.styl'
.list
    overflow hidden
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0
    background rgb(247, 247, 247)
.title
    overflow hidden
    line-height .5rem
    padding-left .2rem
    color #666
    font-size .26rem
.button-list
    background #fff
    overflow hidden
    padding .1rem .6rem .1rem .1rem
.button-wrapper
    float left
    width 33.33%
.button
    margin .1rem
    padding .1rem 0
    text-align center
    border .02rem solid #ccc
    border-radius .06rem
.item-list
 .item
    background #fff
    line-height .76rem
    color #666
    padding-left .2rem
.border-bottom
    &:before
     border-color #ccc
</style>
