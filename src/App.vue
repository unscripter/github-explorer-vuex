<template>
  <div id="app" :class="{'sel': openDrawrer}" @scroll="handleScroll">
    <div :class="['navbar-closed']">
      <NavMenu @showMenu="DrawrerMenu"></NavMenu>      
    </div>
    <div :class="['navbar-open']">
      <div id="appNav" ref="headerbar">
        <HeaderBar @showMenu="DrawrerMenu"></HeaderBar>
      </div>
      <router-view/>
      <div id="appFooter">
        <FooterBar></FooterBar>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import NavMenu from '@/components/NavMenu'

export default {
  data() {
    return {
      openDrawrer: false,
      wait: false,
    }
  },
  components: {
    HeaderBar,
    FooterBar,
    NavMenu
  },
  methods: {
    DrawrerMenu(data) {
      this.openDrawrer = data;
      debugger
    },
    handleScroll () {
      debugger;
      if (window.screenY > 0) {
        this.$refs.HeaderBar.classList.add('position-fixed');
      }
   },
   }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  transition:padding .3s ease;
}
.position-fixed {
  position: fixed;
  background-color: pink;
}

.navbar-closed {
  margin-left: -440px;
  color: black;
  position: absolute;
  width: 300px;
  top: 53px;
  left: 0;
  height: 840px;
  background: #224365;
  z-index: 30;
  transition:margin .4s ease;
  overflow-y: scroll; /* has to be scroll, not auto */
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
#app.sel .navbar-closed {margin-left:0;}
.auth {
  display: none;
}
.fixed-navbar {
 position: fixed;
 z-index: 10;
 background-color: #0a1b30;
}
#appNav {
  padding: 15px;  
  background-color: #224365;
}
#appFooter {
  padding: 15px;  
  background-color: #2c3e50;
  position: relative;
  height: 30px;
}
body {
  color: black;
  margin: 0;
  padding: 0;
}
</style>
