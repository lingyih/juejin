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
      <div class="t-wrapper"></div>
      <div class="t-menu"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tab
  width 100%
  height 46px
  background #ffffff
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
        color #96A1A2
        font-size 14px
        font-weight 530
      li:hover
        color #317ADE
      .active
        color #317ADE
    .t-d
      line-height 46px

</style>
