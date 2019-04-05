<template lang="pug">
    div#nav
        div( class='logo' ) Enthus
        div( class='top-container' )
            input#search( placeholder='Поиск' )
            i( class='fa fa-search' )
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
$logo-bg = RGB(251, 85, 87)

#nav
    box-shadow 0 0 3px #777
    position fixed
    top 0
    left 0
    height 100px
    width 100%
    z-index 5

    .logo
        background $logo-bg
        color #EEE
        align-items center
        display inline-flex
        justify-content center
        height 100%
        width 150px

    .top-container
        display inline-flex
        position relative
        width calc(100% - 300px)

    #search
        display block
        border none 
        outline none
        font-size 20px
        font-weight 300
        padding 0 8px 0 64px
        height 90px
        width calc(100% - 150px)

    .fa
        position absolute
        left 28px
        font-size 22px
        color #555
        top 34px
</style>
