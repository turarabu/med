<template lang="pug">
    div#nav
        div( class='logo' ) Enthus
        div( class='top-container' )
            input#search( placeholder='Поиск' )
            i( class='fa fa-search' )

        div( class='account' )
            span( class='name' ) Абдулла
            img( class='avatar' src='@/assets/avatar.png' )
            i( class='fa fa-angle-down' )
        
        div( class='panel' )
            i( class='fa fa-bell' )
            i( class='fa fa-cog' )
            i( class='fa fa-sign-out-alt' )

</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
$logo-bg = RGB(251, 85, 87)

#nav
    align-items center
    box-shadow 0 0 3px #777
    display grid
    grid-template-columns 100px auto 200px 175px
    position fixed
    top 0
    left 0
    height 80px
    width 100%
    z-index 5

    .logo
        background $logo-bg
        font-family 'Lobster', cursive
        font-size 24px
        letter-spacing 2px
        color #EEE
        align-items center
        display inline-flex
        justify-content center
        height 100%
        width 100px

    .top-container
        display inline-flex
        position relative
        width 100%

        #search
            background transparent
            display block
            border none 
            outline none
            font-size 20px
            font-weight 300
            padding 0 8px 0 56px
            position relative
            z-index 4
            height 75px
            width calc(100% - 50px)

        .fa
            position absolute
            left 18px
            font-size 18px
            color #555
            top 30px
            z-index 3

    .account
        align-items center
        cursor pointer
        display inline-flex
        padding-right 24px
        position relative
        justify-content flex-end

        .avatar
            border-radius 50%
            box-shadow 0 0 3px #999
            margin 0 12px
            height 40px
            width 40px

        .name
            color #777
            display inline-block
            font-size 18px
            font-weight 500

        .fa
            font-size 20px
    
    .panel
        align-items center
        background #EEE
        display inline-flex
        justify-content center
        height 100%
        width 100%

        .fa
            color #555
            cursor pointer
            display inline-block
            font-size 20px
            margin 0 16px
            &:hover
                color #333
</style>
