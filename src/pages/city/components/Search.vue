<template>
   <div>
    <div class="search">
     <input class="search-input" type="text"  placeholder="输入城市名或拼音">
    </div>
    </div>
</template>

<script>

export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/Quanju.styl'
.search
    background $bgColor
    height .72rem
    padding .1rem
.search-input
    box-sizing border-box
    height .62rem
    line-height .62rem
    width 100%
    text-align center
    border-radius .06rem
    color #666
    padding 0 .1rem
</style>
