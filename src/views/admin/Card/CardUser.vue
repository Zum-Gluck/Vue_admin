<template>
  <div>
    <!-- 面包屑导航开始 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin/user' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑导航结束 -->

    <!-- 表格开始 -->
    <el-table :data="userList" stripe style="width: 100%">
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="170">
      </el-table-column>
      <el-table-column prop="mobile" label="手机号"> </el-table-column>
      <!-- role -->
      <el-table-column prop="role" label="身份">
        <template v-slot:default="scope">
          <div>{{ scope.row.role == 'admin' ? '管理员' : '普通用户' }}</div>
        </template>
      </el-table-column>
      <!-- 状态 -->
      <el-table-column prop="state" label="状态">
        <template v-slot:default="scope">
          <div>{{ scope.row.state == 0 ? '启用' : '禁用' }}</div>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column label="操作">
        <template v-slot:default="scope">
          <!-- 编辑按钮 -->
          <el-button
            size="mini"
            type="warning"
            plain
            @click="editClick(scope.row._id)"
          >
            编辑
          </el-button>
          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="deleteClick(scope.row._id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格开始结束 -->
  </div>
</template>

<script>
export default {
  name: 'AdminUser',
  data() {
    return {
      userList: []
    }
  },
  methods: {
    async getUserList() {
      //获取所有用户列表
      let { data: res } = await this.$http.get('/user')
      this.userList = res.UsersInfo
    },
    editClick(id) {
      // 编辑按钮的点击
      console.log(id)
    },
    deleteClick(id) {
      //删除按钮的点击
      console.log(id)
    }
  },
  created() {
    this.getUserList()
  }
}
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
