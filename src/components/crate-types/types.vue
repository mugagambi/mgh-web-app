<template>
  <el-row :gutter="20">
      <el-col :span="18" :offset="3">
          <h3 style="text-align: center">Crate Types</h3>
          <el-button style="float: right"
          type="primary"
          @click="handleAdd()">Add Crate Type</el-button>
    <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="#">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Type" sortable>
    </el-table-column>
    <el-table-column
      prop="weight"
      label="Weight (kgs)" sortable>
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
      </el-col>
  </el-row>
</template>
<script src="./types-script.js"></script>
