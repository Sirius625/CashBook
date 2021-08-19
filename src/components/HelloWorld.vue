<template>
  <div class="item">
    <h2>一个记账本</h2>
    <router-view></router-view> 
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    
    
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 40px;
}
.item {
  /* position: absolute; */
  margin: 0 auto;
  width: 500px;
  height: 750px;
  border-radius: 50px;
  background-color: #CCFFFF;
}
a {
  position: relative;
  /* bottom: 0; */
}
</style>
