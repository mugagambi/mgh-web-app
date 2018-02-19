<template>
  <div id="app">
    <el-container>
  <el-aside width="200px"><sidebar/></el-aside>
  <el-container>
    <el-header><navbar/></el-header>
    <el-main><router-view/></el-main>
    <el-footer style="text-align: center">&copy; 2018, Meru Greens Horticulture Ltd</el-footer>
  </el-container>
</el-container>
  </div>
</template>

<script  src='./App-Script.js'>
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
