<template>
  		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/admin/user' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>文章管理</el-breadcrumb-item>
		</el-breadcrumb>
</template>

<script>
export default {
  name:'AdminArticle'
}
</script>

<style lang="less" scoped>
#article {
  float: left;
}
</style>