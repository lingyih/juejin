<template>
    <div class="card">
        <div class="content">
           <div class="top">
             <span class="re" v-show="content.hot">热</span>
             <span v-show="content.hot">.</span>
             <span class="zhuan" v-show="content.special">专栏</span>
             <span v-show="content.special">.</span>
             <span>{{content.name}}</span>
             <span>.</span>
             <span>{{content.time}}</span>
             <span>.</span>
             <span>{{content.category}}</span>
           </div>
           <div class="con">
              {{content.title}}
           </div>
           <div class="bottom">
             <div class="bt">{{content.news}}</div>
             <div>{{content.Fabulous}}</div>
           </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'card',
  props: ['content'],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
    @import "../../stylus/base.styl";
    .card
        width 700px
        height 118px
        background-color $color
        border-top 1px solid rgba(178,186,194,.15)
        &:hover
            background-color #f1f1f1
        .content
            width 652px
            height 82px
            margin 0 auto
            .top
                font-size 10px
                color $fcolor
                margin-top 18px
                .re
                    color red
                .zhuan
                    color #b71ed7
            .con
                font-size 18px
                font-weight 600
                color $fcolor
                margin-top 12px
            .bottom
                margin-top 18px
                display flex
                text-align center
                line-height 24px
                color #b2bac2
                border-radius 6px
                div
                    width 57px
                    height 24px
                    border 1px solid #edeeef
                .bt
                    border-right 0px solid #b2bac2
</style>
