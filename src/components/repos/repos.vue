<template>
  <div class="m-header">
    <div class="left">
      <div class="bannar">
        <Bannar :list="list"></Bannar>
      </div>
      <div class="left-header">
        <div>推荐开源库</div>
        <div class="ding">定制推荐</div>
      </div>
      <listCard v-for="(item, index) in cList" :key="index" :content="item"></listCard>
    </div>
    <div class="right">
      <TabCard v-for="(item, index) in tabList" :key="index" :content="item"></TabCard>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bannar from '../../common/com/bannar/bannar'
import TabCard from '../../common/com/tabcard/tabCard'
import listCard from '../../common/com/listcard/listCard'
export default {
  data () {
    return {
      list: [
        {imgShow: true, img: 'https://user-gold-cdn.xitu.io/2018/7/10/164835b6a7ffd6e0?imageView2/1/w/288/h/288/q/85/format/webp/interlace/1', title: 'SwiftEntryKit - 简洁易用的iOS 通知/弹出框的开源库', content: 'SwiftEntryKit is a simple and versatile pop-up presenter written '},
        {imgShow: false, img: '', title: '全屏滚动插件fullPage.js', content: '如果您愿意，可以使用bower或npm安装fullPage.js： HTML文件中的首行HTML代码必须使用HTML DOCTYPE 声明，否则可能会遇到代码段高度问题。HTML 5 doctype中的示例： 。 每个代码段定义为包含的元素。 第一个代码段作为第一屏，是默认激活。 代码段应被包含在...'},
        {imgShow: false, img: '', title: '一个基于 redux 和 redux-saga 的数据流方案 | DvaJS', content: '30分钟上手@dva 2.x'}
      ],
      tabList: [
        {
          title: '前端',
          con: [
            'javarscipt',
            'vue',
            'css',
            'js'
          ],
          ct: [
            {
              title: '前端',
              con: [
                'javarscipt',
                'vue',
                'css',
                'js'
              ]
            }
          ]
        },
        {
          title: '后端',
          con: [
            'php',
            'java',
            'pyhton',
            'go'
          ],
          ct: [
            {
              title: '后端',
              con: [
                'php',
                'java',
                'pyhton',
                'go',
                'javarscipt',
                'vue',
                'css',
                'js'
              ]
            },
            {
              title: '后端',
              con: [
                'php',
                'java',
                'pyhton',
                'go',
                'javarscipt',
                'vue',
                'css',
                'js'
              ]
            },
            {
              title: '后端',
              con: [
                'php',
                'java',
                'pyhton',
                'go',
                'javarscipt',
                'vue',
                'css',
                'js'
              ]
            }
          ]
        },
        {
          title: 'UI',
          con: [
            '制图',
            '切图',
            '交给',
            '是是是',
            'vue',
            'css',
            'js'
          ],
          ct: [
            {
              title: 'UI',
              con: [
                 '制图',
                '切图',
                '交给',
                '是是是',
                'vue',
                'css',
                'js',
                'javarscipt',
                'vue',
                'css',
                'js'
              ]
            }
          ]
        },
        {
          title: '产品',
          con: [
            '测试号',
            '事件',
            '侧滑',
            'vue',
            'css',
            'js'
          ],
          ct: [
            {
               title: '产品',
              con: [
                '测试号',
                '事件',
                '侧滑',
                'vue',
                'css',
                'js',
                'javarscipt',
                'vue',
                'css',
                'js'
              ]
            }
          ]
        }
      ],
      cList: [
        {img: 'https://user-gold-cdn.xitu.io/2018/7/10/164835b6a7ffd6e0?imageView2/1/w/288/h/288/q/85/format/webp/interlace/1', title: '曾经的梦', con: '萨法二分格格', lei: 'vue', shu: 44, fen: 11, time: 55},
        {img: 'https://avatars3.githubusercontent.com/u/445883?v=4', title: '曾经的梦', con: '萨法二分格格', lei: 'vue', shu: 44, fen: 11, time: 55},
        {img: 'https://user-gold-cdn.xitu.io/2018/7/10/164835b6a7ffd6e0?imageView2/1/w/288/h/288/q/85/format/webp/interlace/1', title: '曾经的梦', con: '萨法二分格格', lei: 'vue', shu: 44, fen: 11, time: 55},
        {img: 'https://avatars3.githubusercontent.com/u/445883?v=4', title: '曾经的梦', con: '萨法二分格格', lei: 'vue', shu: 44, fen: 11, time: 55},
        {img: 'https://user-gold-cdn.xitu.io/2018/7/10/164835b6a7ffd6e0?imageView2/1/w/288/h/288/q/85/format/webp/interlace/1', title: '曾经的梦', con: '萨法二分格格', lei: 'vue', shu: 44, fen: 11, time: 55}
      ]
    }
  },
  components: {
    Bannar,
    TabCard,
    listCard
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
  .left
    .bannar
      width 700px
      height 144px
    .left-header
      border-radius 2px
      margin-top 10px
      width 660px
      height 60px;
      background-color $color
      display flex
      justify-content space-between
      padding-left 20px
      line-height 60px
      padding-right 20px
      border-bottom 1px solid rgba(178,186,194,.15)
      .ding
        color $hcolor
  .right
    width 240px
</style>
