<template>
	<div id="menu">
		<el-menu
			default-active="1"
			background-color="#fff"
			text-color="#878787"
			active-text-color="#f96332"
		>
			<el-menu-item index="1">
				<i class="iconfont icon-zhanghao"></i>
				<span slot="title">用户管理</span>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="iconfont icon-wenzhang"></i>
				<span slot="title">文章管理</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="iconfont icon-pinglun"></i>
				<span slot="title">评论管理</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="iconfont icon-221yonghu_mima_yuechi"></i>
				<span slot="title">权限管理</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: "AdminMenu",
};
</script>

<style lang="less" scoped>
#menu {
	float: left;
	width: 250px;
	height: calc(100vh - 30px - 55px);
	background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  i {
    font-size: 20px;
    margin-right: 7px;
    font-weight: 600;
  }
}
</style>
