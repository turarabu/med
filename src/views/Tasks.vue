<template lang="pug">
    div#home
        div( class='content' )
            div( class='activity' )
                div( class='block' )
                    h3( class='title' ) В процессе
                    div( class='card' )
                        h4( class='date' ) Создано сегодня, 12:34
                        p( class='text' ) Провести операцию по удалению левого полушария мозга
                        div( class='actions right' )
                            span( class='members' ) Участников 4
                            button( class='go' ) Детали
                    
                    div( class='card' )
                        h4( class='date' ) Создано 4 апреля, 10:01
                        p( class='text' ) Провести обход III отделения
                        div( class='actions right' )
                            span( class='members' ) Участников 12
                            button( class='go' ) Детали

                    div( class='card' )
                        h4( class='date' ) Создано 3 апреля, 12:34
                        p( class='text' ) Провести операцию по удалению опухоли мозга
                        div( class='actions right' )
                            span( class='members' ) Участников 3
                            button( class='go' ) Детали

                    div( class='card' )
                            h4( class='date' ) Создано 2 апреля, 16:21
                            p( class='text' ) Провести конференцию по обсуждению новых оборудовании
                            div( class='actions right' )
                                span( class='members' ) Участников 20
                                button( class='go' ) Детали


                div( class='block' )
                    h3( class='title' ) Завершено
                    div( class='card' )
                        h4( class='date' ) Сегодня в 10:10
                        p( class='text' ) Пройти обучение по новым поступившим оборудованиям
                        div( class='actions right' )
                            span( class='members' ) Участников 20
                            button( class='go' ) Детали

                    div( class='card' )
                        h4( class='date' ) Вчера в 14:43
                        p( class='text' ) Приём новых оборудовании
                        div( class='actions right' )
                            span( class='members' ) Участников 22
                            button( class='go' ) Детали


                div( class='block' )
                    h3( class='title' ) На расмотрении
                    div( class='card' )
                        h4( class='date' ) Создано 1 апреля, 16:43
                        p( class='text' ) Провести корпоратив на день рождение доктора
                            a( class='link' ) Абдуллы
                        div( class='actions right' )
                            span( class='members' ) Участников 8
                            button( class='go' ) Детали

                    div( class='card' )
                        h4( class='date' ) Создано 1 апреля, 16:43
                        p( class='text' ) Провести корпоратив на день рождение доктора
                            a( class='link' ) Ирины
                        div( class='actions right' )
                            span( class='members' ) Участников 8
                            button( class='go' ) Детали

                    div( class='card' )
                        h4( class='date' ) Создано 1 апреля, 16:43
                        p( class='text' ) Провести корпоратив на день рождение доктора
                            a( class='link' ) Магоммеда
                        div( class='actions right' )
                            span( class='members' ) Участников 9
                            button( class='go' ) Детали

                    div( class='card' )
                        h4( class='date' ) Создано 1 апреля, 16:43
                        p( class='text' ) Провести корпоратив на день рождение доктора
                            a( class='link' ) Арсена
                        div( class='actions right' )
                            span( class='members' ) Участников 8
                            button( class='go' ) Детали

                    div( class='card' )
                        h4( class='date' ) Создано 1 апреля, 16:43
                        p( class='text' ) Провести корпоратив на день рождение главврача
                            a( class='link' ) Мерид
                        div( class='actions right' )
                            span( class='members' ) Участников 12
                            button( class='go' ) Детали
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
    grid-template-columns auto

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
                position relative
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
                    
                .members
                    color #777
                    font-size 12px
                    position absolute
                    top 8px
                    left 16px
        
.link
    color $red
    cursor pointer
    display inline-block 
    margin 0 2px
    &:hover
        text-decoration underline
</style>
