<template>
<custom-form :loading="loading"
 message="Update aggregation center" :add="add"
 :ruleForm="form" v-on:submit-form="update"/>
</template>
<script src="./update-script.js"></script>
