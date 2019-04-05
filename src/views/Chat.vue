<template lang="pug">
    div#chat
        div#chat-list
            div( class='member active' )
                img( class='avatar' src='https://pp.userapi.com/c854416/v854416952/bbc6/eKdqpk72n8o.jpg?ava=1' )
                div( class='chat-info' )
                    h3( class='name' ) Саня Воробкалаева
                    p( class='last' ) Вас поняла!

            div( class='member' )
                img( class='avatar' src='https://pp.userapi.com/c850528/v850528840/52b2e/DJV82-rhvHw.jpg?ava=1' )
                div( class='chat-info' )
                    h3( class='name' ) Лариса Коновалова
                    p( class='last' ) Я запишу ваш заказ

            div( class='member' )
                img( class='avatar' src='https://sun4.dataix-kz-akkol.userapi.com/c850124/v850124226/7594b/p-R5lmQPAaM.jpg?ava=1' )
                div( class='chat-info' )
                    h3( class='name' ) Руслан Исраилов
                    p( class='last' ) Посмотрю...

            div( class='member' )
                img( class='avatar' src='https://sun3.dataix-kz-akkol.userapi.com/c845421/v845421022/1e4525/Yqo3Kl2R1sQ.jpg?ava=1' )
                div( class='chat-info' )
                    h3( class='name' ) Абу аль-Турар ибн аль-Хадаф ва ибн аль-Мубарак
                    p( class='last' ) Да, это я разработал!

        div#chat-history
            ChatHistory
</template>

<script>
import ChatHistory from '@/components/ChatHistory.vue'

export default {
    components: { ChatHistory }
}
</script>


<style lang="stylus" scoped>

#chat
    background #EAEAEA
    position absolute
    top 0
    left 0
    right 0
    bottom 0

#chat-history
    background #fff
    box-shadow 1px 0 1px RGBA(150, 150, 150, .3)
    position absolute
    top 0
    bottom 0
    left 425px
    right 50px
    overflow hidden

#chat-list
    background #fff
    padding 8px 0
    position absolute
    border-right 1px solid #DDD
    box-shadow -1px 0 2px RGBA(150, 150, 150, .5)
    top 0
    bottom 0
    left 75px
    width 350px

    .member
        align-items center
        background #FFF
        display flex
        cursor pointer
        border-bottom 1px solid #AAA
        padding 4px 16px
        &.active
            background #EEE

        .avatar
            border 1px solid #EEE
            border-radius 50%
            height 50px
            width 50px

        .chat-info
            margin 8px

        .name
            font-size 14px
            font-weight 500
            margin 0
            height 20px
            overflow hidden
            white-space nowrap
            word-wrap normal
            text-overflow ellipsis
            width 200px

        .last
            font-size 14px
            color #333
            margin 2px 0
</style>
