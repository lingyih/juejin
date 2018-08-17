<template>
    <div class="bookCard">
        <div class="content">
            <div class="bookImg">
                <img :src="content.img" alt="">
            </div>
            <div class="bookCon">
                <div class="bookTitle">{{content.title}}</div>
                <div class="txt1">{{content.con}}</div>
                <div class="txt2">
                    <img :src="content.avatar" alt="">
                    <span>{{content.nickname}}</span>
                    <span>{{content.jian}}</span>
                </div>
                <div class="bookBottom">
                    <span>¥ {{content.money}}</span>
                    <span>{{content.jie}}小节</span>
                    <span>.</span>
                    <span>阅读时长{{content.time}}</span>
                    <span>.</span>
                    <span>{{content.man}}人已购买</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'bookCard',
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
    .bookCard
        width 700px
        height 191px
        background-color $color
        border-bottom 1px solid rgba(178,186,194,.15)
        overflow hidden
        &:hover
            background-color #f1f1f1
        .content
            width 652px
            height 82px
            margin 0 auto
            margin-top 24px
            display flex
            .bookImg
                width 100px
                height 140px
                box-shadow:rgba(97, 111, 128, 0.2) 0px 0px 6px 3px
                img
                    width 100%
                    height 100%
            .bookCon
                width 500px
                margin-left 24px
                color #71777c
                font-size 15px
                .bookTitle
                    color black
                    font-size 20px
                    font-weight 400
                .txt1
                    margin-top 14px
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                .txt2
                    margin-top 14px
                    display flex
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    img
                        height 20px
                        width 20px
                        border-radius 10px
                        vertical-align: middle
                    :nth-child(2)
                        margin-top 3px
                        margin-left 10px
                        color black
                        vertical-align:middle
                    :last-child
                        margin-top 3px
                        margin-left 10px
                        vertical-align:middle
                .bookBottom
                    margin-top 14px
                    color #71777c
                    font-size 13px
                    :first-child
                        font-size 20px
                        color #ed7b11
                    :nth-child(2)
                        margin-left 10px
</style>
