<template lang="pug">
    div#chat-area

        textarea#textarea( placeholder='Напишите сообщение...' )

        button#send 
            i( class='fa fa-paper-plane' )

        div( class='attach' )
            i( class='fa fa-paperclip' )
            span( class='text' ) прикрепить
        
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
$midnight = RGB(47, 58, 64)
$green = #3db494
$red = RGB(227, 117, 118)
$wetasphalt = RGB(61, 74, 83)
$white = #FFFFFF

#chat-area
    align-items center
    display flex
    box-shadow 0 0 5px #999
    position absolute
    justify-content center
    bottom 0
    left 0
    right 0
    height 70px

    .attach
        color #999
        font-size 14px
        margin 0 6px

        .fa
            font-size 16px
            display inline-block
            margin 0 6px
            position relative
            top 2px


    #textarea
        border-radius 2px
        font-size 16px
        padding 6px 10px
        height 35px
        width 650px

    #send
        background $green
        border none
        border-radius 3px
        color $white
        cursor pointer
        font-size 16px
        margin 0 12px
        padding 8px 14px
        &:hover
            background darken($green, 10)

</style>
