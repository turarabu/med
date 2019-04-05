<template lang="pug">
    div#app
        Topbar
        Sidebar
        div#view
            router-view
</template>

<script>
import Topbar from '@/views/Topbar.vue'
import Sidebar from '@/views/Sidebar.vue'

export default {
  components: { Topbar, Sidebar },
  data: function () {
    return {

    }
  }
}
</script>


<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=cyrillic,cyrillic-ext,latin-ext')
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css')
@import url('https://fonts.googleapis.com/css?family=Lobster')

*
    box-sizing border-box
    font-family 'Roboto', sans-serif
    text-decoration none
    transition .15s all

#view
    overflow auto
    position absolute
    top 80px
    left 100px
    right 0
    bottom 0
</style>
