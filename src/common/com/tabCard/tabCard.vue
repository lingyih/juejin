.<template>
    <div class="card">
       <div class="tabCard">
           <div class="title">{{content.title}}</div>
           <div class="content">
               <div v-for="(item, index) in content.con" :key="index">{{item}}</div>
           </div>
       </div>
       <div class="rightTab">
           <div class="content" v-for="(item, index) in content.ct" :key="index">
               <div class="title">{{item.title}}</div>
                <div class="content">
                    <div v-for="(items, index) in item.con" :key="index">{{items}}</div>
                </div>
           </div>
       </div>
    </div>
</template>

<script>

export default {
  name: 'tabCard',
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
        width 100%
        background-color $color
        border-top 1px solid rgba(178,186,194,.15)
        position relative
        color #3b76c5
        padding-bottom 20px
        &:hover
            background-color #f1f1f1
        &:hover .rightTab
            opacity 1
            display inline-block
        .tabCard
            width 200px
            margin 0 auto
            margin-top 10px
            .title
                color #2e3135
            .content
                display flex
                flex-wrap wrap
                div
                    margin-right 10px
                    margin-top 10px
        .rightTab
            display none
            width 244px
            transition all .1s
            position absolute
            background-color $color
            top 0
            transform translateX(-244px)
            z-index 10
            opacity 0
            border-top 1px solid rgba(178,186,194,.15)
            .content
                // border-bottom 1px solid rgba(178,186,194,.15)
                width 200px;
                margin 0 auto
                margin-top 10px
                padding-bottom 10px
                .title
                    color #2e3135
                .content
                    display flex
                    flex-wrap wrap
                    div
                        margin-right 10px
                        margin-top 10px
</style>
