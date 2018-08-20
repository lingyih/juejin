<template>
  <div class="m-header">
    <div class="top">
      <div class="left">
        <lunBannar :list="list"></lunBannar>
      </div>
      <div class="right">
        假装这是个日历(｀・ω・´) 
      </div>
    </div>
    <div class="content">
      <event v-for="(item, index) in cList" :key="index"></event>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import lunBannar from '../../common/com/lunBannar/lunBannar'
import event from '../../common/com/event/event'
export default {
  data () {
    return {
      list: [
        {img: 'https://user-gold-cdn.xitu.io/153197025999312907462f883c163e56c6fbf2c9126bf.jpg?imageView2/1/w/460/h/270/q/85/format/webp/interlace/1'},
        {img: 'https://user-gold-cdn.xitu.io/153197025999312907462f883c163e56c6fbf2c9126bf.jpg?imageView2/1/w/460/h/270/q/85/format/webp/interlace/1'},
        {img: 'https://user-gold-cdn.xitu.io/153197025999312907462f883c163e56c6fbf2c9126bf.jpg?imageView2/1/w/460/h/270/q/85/format/webp/interlace/1'}
      ],
      cList: [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
      ]
    }
  },
  components: {
    lunBannar,
    event
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
.m-header
  height 900px
  width 960px
  margin  0 auto
  margin-top 20px
  text-align center
  .top
    width 100%
    height 280px
    display flex
    justify-content space-between
    .left
      width 470px
      height 100%
    .right
      width 470px
      height 100%
      background-color $color
      line-height 280px
      color $hcolor
      border-radius 3px
  .content
    display flex
    flex-wrap wrap
    margin-left 6px
</style>
