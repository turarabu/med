<template lang="pug">
    div#home
        div( class='content' )
            div( class='activity' )
                SomeGraph

                div( class='block' )
                    h3( class='title' ) Отчёты
                    div( class='card' )
                        h4( class='date' ) 6 часов назад
                        p( class='text' ) Создан отчёт, о пациентах на учёте нейрохирургии
                        div( class='actions right' )
                            button( class='go' ) Просмотреть

                    div( class='card' )
                        h4( class='date' ) 7 часов назад
                        p( class='text' ) Создан отчёт, о неврологических заболевающих по региону
                        div( class='actions right' )
                            button( class='go' ) Просмотреть

                    div( class='card' )
                            h4( class='date' ) Вчера в 23:56
                            p( class='text' ) Вам отправлен отчёт на проверку от медсестры 
                                a( class='link' ) Байзаковы
                            div( class='actions right' )
                                button( class='go' ) Просмотреть


                div( class='block' )
                    h3( class='title' ) Библиотека
                    div( class='card' )
                        h4( class='date' ) 3 дня назад
                        p( class='text' ) Поступили лекарства
                            a( class='link' ) плацебо
                            span в аптеку больницы для пациента
                            a( class='link' ) Ергали
                        div( class='actions right' )
                            button( class='go' ) Назначить

                    div( class='card' )
                        h4( class='date' ) 4 дня назад
                        p( class='text' ) Поступление новых лекарств от стресса
                        div( class='actions right' )
                            button( class='go' ) Просмотреть


                div( class='block' )
                    h3( class='title' ) Пациенты
                    div( class='card' )
                        h4( class='date' ) Вчера в 14:00
                        p( class='text' ) Зарегистрирована смерть пациента
                            a( class='link' ) Юлдашев
                        div( class='actions right' )
                            button( class='go' ) К отчёту

                    div( class='card' )
                        h4( class='date' ) Вчера в 13:23
                        p( class='text' ) К вам обращение от гражданина Калмырзаев
                        div( class='actions right' )
                            button( class='go' ) Просмотреть

                    div( class='card' )
                        h4( class='date' ) Вчера в 12:23
                        p( class='text' ) Жалоба на головные боли от пациента
                            a( class='link' ) Артём
                        div( class='actions right' )
                            button( class='go' ) Просмотреть



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

                    div( class='item' )
                        h4( class='name' ) Сегодня в 09:05
                        p( class='text' ) Готовы
                            a( class='link' ) результаты
                            span( class='span' ) анализа крови у пациента
                            a( class='link' ) Ержан
</template>

<script>
import SomeGraph from '@/components/SomeGraph.vue'

export default {
    components: { SomeGraph }
}
</script>

<style lang="stylus" scoped>
$midnight = RGB(47, 58, 64)
$green = #3db494
$red = RGB(227, 117, 118)
$wetasphalt = RGB(61, 74, 83)
$white = #FFFFFF

.content
    margin 32px auto
    display grid
    grid-template-columns auto 320px

    .activity
        margin 0 32px

        .title
            border-bottom 2px solid $red
            color #555
            font-size 22px
            font-weight 400
            margin 0
            padding 8px 0
            width 200px


        .block
            margin-bottom 32px

        .card
            border-radius 3px
            box-shadow 0 0 3px #777
            display inline-flex
            flex-direction column
            margin 16px 16px 0 0
            overflow hidden
            width 300px

            .date
                color #777
                font-size 14px
                font-weight 300
                margin 16px 0 0 16px 

            .text
                margin 8px 16px

            .actions
                display flex
                border-top 1px solid #EEE
                width 100%
                &.right
                    flex-direction row-reverse

                .go
                    background $green
                    border none
                    color $white
                    cursor pointer
                    outline none
                    padding 8px 16px
                    &:hover
                        background darken($green, 10)

            

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
    margin 0 2px
    &:hover
        text-decoration underline
</style>
