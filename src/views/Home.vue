<template lang="pug">
    div#home
        div( class='content' )
            div( class='activity' )
            div( class='notify' )
                h3( class='title' ) Последние события

                div( class='list' )
                    div( class='item' )
                        h4( class='name' ) Только что
                        p( class='text' ) Инсульт у пациента
                            a( class='link' ) Артём

                    div( class='item' )
                        h4( class='name' ) 2 часа назад
                        p( class='text' ) Пациент
                            a( class='link' ) Магжан
                            span( class='span' ) прошел процедуру массажа спины

                    div( class='item' )
                        h4( class='name' ) Сегодня в 09:22
                        p( class='text' ) Готовы
                            a( class='link' ) результаты
                            span( class='span' ) анализа крови у пациента
                            a( class='link' ) Берик
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
$red = RGB(227, 117, 118)

.content
    margin 32px auto
    display grid
    grid-template-columns auto 300px

    .notify
        // border-left 1px solid #AAA
        width 100%

        .item
            border-left 1px solid #AAA
            margin-left 4px
            padding 0 24px 16px 12px
            position relative
            &:before
                background #FFF
                border 1px solid #777
                border-radius 50%
                content ''
                display block
                position absolute
                top 3px
                left -6px
                height 10px
                width 10px


        .title
            color #777
            font-size 16px
            font-weight 500

        .name
            color #777
            font-weight 400
            margin 0 0 4px 0

        .text
            margin 4px 0

        .link
            color $red
            cursor pointer
            display inline-block 
            margin 0 4px
            &:hover
                text-decoration underline
</style>
