<template>

    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <!-- <router-link to="/about">About</router-link> -->
        </div>
        <router-view/>
    </div>

</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=cyrillic,cyrillic-ext,latin-ext')
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css')

*
    font-family 'Roboto', sans-serif
    text-decoration none
    transition .15s all
</style>
