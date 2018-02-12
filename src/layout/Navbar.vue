<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"
  background-color="#78EFB2"
    text-color="#020202"
    active-text-color="#020202">
  <el-menu-item index="1" @click="handleHome()">Home</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
  <el-menu-item style="float: right" @click="handleLogin()" index="4">Log In</el-menu-item>
</el-menu>
</template>
<script src="./Navbar-Script.js">
</script>
