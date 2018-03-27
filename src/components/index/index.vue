<template>
  <div class="tab">
    <!-- 导航 -->
    <div class="t-n">
      <ul class="t-u">
        <router-link tag="li" to="/" class="active">我关注的</router-link>
        <router-link tag="li" to="/">Android</router-link>
        <router-link tag="li" to="/">前端</router-link>
        <router-link tag="li" to="/">iOS</router-link>
        <router-link tag="li" to="/">后端</router-link>
        <router-link tag="li" to="/">设计</router-link>
        <router-link tag="li" to="/">产品</router-link>
        <router-link tag="li" to="/">工具资源</router-link>
        <router-link tag="li" to="/">阅读</router-link>
        <router-link tag="li" to="/">人工智能</router-link>
      </ul>
      <div class="t-d"><a href="">标签管理</a></div>
    </div>
    <!-- 主体 -->
    <div class="t-z">
      <!-- 主体文章栏 -->
      <div class="t-wrapper">
        <!-- 分享 -->
        <div class="t-header">
          <ul class="t-w">
            <li class="t-i"></li>
            <li><img src="../../common/image/write.svg" alt=""><a href="">写文章</a></li>
            <li><img src="../../common/image/share.svg" alt=""><a href="">分享链接</a></li>
          </ul>
          <div class="t-a"><a href="">草稿</a></div>
        </div>
        <!-- 热门 -->
        <div class="t-r">
          <ul class="t-ul1">
            <router-link tag="li" to="/">热门</router-link>
            <li>|</li>
            <router-link tag="li" to="/">最新</router-link>
            <li>|</li>
            <router-link tag="li" to="/">评论</router-link>
          </ul>
          <ul class="t-ul2">
            <router-link tag="li" to="/">本周最热</router-link>
            <li>.</li>
            <router-link tag="li" to="/">本月最热</router-link>
            <li>.</li>
            <router-link tag="li" to="/">历史最热</router-link>
          </ul>
        </div>
      </div>
      <!-- 右侧边栏 -->
      <div class="t-menu"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
.tab
  width 100%
  height 46px
  background $color
  // 导航
  .t-n
    display flex
    box-sizing border-box
    align-items center
    margin 0 auto
    width 960px
    justify-content space-between
    .t-u
      flex 0 0 auto
      display flex
      li
        felx 1
        cursor pointer
        margin-right 20px
        color $fcolor
        font-size 14px
        font-weight 530
      li:hover
        color $hcolor
      .active
        color $hcolor
    .t-d
      line-height 46px
  // 主体
  .t-z
    display flex
    box-sizing border-box
    margin 0 auto
    margin-top 20px
    width 960px
    justify-content space-between
    .t-wrapper
      display felx
      margin-right 20px
      background $color
      width 100%
      height 50px
      .t-header
        flex 1
        display flex
        justify-content space-between
        .t-w
          display flex
          position relative
          li
            flex 0 0 auto
            margin-right 30px
            margin-top 15px
          .t-i
            background-image: url("../../common/image/logo.svg")
            width 50px
            height 50px
            margin-top 0
          img
            vertical-align: middle;
          a
            font-size 14px
            color $hcolor
        .t-a
          margin-top 17px
          margin-right 20px
          font-size 14px
      .t-r
        display flex
        justify-content space-between
        margin-top 15px
        height 46px
        background $color
        .t-ul1
          margin-left 25px
          display flex
          li
            margin-right 13px
            font-size 14px
            line-height 46px
            color $fcolor
        .t-ul2
          margin-right 15px
          display flex
          li
            margin-right 13px
            font-size 14px
            line-height 46px
            color $fcolor
    .t-menu
      background $color
      height 520px
      flex 0 0 240px
</style>
