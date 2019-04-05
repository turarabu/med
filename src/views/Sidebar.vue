<template lang="pug">
    div( class='sidebar' )
        div( class='category-icon active' @click='toggleMain("", $event, "/")' )
            i( class='fa fa-home' )
            span( class='text' ) Главная

        div( class='category-icon' @click='toggleMain("category", $event)' )
            i( class='fa fa-list' )
            span( class='text' ) Отчёты

        div( class='category-icon' @click='toggleMain("", $event, "/library")' )
            i( class='fa fa-book' )
            span( class='text' ) Библиотека

        div( class='category-icon' @click='toggleMain("", $event)' )
            i( class='fa fa-file-medical-alt' )
            span( class='text' ) Пациенты
        div( class='category-icon' @click='toggleMain("", $event, "/tasks")' )
            i( class='fa fa-check-double' )
            span( class='text' ) Задачи

        div( class='category-icon' @click='toggleMain("", $event, "/chat")' )
            i( class='fa fa-comment-medical' )
            span( class='text' ) Чат

        div( id="category" class='category-block c-c' )
            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Отделения терапии
                div( class='list' )
                    span( class='name' @click='cLink' ) Кардиологические
                    span( class='name' @click='cLink' ) Онкологические
                    span( class='name' @click='cLink' ) Неврологические
                    span( class='name' @click='cLink' ) Пульмонологические
                    span( class='name' @click='cLink' ) Ревматологические
                    span( class='name' @click='cLink' ) Гастроэнтерологические
                    span( class='name' @click='cLink' ) Эндокринологические
                    span( class='name' @click='cLink' ) Аллергологические

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Отделения хирургии
                div( class='list' )
                    span( class='name' @click='cLink' ) Кардиохирургичекие 
                    span( class='name' @click='cLink' ) Нейрохирургические
                    span( class='name' @click='cLink' ) Травматологические 
                    span( class='name' @click='cLink' ) Онкохирургические
                    span( class='name' @click='cLink' ) Урологические

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Отделения педиатрии
                div( class='list' )
                    span( class='name' @click='cLink' ) Педиатрические
                    span( class='name' @click='cLink' ) Кабинета здорового ребёнка 
                    span( class='name' @click='cLink' ) Прививочные

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Отделения гинекологии
                div( class='list' )
                    span( class='name' @click='cLink' ) Акушерско-гинекологические
                    span( class='name' @click='cLink' ) Смотровых
                    span( class='name' @click='cLink' ) Мамологические

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Диспансерские 
                div( class='list' )
                    span( class='name' @click='cLink' ) Фтизиатрические 
                    span( class='name' @click='cLink' ) Психиатрические
                    span( class='name' @click='cLink' ) Наркологические

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Диагностические
                div( class='list' )
                    span( class='name' @click='cLink' ) Рентгенологические
                    span( class='name' @click='cLink' ) Компьютерной томографии 
                    span( class='name' @click='cLink' ) Флюорографические
                    span( class='name' @click='cLink' ) Электрокардиографии и функциональной диагностики
                    span( class='name' @click='cLink' ) Дистанционно-диагностические 
                    span( class='name' @click='cLink' ) Эндоскопие
                    span( class='name' @click='cLink' ) Ультразвуковой диагностики

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Лабораторные
                div( class='list' )
                    span( class='name' @click='cLink' ) Радиоизотопной диагностики 
                    span( class='name' @click='cLink' ) Бактериологические
                    span( class='name' @click='cLink' ) Серологические 
                    span( class='name' @click='cLink' ) Биохимические
                    span( class='name' @click='cLink' ) Цитологические 

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Инфекционные
                div( class='list' )
                    span( class='name' @click='cLink' ) Взрослых
                    span( class='name' @click='cLink' ) Детей 

            div( class='category' )    
                span( class='label' @click='toggleCategory' ) Другие
                div( class='list' )
                    span( class='name' @click='cLink' ) Вакцинации
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

function toggleMain (name, el, route) {
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
        if (event.path[i].classList && event.path[i].classList.contains('category-icon')) 
            event.path[i].classList.add('active');
    }

    if (route)
        this.$router.push(route);
        
}

function cLink () {
    this.$el.querySelector(`.c-c.active`).classList.remove('active');
    this.$router.push('charts');
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
    z-index 10

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
