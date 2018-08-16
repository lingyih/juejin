<template>
  <div class="w-tab">
      <div class="w-wrapper">
          <div class="w-w">
                <div>热门文章</div>
                <ul>
                    <router-link tag="li" class="active" to="/">推荐</router-link>
                    <router-link tag="li" to="/">前端</router-link>
                    <router-link tag="li" to="/">Android</router-link>
                    <router-link tag="li" to="/">后端</router-link>
                    <router-link tag="li" to="/">人工智能</router-link>
                    <router-link tag="li" to="/">iOS</router-link>
                    <router-link tag="li" to="/">工具资源</router-link>
                    <router-link tag="li" to="/">阅读</router-link>
                </ul>
          </div>
          <router-view></router-view>
      </div>
      <div class="w-menu">
          <div class="w-m">
              <div class="w-s">掘金 - juejin.im</div>
              <div>一个帮助开发者成长的社区</div>
              <input type="text" placeholder="昵称" class="w-d">
              <input type="text" placeholder="邮箱 / 手机" class="w-a">
              <input type="text" placeholder="密码 (不少于6位)" class="w-q">
              <button type="submit">立即注册</button>
              <div class="w-i">
                  第三方登录:
                  <img src="../../common/image/weibo.svg" alt="">
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ2cHgiIGhlaWdodD0iNDZweCIgdmlld0JveD0iMCAwIDQ2IDQ2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjEgKDI4MjE1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX0dpdEh1YjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i54q25oCBIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5rOo5YaMIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzU4LjAwMDAwMCwgLTYwMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1OC4wMDAwMDAsIDYwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzE0IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNEOEQ4RDgiIHg9IjAiIHk9IjAiIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUsMjMuNDMwNzU3NiBDNSwzMS4xMzE3NDk3IDEwLjEwMjQ5MjMsMzcuNjY0MjcxMiAxNy4xNzk1MDgsMzkuOTY5MTExNyBDMTguMDcwNTU4Miw0MC4xMjk2MTU5IDE4LjM5NTI3MjIsMzkuNTkxMzkxOCAxOC4zOTUyNzIyLDM5LjEyOTEzOTcgQzE4LjM5NTI3MjIsMzguNzE2MTA4OCAxOC4zNzk5NjU4LDM3LjYxOTMzIDE4LjM3MTIxOTMsMzYuMTY1MTYxOCBDMTMuNDE3NDE3NiwzNy4yMTgwNjk1IDEyLjM3MjIxMDMsMzMuODI4MjIwNSAxMi4zNzIyMTAzLDMzLjgyODIyMDUgQzExLjU2MjA2NTMsMzEuODE0NDI3NiAxMC4zOTQ0MDY5LDMxLjI3ODM0MzYgMTAuMzk0NDA2OSwzMS4yNzgzNDM2IEM4Ljc3NzM5Njc3LDMwLjE5NzYxNTIgMTAuNTE2ODU3OSwzMC4yMTkwMTU4IDEwLjUxNjg1NzksMzAuMjE5MDE1OCBDMTIuMzA0NDI0OCwzMC4zNDIwNjkgMTMuMjQ0Njc0MSwzMi4wMTU1OTI5IDEzLjI0NDY3NDEsMzIuMDE1NTkyOSBDMTQuODMzMjU4MSwzNC42Nzg4OTI4IDE3LjQxMzQ3NywzMy45MDk1NDI2IDE4LjQyODA3MTUsMzMuNDYzMzQwOSBDMTguNTg5ODgxOSwzMi4zMzc2NzE0IDE5LjA1MDE2NjcsMzEuNTY5MzkxMiAxOS41NTg1NTczLDMxLjEzMzg4OTggQzE1LjYwNDA0MzgsMzAuNjk0MTA4MiAxMS40NDYxNzQxLDI5LjE5ODIwOSAxMS40NDYxNzQxLDIyLjUxOTA5MzYgQzExLjQ0NjE3NDEsMjAuNjE2NTgzNyAxMi4xNDA0Mjc5LDE5LjA1OTY5MjggMTMuMjc5NjYwMSwxNy44NDIwMDA5IEMxMy4wOTU5ODM1LDE3LjQwMTE0OTMgMTIuNDg0ODIxNSwxNS42MjgxMTI3IDEzLjQ1NDU5MDIsMTMuMjI5MTA5OCBDMTMuNDU0NTkwMiwxMy4yMjkxMDk4IDE0Ljk0OTE0OTIsMTIuNzYwNDM3NSAxOC4zNTE1Mzk2LDE1LjAxNjA1NjcgQzE5Ljc3MTc1MzMsMTQuNjI4NzA2NSAyMS4yOTU4MzE4LDE0LjQzNjEwMTUgMjIuODEwMDcwNSwxNC40Mjg2MTEzIEMyNC4zMjMyMTU4LDE0LjQzNjEwMTUgMjUuODQ2MjAxLDE0LjYyODcwNjUgMjcuMjY4NjAxMywxNS4wMTYwNTY3IEMzMC42Njg4MDUxLDEyLjc2MDQzNzUgMzIuMTYxMTc3NCwxMy4yMjkxMDk4IDMyLjE2MTE3NzQsMTMuMjI5MTA5OCBDMzMuMTMzMTMyOCwxNS42MjgxMTI3IDMyLjUyMTk3MDgsMTcuNDAxMTQ5MyAzMi4zMzkzODc1LDE3Ljg0MjAwMDkgQzMzLjQ4MDgwNjQsMTkuMDU5NjkyOCAzNC4xNjk1OTM2LDIwLjYxNjU4MzcgMzQuMTY5NTkzNiwyMi41MTkwOTM2IEMzNC4xNjk1OTM2LDI5LjIxNTMyOTQgMzAuMDA1MTY0LDMwLjY4ODc1ODEgMjYuMDM4NjI0MSwzMS4xMTk5Nzk0IEMyNi42NzcxMTg5LDMxLjY1ODIwMzUgMjcuMjQ2NzM1LDMyLjcyMTgxMTUgMjcuMjQ2NzM1LDM0LjM0ODI1NDIgQzI3LjI0NjczNSwzNi42Nzc3MDUzIDI3LjIyNDg2ODgsMzguNTU3NzQ0NyAyNy4yMjQ4Njg4LDM5LjEyOTEzOTcgQzI3LjIyNDg2ODgsMzkuNTk1NjcxOSAyNy41NDYzMDI4LDQwLjEzODE3NjEgMjguNDQ5Mzc5NSwzOS45NjgwNDE3IEMzNS41MjA5Mjg2LDM3LjY1Nzg1MSA0MC42MTkwNDc2LDMxLjEyOTYwOTcgNDAuNjE5MDQ3NiwyMy40MzA3NTc2IEM0MC42MTkwNDc2LDEzLjgwMzcxNDkgMzIuNjQ0NDIxOCw2IDIyLjgwNzg4MzgsNiBDMTIuOTc0NjI1OCw2IDUsMTMuODAzNzE0OSA1LDIzLjQzMDc1NzYgWiIgaWQ9IkZpbGwtMyIgZmlsbD0iIzE2MTYxNCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="">
                  <img src="../../common/image/weixin.svg" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
.w-tab
    display flex
    margin 0 auto
    width 960px
    justify-content space-between
    margin-top 20px
    .w-wrapper
        flex 1
        height 58px
        margin-right 20px
        background $color
        .w-w
            display flex
            width 100%
            justify-content space-between
            div
                flex 1
                line-height 58px
                margin-left 20px
                font-size 18px
            ul
                display flex
                line-height 58px
                li
                    margin-right  20px
                    color $fcolor
                    font-size 14px
                    cursor pointer
                .active
                    color $hcolor
    .w-menu
        flex 0 0 240px
        height 312px
        background $color
        .w-m
            margin-top 20px
            margin-left 20px
            div
                margin-top 10px
                font-size 14px
            .w-s
                font-weight 800
            input
                margin-top 20px
                height 35px
                font-size 14px
                padding-left 10px
                padding-right 20px
                background #FBFBFB
            button
                margin-top 10px
                height 35px
                width 92%
                background-color $hcolor
                border 0px
                color $color
                cursor pointer
            .w-i
                color $fcolor
                img
                    height 20px
                    width 20px
                    cursor pointer
                    margin-left 10px
                    vertical-align middle
</style>
