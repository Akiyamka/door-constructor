<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Constructor</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="stylus">
@require './theme/variables.styl'

html, body
  height: 100%
  margin: 0
  padding: 0
  font-family 'Avenir', Helvetica, Arial, sans-serif

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height: 100%;
  font-size: var(--font-size-x);
  color: var(--font-color);

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
