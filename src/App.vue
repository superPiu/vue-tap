<template>
  <div id="app">
    <img v-if="isTap" v-tap="handleTap" src="./assets/logo.png">
    <div v-if="!isTap">事件回收了</div>
  </div>
</template>

<script>
import customDirective from './customDirective'
export default {
  name: 'app',
  data () {
    return {
      isTap:true,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isTap = false
    },5000)
  },
  methods:{
    handleTap(){
      console.log("hhhhhh")
    }
  },
  directives:{
    tap:customDirective
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
