<template lang="pug">
    div( class='sidebar' )
        div( class='category-icon active' @click='toggleMain("", $event)' )
            i( class='fa fa-home' )
            span( class='text' ) Главная

        div( class='category-icon' @click='toggleMain("category", $event)' )
            i( class='fa fa-list' )
            span( class='text' ) Отчёты

        div( class='category-icon' @click='toggleMain("", $event)' )
            i( class='fa fa-book' )
            span( class='text' ) Библиотека

        div( class='category-icon' @click='toggleMain("", $event)' )
            i( class='fa fa-file-medical-alt' )
            span( class='text' ) Пациенты

        div( class='category-icon' @click='toggleMain("", $event)' )
            i( class='fa fa-comment-medical' )
            span( class='text' ) Чат

        div( id="category" class='category-block c-c' )
            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Терапия
                div( class='list' )
                    span( class='name' @click='cLink' ) Кардиологическое
                    span( class='name' @click='cLink' ) Онкологическое
                    span( class='name' @click='cLink' ) Неврологическое
                    span( class='name' @click='cLink' ) Пульмонологическое
                    span( class='name' @click='cLink' ) Ревматологическое
                    span( class='name' @click='cLink' ) Гастроэнтерологическое
                    span( class='name' @click='cLink' ) Эндокринологическое
                    span( class='name' @click='cLink' ) Аллергологическое

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Хирургия
                div( class='list' )
                    span( class='name' @click='cLink' ) Кардиохирургичекое 
                    span( class='name' @click='cLink' ) Нейрохирургическре
                    span( class='name' @click='cLink' ) Травматологическое 
                    span( class='name' @click='cLink' ) Онкохирургическое
                    span( class='name' @click='cLink' ) Урологическое

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Педиатрия
                div( class='list' )
                    span( class='name' @click='cLink' ) Педиатрическое
                    span( class='name' @click='cLink' ) Кабинет здорового ребёнка 
                    span( class='name' @click='cLink' ) Прививочный 

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Гинекология
                div( class='list' )
                    span( class='name' @click='cLink' ) Акушерско-гинекологическое
                    span( class='name' @click='cLink' ) Смотровые
                    span( class='name' @click='cLink' ) Мамологические

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Диспансеры 
                div( class='list' )
                    span( class='name' @click='cLink' ) Фтизиатрический 
                    span( class='name' @click='cLink' ) Психиатрический
                    span( class='name' @click='cLink' ) Наркологический

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Диагностическое
                div( class='list' )
                    span( class='name' @click='cLink' ) Рентгенологическое
                    span( class='name' @click='cLink' ) Компьютерная томография 
                    span( class='name' @click='cLink' ) Флюорографический 
                    span( class='name' @click='cLink' ) Электрокардиографии и функциональной диагностики
                    span( class='name' @click='cLink' ) Дистанционно- диагностический 
                    span( class='name' @click='cLink' ) Эндоскопии
                    span( class='name' @click='cLink' ) Ультразвуковой диагностики

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Лаборатории
                div( class='list' )
                    span( class='name' @click='cLink' ) Радиоизотопной диагностики 
                    span( class='name' @click='cLink' ) Бактериологическое
                    span( class='name' @click='cLink' ) Серологическое 
                    span( class='name' @click='cLink' ) Биохимическое
                    span( class='name' @click='cLink' ) Цитологическое 

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Инфекционная
                div( class='list' )
                    span( class='name' @click='cLink' ) Для взрослых 
                    span( class='name' @click='cLink' ) Для детей 

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Другие
                div( class='list' )
                    span( class='name' @click='cLink' ) Вакцинация
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods: { toggleCategory, toggleMain, cLink },
  data: function () {
    return {

    }
  }
}

function toggleCategory (event) {
    var active = this.$el.querySelector('.category.active');

    if (active === event.target.parentNode)
        event.target.parentNode.classList.remove('active');
    
    else {
        if ( active )
            this.$el.querySelector('.category.active').classList.remove('active');

        event.target.parentNode.classList.add('active');
    }
}

function toggleMain (name, el) {
    var current = this.$el.querySelector(`.c-c.active`);
    var icon = this.$el.querySelector('.category-icon.active');

    if (name !== '') {
        if (current && current !== this.$el.querySelector(`#${name}`))
            this.$el.querySelector(`.c-c.active`).classList.remove('active');
        this.$el.querySelector(`#${name}`).classList.toggle('active');
    }

    else if (current)
        this.$el.querySelector(`.c-c.active`).classList.remove('active');

    if (icon && icon !== event.target)
        icon.classList.remove('active');

    for (let i = 0; i != event.path.length; ++i) {
        if (event.path[i].classList.contains('category-icon')) 
            return event.path[i].classList.add('active');
    }
        
}

function cLink () {
    this.$el.querySelector(`.c-c.active`).classList.remove('active');
}

</script>

<style lang="stylus" scoped>
$midnight = RGB(47, 58, 64)
$green = RGB(61, 180, 148)
$red = RGB(227, 117, 118)
$wetasphalt = RGB(61, 74, 83)
$white = #FFFFFF


.sidebar
    background $wetasphalt
    color $white
    position fixed
    top 100px
    bottom 0
    left 0
    width 150px

    .category-icon
        align-items center
        background $wetasphalt
        cursor pointer
        display flex
        flex-direction column
        justify-content center
        border-left 0px solid #000
        text-align center
        height 100px
        width 100%
        &:hover
            background $midnight
        &.active
            background $midnight
            border-left 3px solid $red
            padding-right 3px

            .fa
                color $red !important

        .fa
            color $green
            display block
            font-size 36px    
        
        .text
            display block
            color #DDD
            font-weight 300
            margin-top 8px

.category-block
    display none
    border-left 1px solid $midnight
    position absolute
    top 80px
    left 150px
    width 300px
    &.active
        display block

    .category
        background $wetasphalt

    .label
        cursor pointer
        display block
        padding 8px 2px 8px 16px
        position relative
        &:hover
            background $midnight
        &:after
            display inline
            content '+'
            font-size 20px
            position absolute
            right 16px
            top 6px


    .list
        display block
        max-height 0
        overflow hidden

        .name
            font-size 14px
            font-weight 300
            display block
            cursor pointer
            padding 6px 6px 6px 24px
            &:hover
                text-decoration underline

    .category.active
        background $midnight

        .list
            max-height 800px
        
        .label:after
            content '-' !important
            right 18px


</style>
