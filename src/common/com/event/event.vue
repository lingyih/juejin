<template>
    <div class="event">
        <div class="img">
            <img src="https://user-gold-cdn.xitu.io/153197025999312907462f883c163e56c6fbf2c9126bf.jpg?imageView2/1/w/460/h/270/q/85/format/webp/interlace/1" alt="">
        </div>
        <div class="title">少时诵诗书所所搜索0</div>
        <div class="time">8-20 周一</div>
        <div class="can">
            <div>不限</div>
            <div>报名参加</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'event',
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
    .event
        background-color $color
        width 224px
        height 265px
        margin-right 14px
        margin-top 26px
        transition all .5s
        border-radius 3px
        &:hover
            transform translateY(-5px)
            box-shadow:0px 2px 5px $fcolor
        .img
            width 100%
            height 134px
            img
                border-radius 3px
                width 100%
                height 100%
        .title
            width 200px
            margin 0 auto
            display: -webkit-box
            overflow: hidden
            text-overflow: ellipsis
            -webkit-line-clamp: 2
            margin-top 10px
            height: 40px
            line-height 40px
            font-size: 14px
            font-weight: 700
        .time
            display flex
            width 200px
            margin 0 auto
            margin-top 6px
            color $fcolor
            font-size 13px
        .can
            width 200px
            margin 0 auto
            margin-top 15px
            display flex
            justify-content space-between
            :first-child
                color $fcolor
                font-size 13px
                margin-top 6px
            :last-child
                    width: 100px;
                    height: 25px;
                    border-radius: 30px;
                    background-color: #4d91fd;
                    line-height: 25px;
                    color: #fff;
                    text-align: center;
</style>
