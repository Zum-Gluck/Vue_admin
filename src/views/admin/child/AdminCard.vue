<template>
	<!-- 卡片 -->
	<el-card class="box-card">
		<router-view></router-view>
	</el-card>
</template>

<style lang="less" scoped>
.box-card {
	float: left;
	width: 80%;
	height: calc(100vh - 55px - 30px - 20px);
	margin-left: 30px;
	margin-bottom: 20px;
	box-sizing: border-box;
}
</style>
