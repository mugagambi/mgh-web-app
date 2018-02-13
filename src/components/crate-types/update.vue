<template>
<type-custom-form :loading="loading"
 message="Update Crate Type" :add="add"
 :ruleForm="form" v-on:submit-form="update"/>
</template>
<script src="./update-script.js"></script>
