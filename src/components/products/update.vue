<template>
<product-custom-form :loading="loading"
 message="Update Product" :add="add"
 :ruleForm="form" v-on:submit-form="update"/>
</template>
<script src="./update-script.js"></script>
