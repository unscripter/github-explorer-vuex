<template>
        <div :class="['app-header']" ref="app-header">
            <a @click="toggleDrawrer"><i class="fa fa-bars"></i></a>
            <!-- <router-link v-for="item in navItems" :key="item.name" :to="item.to">{{item.name}}</router-link> -->
            <span><b>GITHUB EXPLORER</b></span>
        </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            navItems: [{name: 'Home', to: '/'}, {name: 'About', to: '/about'}],
        }
    },
    props: ['showMenu'],
    methods: {
        ...mapActions([
        'changeNavbarVisibleStatus'
    ]),
    toggleDrawrer() {
        debugger;
        this.changeNavbarVisibleStatus();
    }
    }
}
</script>

<style lang="scss">
.app-header {
    font-size: 20px;
  a {
    font-weight: bold;
    padding: 10px;
    text-align: center;
    color: white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  span {
    color: white;
    padding-left: 600px;
   @media (max-width: 768px) {
       padding-left: 70px;
       font-size: 15px;
    }   
  }
}
</style>

