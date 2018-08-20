<template>
    <div class="card">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in list" :key="index">
                   <div class="content">
                       <img :src="item.img" alt="" srcset="">
                   </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'lunBannar',
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
        loop: true,
         // 如果需要分页器
        pagination: {
            el: '.swiper-pagination'
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
     })
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
    @import "../../stylus/base.styl";
    .card
        width 100%
        height 100%
        background-color $color
        border-top 1px solid rgba(178,186,194,.15)
        &:hover
            background-color #f1f1f1
        .content
            width 100%
            height 100%
            border-radius 3px
            img
                border-radius 3px
                width 100%
                height 100%
</style>
