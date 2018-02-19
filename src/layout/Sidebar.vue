<template>
  <el-menu
    background-color="#84CE84"
    text-color="#020202"
    active-text-color="#020202">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-menu"></i>Aggregation Centers</template>
      <el-menu-item-group>
        <el-menu-item index="1-1" @click="handleAggregation()">Centers</el-menu-item>
        <el-menu-item index="1-2" @click="handleAggregationProducts()">Center Products</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2" @click="handleProducts()">
      <i class="el-icon-menu"></i>
      <span>Products</span>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-menu"></i>Crates Management</template>
      <el-menu-item-group>
        <el-menu-item index="3-1" @click="handleCrateTypes()">Crate Types</el-menu-item>
        <el-menu-item index="3-2" @click="handleCrates()">Crates</el-menu-item>
        <el-menu-item index="3-2" @click="handleCrates()">Sales Crates</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="4" @click="handleGrades()">
      <i class="el-icon-menu"></i>
      <span>Grades</span>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-menu"></i>Customer Mgmt</template>
      <el-menu-item-group>
        <el-menu-item index="5-1" @click="handleCrateTypes()">Customer Regions</el-menu-item>
        <el-menu-item index="5-2" @click="handleCrates()">Customers</el-menu-item>
        <el-menu-item index="5-3" @click="handleCrates()">Customer Prices</el-menu-item>
        <el-menu-item index="5-4" @click="handleCrates()">Customer Discounts</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title"><i class="el-icon-menu"></i>Order Management</template>
      <el-menu-item-group>
        <el-menu-item index="6-1" @click="handleCrateTypes()">Place Order</el-menu-item>
        <el-menu-item index="6-2" @click="handleCrates()">Orders</el-menu-item>
        <el-menu-item index="6-3" @click="handleCrates()">Package Crates</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="7" @click="handleGrades()">
      <i class="el-icon-menu"></i>
      <span>Receipts</span>
    </el-menu-item>
    <el-menu-item index="8" @click="handleGrades()">
      <i class="el-icon-menu"></i>
      <span>Cash Sale Receipts</span>
    </el-menu-item>
    <el-menu-item index="9" @click="handleGrades()">
      <i class="el-icon-menu"></i>
      <span>Credit Settlements</span>
    </el-menu-item>
    <el-menu-item index="10" @click="handleGrades()">
      <i class="el-icon-menu"></i>
      <span>Over/Under Pay</span>
    </el-menu-item>
    <el-menu-item index="11" @click="handleGrades()">
      <i class="el-icon-menu"></i>
      <span>Returns</span>
    </el-menu-item>
  </el-menu>
</template>
<script src="./Sidebar-Script.js">
</script>
