<template>
<el-row :gutter="20">
    <el-col :span="12" :offset="4">
        <h3 style="text-align: center">{{message}}</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
   <el-button type="default" @click="handleBack()">Back</el-button>
  <el-form-item label="Center" prop="aggregation_center">
    <el-select v-model="ruleForm.aggregation_center" placeholder="please select Aggregation Center">
      <el-option v-for="option in $store.getters.allCenters" v-bind:key="option.id" v-bind:value="option.id" :label="option.name"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Product" prop="product">
    <el-select v-model="ruleForm.product" placeholder="please select Product">
      <el-option v-for="option in $store.getters.allProducts" v-bind:key="option.id" v-bind:value="option.id" :label="option.name"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Available">
    <el-switch v-model="ruleForm.active"
    active-text="Yes"
    inactive-text="No"
    inactive-color="#FF0000"
    active-color="#13ce66"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" :loading="loading" @click.prevent="submitForm('ruleForm')">{{add ? 'ADD' : 'Update'}}</el-button>
    <el-button type="danger" @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
    </el-col>
</el-row>
</template>
<script src="./form-script.js"></script>
