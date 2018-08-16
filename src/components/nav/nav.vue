<template>
  <div class="nav">
      <nav class="n-box">
          <!-- logo -->
          <router-link tag="a" to="/" class="icon">
            <img src="../../common/image/logo.svg" alt="logo">
          </router-link>
          <!-- 导航 -->
          <ul class="n-list">
              <!-- 主导航 -->
              <li class="n-lin">
                  <div class="n-phone">
                      <span>首页</span>
                  </div>
                  <ul class="n-ull">
                       <router-link tag="li" @click.native="tabClick(1)" class="mine" to="/"><a href="" :class="{active:isActive===1}" >首页</a></router-link>
                       <router-link tag="li" @click.native="tabClick(2)" class="mine" to="/book"><a :class="{active:isActive===2}" href="">小册</a></router-link>
                       <router-link tag="li" @click.native="tabClick(3)" class="mine" to="/repos"><a :class="{active:isActive===3}" href="">开源库</a></router-link>
                       <router-link tag="li" @click.native="tabClick(4)" class="mine" to="/activ"><a :class="{active:isActive===4}" href="">活动</a></router-link>
                  </ul>
              </li>
              <!-- 搜索 -->
              <li class="n-f">
                  <form class="n-form">
                      <input type="text" placeholder='搜索掘金' class="n-input">
                      <img class="v-so" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Qjk3RUIxMEEtOEYzNC00QUI1LUFCQUYtNDFEOTMzNzQxRUQwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLpppbpobUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlr7zoiKrmoI/mkJzntKLmoYYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OTAuMDAwMDAwLCAtMTkuMDAwMDAwKSIgZmlsbD0iI0MzQ0NENSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkwLjAwMDAwMCwgMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuOTg2MTI2LDE0LjQwMDMzOTUgTDE2LjI5Mjg5MzIsMTcuNzA3MTA2OCBDMTYuNjgzNDE3NSwxOC4wOTc2MzExIDE3LjMxNjU4MjUsMTguMDk3NjMxMSAxNy43MDcxMDY4LDE3LjcwNzEwNjggQzE4LjA5NzYzMTEsMTcuMzE2NTgyNSAxOC4wOTc2MzExLDE2LjY4MzQxNzUgMTcuNzA3MTA2OCwxNi4yOTI4OTMyIEwxNC40MDAzMzk1LDEyLjk4NjEyNiBDMTUuOTYwMzg4MSwxMC43NTczMjk4IDE1Ljc0NTI0MDIsNy42NjQwMTk4MyAxMy43NTQ4OTU5LDUuNjczNjc1NTQgQzExLjUyMzMyODUsMy40NDIxMDgxNSA3LjkwNTI0MjkyLDMuNDQyMTA4MTUgNS42NzM2NzU1NCw1LjY3MzY3NTU0IEMzLjQ0MjEwODE1LDcuOTA1MjQyOTIgMy40NDIxMDgxNSwxMS41MjMzMjg1IDUuNjczNjc1NTQsMTMuNzU0ODk1OSBDNy42NjQwMTk4MywxNS43NDUyNDAyIDEwLjc1NzMyOTgsMTUuOTYwMzg4MSAxMi45ODYxMjYsMTQuNDAwMzM5NSBaIE03LjA4Nzg4OTEsMTIuMzQwNjgyMyBDNS42MzczNzAzLDEwLjg5MDE2MzUgNS42MzczNzAzLDguNTM4NDA3OSA3LjA4Nzg4OTEsNy4wODc4ODkxIEM4LjUzODQwNzksNS42MzczNzAzIDEwLjg5MDE2MzUsNS42MzczNzAzIDEyLjM0MDY4MjMsNy4wODc4ODkxIEMxMy43OTEyMDExLDguNTM4NDA3OSAxMy43OTEyMDExLDEwLjg5MDE2MzUgMTIuMzQwNjgyMywxMi4zNDA2ODIzIEMxMC44OTAxNjM1LDEzLjc5MTIwMTEgOC41Mzg0MDc5LDEzLjc5MTIwMTEgNy4wODc4ODkxLDEyLjM0MDY4MjMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="">
                  </form>
              </li>
              <!-- 写文章 -->
              <li class="n-group">
                  <div class="n-gd">
                       <button disabled="disabled" class="n-btn">写文章</button>
                       <div class="n-more"  @click="show()" ><i>.</i></div>
                        <ul class="n-ml" v-show="sh">
                            <li>分享链接</li>
                        </ul>
                  </div>
              </li>
            <!-- 提醒 -->
              <li class="n-item">
                  <a href="" class="n-li"></a>
              </li>
              <!-- 头像 -->
              <li class="n-menu">
                  <div class="n-img"></div>
              </li>
              <li class="n-d">
                  <ul>
                      <li>|</li>
                      <li>登录</li>
                      <li class="n-l">.</li>
                      <li>注册</li>
                  </ul>
              </li>
          </ul>
      </nav>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      sh: false,
      isActive: 1
    }
  },
  methods: {
    show () {
      if (this.sh === false) {
        this.sh = true
      } else {
        this.sh = false
      }
    },
    tabClick: function (res) {
      this.isActive = res
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
.nav
    width 100%
    height 60px
    background $color
    border-bottom 1px solid #F1F1F1
    .n-box
        display flex
        box-sizing border-box
        align-items center
        margin 0 auto
        width 960px
        .icon
            flex 0
            padding-right 45px
        .icon img
            flex 0 0 auto
            display inline-block
        & .n-list
            flex 1
            display flex
            height 60px
            // 导航
            .n-lin
                flex 2
                line-height  60px
                height 100%
                .n-phone
                    display none
                .n-ull
                    display flex
                    height 100%
                    .mine
                        display inline-block
                        width 70px
                        height 100%
                        a
                            display inline-block
                            width 100%
                        .active
                            color $hcolor
            // 搜索
            .n-f
                flex 1.1
                width 10px
                margin-left -85px
                .n-form
                    border 1px solid #E5E6E7
                    height 34px
                    background #F9FAFB
                    display flex
                    align-items center
                    justify-content space-between
                    border-radius 2px
                    margin 10px
                    .n-input
                        border none
                        padding 8px
                        font-size 14px
                        outline none
                        box-shadow none
                        background #F9FAFB
                    .v-so
                        cursor pointer
                        margin-left  -25px
                //  写文章
            .n-group
                flex 0.3
                display flex
                left 20pxs
                padding-left 30px
                padding-top 13px
                .n-gd
                    display flex
                    align-items center
                    height 30px
                    background #006CFF
                    border-radius 5px
                    position relative
                    .n-btn
                        border none
                        background #006CFF
                        border-top-left-radius 5px
                        border-bottom-left-radius 5px
                        height 100%
                        color $color
                        border-right  1px solid #fff
                        cursor pointer
                    .n-btn:hover
                         background #317ade
                    .n-more
                        width 10px
                        height 100%
                        cursor pointer
                        i
                            color #fff
                    .n-more:hover
                          background #317ade
                    .n-ml
                        position absolute
                        top 100%
                        left 0
                        right 0
                        padding 5 0
                        font-size 16px
                        color #3b76c5
                        background-color $color
                        border 1px solid #ebebeb
                        border-radius 2px
                        box-shadow 0 1px 2px 0 rgba(0,0,0,.05)
                        z-index 1
                        font-size 14px
                        line-height 30px
                // 铃铛
            .n-item
                width 30px
                a
                    background url('../../common/image/lingdang2.svg') no-repeat
                    background-size 20px
                    display inline-block
                    width 20px
                    height 20px
                    margin-top: 20px
                    margin-left 5px
                a:hover
                    background url('../../common/image/lingdang.svg') no-repeat
                    background-size 20px
            // 头像
            .n-menu
                width 30px
                height 100%
                .n-img
                   border-radius 15px
                   width 30px
                   height 30px
                   background #ccc
                   margin-top 12px
                   margin-left 5px
            .n-d
                position relative
                display none
                ul
                    position absolute
                    top: 20px
                    left -60px
                    display flex
                    li
                        flex 1
                        width 35px
                        color $hcolor
</style>
