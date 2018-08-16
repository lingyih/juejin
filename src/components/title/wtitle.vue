<template>
  <div class="wt">
    <div class="wt-t">
      <div class="wt-p">
        <p class="wt-pp">移动端</p>
        <ul class="wt-u">
          <li><span class="wt-s">ddd</span></li>
          <li><span>ddd</span></li>
          <li><span>ddd</span></li>
        </ul>
      </div>
      <div class="wt-i">
        <img src="../../common/image/logo.svg" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
.wt
  background $color
  .wt-t
    flex 0
    display flex
    justify-content space-between
    border-top 1px solid #F6F6F6
    height 98px
    .wt-p
      display flex
      flex-direction column
      margin-top 25px
      margin-left 20px
      .wt-pp
        margin-right 10px
        font-weight 800
      .wt-u
        display flex
        margin-top 15px
        li
          margin-right 10px
          .wt-s
            background #56C4E1
            font-size 10px
            line-height 20px
            display inline-block
            width 35px
            padding-left 10px
            color $color
            border-radius 3px
    .wt-i
      margin-top 25px
      margin-right 20px
</style>
