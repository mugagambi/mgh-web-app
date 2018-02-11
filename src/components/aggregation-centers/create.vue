<template>
<el-row :gutter="20">
    <el-col :span="12" :offset="4">
        <h3 style="text-align: center">Add Aggregation Center</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
   <el-button type="default" @click="handleBack()">Back</el-button>
  <el-form-item label="Name" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Location" prop="location">
      <el-input v-model="ruleForm.location"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')">Add</el-button>
    <el-button type="danger" @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
    </el-col>
</el-row>
</template>
<script src="./create-script.js"></script>
