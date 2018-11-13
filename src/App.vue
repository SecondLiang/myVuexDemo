<template>
  <div id="app">
    <component-Left class="left-warp"></component-Left>
    <component-Center class="center-warp"></component-Center>
    <component-Right class="right-warp"></component-Right>
  </div>
</template>

<script>
import componentLeft from './component/componentLeft.vue'
import componentCenter from './component/componentCenter.vue'
import componentRight from './component/componentRight.vue'
export default {
  name: 'App',
  components: {
    componentLeft,
    componentCenter,
    componentRight
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,
body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
}
.left-warp,
.center-warp,
.right-warp{
  height: 100%;
  padding-top: 10px;
}
.left-warp{
  width: 100px;
  background-color: #666;
  min-width: 80px;
}
.center-warp{
  width: 220px;
  background-color:rgb(226, 218, 225);
  min-width: 200px;
}
.right-warp{
  flex: 1;
  background-color:#fff;
  min-width: 300px;
}
</style>
