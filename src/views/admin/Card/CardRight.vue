<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item :to="{ path: '/admin/user' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item>权限管理</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
export default {
	name: "CardRight",
};
</script>

<style lang="less" scoped></style>
