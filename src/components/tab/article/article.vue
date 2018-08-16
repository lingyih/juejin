<template>
  <div  class="m-header">
    
  </div>
</template>

<script type="text/ecmascript-6">
import Card from '../../../common/com/card/card'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list: []
    }
  },
  computed: mapState([
  // 映射 this.count 为 store.state.count
    'count'
  ]),
  mounted () {
    console.log('ee')
    var count = this.$store.state.count
    switch (count) {
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
          {title: 'Android', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 3:
        this.list = [
          {title: '前端', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
          {title: '啦啦啦啦', name: 'ssry', category: 'VUE', time: '两天前', hot: false, special: true, news: '11', Fabulous: '150'},
          {title: '少时诵诗书', name: 'saefjerry', category: 'JvarScript', time: '5小时前', hot: true, special: false, news: '25', Fabulous: '151'},
          {title: '饿饿饿饿', name: 'jerryef', category: 'HTML', time: '1个月前', hot: true, special: true, news: '250', Fabulous: '1588'},
          {title: '去去去去', name: 'jeree', category: 'PHP', time: '是天前', hot: false, special: false, news: '2', Fabulous: '111'}
        ]
        break
      case 4:
        this.list = [
          {title: 'iOS', name: 'jerry', category: 'CSS', time: '一天前', hot: true, special: true, news: '255', Fabulous: '155'},
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
  },
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
