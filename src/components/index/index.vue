<template>
  <div class="tab">
    <!-- 导航 -->
    <div class="t-n">
      <ul class="t-u">
        <router-link tag="li" @click.native="tabClicks(1)" :class="{active:isActives===1}" to="/?id=1">我关注的</router-link>
        <router-link tag="li" @click.native="tabClicks(2)" :class="{active:isActives===2}" to="/?id=2">Android</router-link>
        <router-link tag="li" @click.native="tabClicks(3)" :class="{active:isActives===3}" to="/?id=3">前端</router-link>
        <router-link tag="li" @click.native="tabClicks(4)" :class="{active:isActives===4}" to="/?id=4">iOS</router-link>
        <router-link tag="li" @click.native="tabClicks(5)" :class="{active:isActives===5}" to="/?id=5">后端</router-link>
        <router-link tag="li" @click.native="tabClicks(6)" :class="{active:isActives===6}" to="/?id=6">设计</router-link>
        <router-link tag="li" @click.native="tabClicks(7)" :class="{active:isActives===7}" to="/?id=7">产品</router-link>
        <router-link tag="li" @click.native="tabClicks(8)" :class="{active:isActives===8}" to="/?id=8">工具资源</router-link>
        <router-link tag="li" @click.native="tabClicks(9)" :class="{active:isActives===9}" to="/?id=9">阅读</router-link>
        <router-link tag="li" @click.native="tabClicks(10)" :class="{active:isActives===10}" to="/?id=10">人工智能</router-link>
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
            <router-link tag="li" to="/" @click.native="tabClick(1)" :class="{active:isActive===1}">热门</router-link>
            <li>|</li>
            <router-link tag="li" to="/"  @click.native="tabClick(2)" :class="{active:isActive===2}">最新</router-link>
            <li>|</li>
            <router-link tag="li" to="/"  @click.native="tabClick(3)" :class="{active:isActive===3}">评论</router-link>
          </ul>
          <ul class="t-ul2">
            <router-link tag="li" @click.native="tabClick(4)" :class="{active:isActive===4}" to="/">本周最热</router-link>
            <li>.</li>
            <router-link tag="li" @click.native="tabClick(5)" :class="{active:isActive===5}" to="/">本月最热</router-link>
            <li>.</li>
            <router-link tag="li" @click.native="tabClick(6)" :class="{active:isActive===6}" to="/">历史最热</router-link>
          </ul>
        </div>
        <Card v-for="(item, index) in list" :key="index" :content="item"></Card>
      </div>
      <!-- 右侧边栏 -->
      <div class="t-menu">
        <!-- 二维码 -->
        <div class="t-m">
          <div class="t-i">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFDElEQVR4Xu2c23LbMAxEnT/vn7uTphq7qsSzC4AW7UFfQQLgLm6knH7d7/f7rf8tg8DXNyFfv17vz/3J5pH9Z/neO8Vf0r/XmbVXhWAT8hfJJqQz5DCpOkM6Q34QcGu8W6Oz+rP7XX+39acZMqqprjFq2kqTHjXhiH4C3JG7eIyGlCbkdrtlCW1ChJLnRPjbEXJFSclGXXZ/llCyf6ZfKlmzCSHnI/bdnuOuJ8LoTE0I3HuaEOO5pjNEaJrRlNz2OWN1BSHkb2dIMkOyhFbujwTMx/WQSkApeyJjMelsQnYIVRL6cRkSOZBb852IHT1tHPXAiP9LZ0jkQE0IhdigJMyowU1IE/IPAh99U++S9eBaessyk+O/5ZGS5X7jrlzvNvVKfJoQAU0KKEHFcMmz/iZEQHMJQgQ/U0uoKZKcjNP+rJzsR+Vv8asTitAr5FHAaV8TEvymTsBG5U1IE/ITO7NrOOmnCM7uJ/1n8j8ZEt1ctS/SA8h2FlDnNZh8ceRNyAlaTcgOmMoIjzzNXEpItcOKvizgThm4Yq37lLP5GJ6yogY3w1lCsvb3JGX9Genby0YB24T8RasJMX+4VhWBZ+XrowhRekZ1HV+9ZEVLYslrL90jnBqqEucSQhng6nMBJ/vY1J2xrwmpe3noDDlo6pGMpgwguZUhkR6hOqCWKFpH9rLyrH3afzkhDkBKxFaW2FcE4Nn5pZI1w8Em5BFm9jf1JoQLDgWYOpVNyxA+greCDjxb7nnLq4cli7d7K2gMzmYceUP2I/tpD8nVHjflewgB0oSc09eEHGATCZjSDFEcoBpNDmXlWftqyfj2U8HDPY/6NCM/v2cBGU0Z7j0jAphDiOKPcx4iTxp71TGNjJ3J1YjZ9mcDogkBppoQ82IYjfxZ+2ZmSMVU6GQgfsKN1EwC3s2Aan1ZgCgAHP0Ovodjb6RpOk0uot8l2AEskiGO/iZk91NVyr7lCIlELB2yWu5mSNY+lays/rP98j1k9hhMB7ySEKfk0DlojG9CThCcHQD2Bypi+tUpPRug2UOJWmHCGUKEvbt8dsCVfg/JTiWR/S7BBKgztipDj6NvdJbQ83sEUAcgBQAiyLFHuhR/mhDjrYwCaDlC3AigAyr61CZHYEXllEFRvUdjrTI2b/7ITT2TkkSg4nD1FNSE7BDNjrGV+yMZTRnk+tcZkvz7lI8mJBKhbgQSgNXyaEkMjb3VzlOPIXmkB9EZnJ5J/jnyJiTwlqUEAGVI6U2dosuVOxEUHStdny7NkEgNdw84+95BEen6S/pITvbKX3vJIMndpkwAZCPaDRjyJ3pvki+GBLArb0IeiIV+KOcCTuubkIUJqehhVEJI/sqShb/LoimHop3kpD8rrxhDnZrv2lPWb2ukv6AiwEmeBZz2KwfOZEj2fIp/TQignJ3a3B5pERKp8RSRWTlFrdsTXH3uejrvUoTQ4SIB0YTsEKCIyJYEIrEJaUKGMUIBunTJqihRq2WImtHS2BsBiCIiOoVsB8voV8bQrH8qAfvzNCHCfzWuEOgScJbBTUgT8hMbVHIo4rL7Sf9VPWiJDHGfRl5RQkaEKPajPagJEVPFBdhdv9TY2xnyiIplM+SqGi4mDC6bmiFoHRZQBij3HLeJz15PmDhPQ8+6pAwh4yRvQgghs2Tp6o5XNiE6gkv86kQpWfqR1lyp9pS3JUQ94Bk91GOiPeDbHlWE0T2mCQkASDmYIeQ37vz1cP7VtusAAAAASUVORK5CYII=" alt="">
            <div class="t-d">
            <p>下载掘金客户端</p>
            <a href="">一个帮助开发者成长的社区</a>
            </div>
          </div>
        </div>
        <!-- 书籍 -->
        <div class="t-b">
          <div class="t-x">你可能感兴趣的小册</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Card from '../../common/com/card/card'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      isActive: 1,
      isActives: 1,
      list: [
          {title: '我的关注', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
    }
  },
  components: {
    Card
  },
  methods: {
    ...mapMutations(['tab']),
    tabClick: function (res) {
      this.isActive = res
    },
    tabClicks: function (res) {
       this.tab(res)
      this.isActives = res
      switch (res) {
      case 1:
        this.list = [
          {title: '我的关注', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 2:
        this.list = [
          {title: 'Android', name: 'jer', category: 'VUE', time: '三天前', hot: true, special: false, news: '25', Fabulous: '202'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 3:
        this.list = [
          {title: '前端', name: 'peorp', category: 'JS', time: '十天前', hot: false, special: true, news: '2550', Fabulous: '55'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 4:
        this.list = [
          {title: 'iOS', name: 'jerry', category: 'adndd', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 5:
        this.list = [
          {title: '后端', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 6:
        this.list = [
          {title: '设计', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 7:
        this.list = [
          {title: '产品', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 8:
        this.list = [
          {title: '工具资源', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 9:
        this.list = [
          {title: '阅读', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      default:
        this.list = [
          {title: '人工智能', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
    }
    }
  }
}
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
    border-radius 2px
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
            cursor pointer
          .active
            color $hcolor
          li:hover
            color $hcolor
        .t-ul2
          margin-right 15px
          display flex
          li
            margin-right 13px
            font-size 14px
            line-height 46px
            color $fcolor
            cursor pointer
          .active
            color $hcolor
          li:hover
            color $hcolor
  .t-menu
    height 520px
    flex 0 0 240px
    .t-m
      height 80px
      width 100%
      background $color
      .t-i
        width 210px
        margin-left 20px
        padding-top 15px
        display flex
        img
          height 50px
          width 50px
        .t-d
          display flex
          flex-direction column
          margin-left 10px
          p
            font-weight 600
            margin-top 8px
          a
            font-size 10px
            margin-top 10px
    .t-b
      margin-top 10px
      background $color
      width 100%
      height 30px
      .t-x
        line-height 30px
        font-size 14px
        margin-left 20px
        color $fcolor
</style>
