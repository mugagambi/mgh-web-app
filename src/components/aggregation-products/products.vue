<template>
  <el-row :gutter="20">
      <el-col :span="18" :offset="3">
          <h3 style="text-align: center">Aggregation Center Products </h3>
          <el-row :gutter="20">
                <el-col :span="6">
                    <el-input placeholder="Filter by Center" v-model="input"></el-input>
                    </el-col>
                <el-col :span="6" :offset="3">
                    <el-input placeholder="Filter by Product" v-model="input"></el-input>
                    </el-col>
          </el-row>
          <el-button style="float: right"
          type="primary"
          @click="handleAdd()">Add Aggregation Center Product</el-button>
    <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="#">
    </el-table-column>
    <el-table-column
      label="Center">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ $store.getters.getCenterById(scope.row.aggregation_center).name }}</p>
          <p>Location: {{ $store.getters.getCenterById(scope.row.aggregation_center).location }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" type="info">{{ $store.getters.getCenterById(scope.row.aggregation_center).name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Product">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ $store.getters.getProductById(scope.row.product).name }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" type="info">{{ $store.getters.getProductById(scope.row.product).name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      prop="active"
      label="Available">
      <template slot-scope="scope">
        {{scope.row.active}}
      </template>
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
<script src="./product-script.js"></script>
