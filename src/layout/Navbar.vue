<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"
  background-color="#84CE84"
    text-color="#020202"
    active-text-color="#020202">
  <el-menu-item index="1" @click="handleHome()"><img src="./icon.jpeg" title="home" width="60" height="60"></el-menu-item>
  <el-menu-item style="text-align: center" index="3">Dashboard</el-menu-item>  
  <el-menu-item style="text-align: center" index="3">Reports</el-menu-item>
  <el-menu-item style="float: right" @click="handleLogin()" index="4">Log In</el-menu-item>
</el-menu>
</template>
<script src="./Navbar-Script.js">
</script>
