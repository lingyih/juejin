<template>
    <div class="card">
        <div class="content">
           <div class="img">
               <img :src="content.img" alt="">
           </div>
           <div class="con">
               <div>{{content.title}}</div>
               <div>{{content.con}}</div>
               <div>
                   <span>{{content.lei}}</span>
                   <span>{{content.shu}}</span>
                   <span>{{content.fen}}</span>
                   <span>{{content.time}}</span>
               </div>
           </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'listCard',
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
        border-bottom  1px solid rgba(178,186,194,.15)
        overflow hidden
        &:hover
            background-color #f1f1f1
        .content
            width 652px
            height 82px
            margin 0 auto
            display flex
            margin-top 24px
            .img
                width 48px
                height 48px
                img
                    width 100%
                    height 100%
                    border-radius 3px
            .con
                margin-left 10px
                :first-child
                    color: #0366d6
                    font-weight 500
                    font-size 18px
                :nth-child(2)
                    color $fcolor
                    margin-top 10px
                    font-size 14px
                :nth-child(3)
                    margin-top 15px
                    span
                        margin-right 20px
</style>
