<template lang="pug">
    div( class='sidebar' )
        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Терапия
            div( class='list' )
                span( class='name' ) Кардиологическое
                span( class='name' ) Онкологическое
                span( class='name' ) Неврологическое
                span( class='name' ) Пульмонологическое
                span( class='name' ) Ревматологическое
                span( class='name' ) Гастроэнтерологическое
                span( class='name' ) Эндокринологическое
                span( class='name' ) Аллергологическое

        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Хирургия
            div( class='list' )
                span( class='name' ) Кардиохирургичекое 
                span( class='name' ) Нейрохирургическре
                span( class='name' ) Травматологическое 
                span( class='name' ) Онкохирургическое
                span( class='name' ) Урологическое

        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Педиатрия
            div( class='list' )
                span( class='name' ) Педиатрическое
                span( class='name' ) Кабинет здорового ребёнка 
                span( class='name' ) Прививочный 

        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Гинекология
            div( class='list' )
                span( class='name' ) Акушерско-гинекологическое
                span( class='name' ) Смотровые
                span( class='name' ) Мамологические

        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Диспансеры 
            div( class='list' )
                span( class='name' ) Фтизиатрический 
                span( class='name' ) Психиатрический
                span( class='name' ) Наркологический

        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Диагностическое
            div( class='list' )
                span( class='name' ) Рентгенологическое
                span( class='name' ) Компьютерная томография 
                span( class='name' ) Флюорографический 
                span( class='name' ) Электрокардиографии и функциональной диагностики
                span( class='name' ) Дистанционно- диагностический 
                span( class='name' ) Эндоскопии
                span( class='name' ) Ультразвуковой диагностики

        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Лаборатории
            div( class='list' )
                span( class='name' ) Радиоизотопной диагностики 
                span( class='name' ) Бактериологическое
                span( class='name' ) Серологическое 
                span( class='name' ) Биохимическое
                span( class='name' ) Цитологическое 

        div( class='category' )    
            span( class='label' @click='toggleCategory' ) Инфекционная
            div( class='list' )
                span( class='name' ) Для взрослых 
                span( class='name' ) Для детей 

        div( class='category' )    
            span( class='label' ) Другие
            div( class='list' @click='toggleCategory' )
                span( class='name' ) Вакцинация
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  methods: { toggleCategory },
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

</script>

<style lang="stylus">
$midnight = #2c3e50
$wetasphalt = #34495e
$white = #FFFFFF

.sidebar
    background $wetasphalt
    color $white
    position absolute
    top 0
    bottom 0
    left 0
    width 300px

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
