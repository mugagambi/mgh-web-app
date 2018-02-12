<template>
    <el-row :gutter="20">
    <el-col :span="12" :offset="4">
        <h3 style="text-align: center">Log in <small>To start using the system</small></h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Username" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="Password" prop="password">
    <el-input type="password" v-model="ruleForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" :loading="loading" @click.prevent="submitForm('ruleForm')">Log In</el-button>
    <el-button type="danger" @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
    </el-col>
</el-row>
</template>
<script src="./login-script.js"></script>
