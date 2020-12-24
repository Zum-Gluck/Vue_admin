<template>
	<div>
    <!-- 面包屑导航开始 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/admin/user' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
		</el-breadcrumb>
    <!-- 面包屑导航结束 -->

    <!-- 表格开始 -->
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="date" label="日期" width="180"> </el-table-column>
			<el-table-column prop="name" label="姓名" width="180"> </el-table-column>
			<el-table-column prop="address" label="地址"> </el-table-column>
		</el-table>
    <!-- 表格开始结束 -->
	</div>
</template>

<script>
export default {
	name: "AdminUser",
	data() {
		return {
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄",
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄",
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄",
        },
        
			],
		};
	},
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
	margin-bottom: 20px;
}
</style>
