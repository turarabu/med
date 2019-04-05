<template lang="pug">
    div( class='sidebar' )
        i( class='fa fa-home' @click='toggleMain("")' )
        i( class='fa fa-book' @click='toggleMain("")' )
        i( class='fa fa-list' @click='toggleMain("category")' )

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

function toggleMain (name) {
    var current = this.$el.querySelector(`.c-c.active`);

    if (name !== '') {
        if (current && current !== this.$el.querySelector(`#${name}`))
            this.$el.querySelector(`.c-c.active`).classList.remove('active');
        this.$el.querySelector(`#${name}`).classList.toggle('active');
    }

    else if (current)
        this.$el.querySelector(`.c-c.active`).classList.remove('active');
}

function cLink () {
    this.$el.querySelector(`.c-c.active`).classList.remove('active');
}

</script>

<style lang="stylus">
$midnight = #2c3e50
$wetasphalt = #34495e
$white = #FFFFFF


.sidebar
    background $wetasphalt
    color $white
    position fixed
    top 0
    bottom 0
    left 0
    width 80px

    .fa
        align-items center
        background $wetasphalt
        cursor pointer
        display flex
        font-size 28px
        justify-content center
        height 80px
        width 80px
        &:hover, &.active
            background $midnight

.category-block
    display none
    border-left 1px solid $midnight
    position absolute
    top 120px
    left 80px
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
