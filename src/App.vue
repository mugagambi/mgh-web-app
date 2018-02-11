<template>
  <div id="app">
    <el-container style="height: auto; border: 1px solid #eee">
      <el-header>
        <navbar/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <sidebar/>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
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
