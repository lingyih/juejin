<template>
  <div class="m-header">
    <div>
      <bookCard v-for="(item, index) in list" :key="index" :content="item"></bookCard>
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
</template>

<script type="text/ecmascript-6">
import bookCard from '../../common/com/bookCard/bookCard'
export default {
  data () {
    return {
      list: [
        {img: 'https://user-gold-cdn.xitu.io/2018/7/30/164ea7de07b7f79e?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1', title: 'Redis 深度历险：核心原理与应用实践', con: '大型互联网企业 Redis 实践总结，结合实际问题深入讲解 Redis 内部机制', avatar: 'https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', nickname: '凌逸', jian: '掌阅服务端技术专家，互联网分布式高并发技术十年老兵', money: 55.4, jie: 24, time: 2444, man: 100},
        {img: 'https://user-gold-cdn.xitu.io/2018/7/9/1647ec6a35f14466?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1', title: '前端进阶：React 企业管理系统开发指南', con: '基于 React 的企业管理系统开发经验，带你学习如何抽象复杂业务逻辑，帮助团队实现效能提升', avatar: 'https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', nickname: '凌逸', jian: '阿里巴巴集团前端工程师，知乎 pure render 专栏核心作者', money: 20.0, jie: 21, time: 2555, man: 1001},
        {img: 'https://user-gold-cdn.xitu.io/2018/6/26/1643b682a5be1090?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1', title: '基于 Go 语言构建企业级的 RESTful API 服务', con: 'Go 服务器开发大型实战，带你一步步构建 API 开发中的各个功能点，最终完成一个企业级的 API 服务器', avatar: 'https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', nickname: '凌逸', jian: 'sssssss', money: 19.9, jie: 15, time: 233, man: 999},
        {img: 'https://user-gold-cdn.xitu.io/2018/6/11/163ee322e6d2c827?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1', title: '深入理解 RPC : 基于 Python 自建分布式高并发 RPC 服务', con: '通过「造轮子」自建 Python RPC 服务，深入理解分布式高并发原理与实践', avatar: 'https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', nickname: '凌逸', jian: 'sssssss', money: 120, jie: 24, time: 1500, man: 10},
        {img: 'https://user-gold-cdn.xitu.io/2018/5/17/1636d772f3d23cf1?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1', title: '区块链开发入门：从 0 到 1 构建基于以太坊智能合约的 ICO DApp', con: '写给前端开发者的第一本区块链开发入门指南，通过 DApp 开发实战（基于以太坊创始人  V 神的 DAICO 设计思想），深入掌握区块链及以太坊技术', avatar: 'https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', nickname: '凌逸', jian: 'sssssss', money: 19.9, jie: 24, time: 2444, man: 100},
        {img: 'https://user-gold-cdn.xitu.io/2018/4/9/162a9c24e48d274b?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1', title: '基于 JavaScript 开发灵活的数据应用', con: '使用 JavaScript、ECharts、Vue.js 等开发工具，完成各种数据结构的处理、转换、动态过滤以及数据可视化的开发。', avatar: 'https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', nickname: '凌逸', jian: 'sssssss', money: 11.1, jie: 15, time: 240, man: 100},
        {img: 'https://user-gold-cdn.xitu.io/2018/1/16/160fdc404b36a1a0?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1', title: '剖析 Vue.js 内部运行机制', con: '把原理抽象为小 Demo，以一种对新手友好的方式带领读者漫游 Vue.js 的世界', avatar: 'https://user-gold-cdn.xitu.io/2018/5/16/1636811dc757d981?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', nickname: '凌逸', jian: 'sssssss', money: 19.9, jie: 25, time: 300, man: 1010}
      ]
    }
  },
  components: {
    bookCard
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
.m-header
  height 100px
  width 960px
  margin  0 auto
  margin-top 20px
  display flex
  justify-content space-between
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
