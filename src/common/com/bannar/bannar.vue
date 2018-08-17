<template>
    <div class="card">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in list" :key="index">
                   <div class="content">
                       <div class="img" v-show="item.imgShow">
                           <img :src="item.img" alt="">
                       </div>
                       <div class="con">
                           <div>{{item.title}}</div>
                           <div>{{item.content}}</div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'bannar',
  props: ['list'],
  data () {
    return {

    }
  },
  computed: {
  },
  mounted () {
     this.mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true
     })
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
    @import "../../stylus/base.styl";
    .card
        width 700px
        height 144px
        background-color $color
        border-top 1px solid rgba(178,186,194,.15)
        &:hover
            background-color #f1f1f1
        .content
            display flex
            height 100%
            .img
                width 144px
                height 144px
                img
                    width 100%
                    height 100%
            .con
                padding-right 40px
                font-size 13px
                height 144px
                margin-left 50px
                margin-top 30px
                :first-child
                    font-size 20px
                :last-child
                    margin-top 10px
                    color $fcolor
</style>
