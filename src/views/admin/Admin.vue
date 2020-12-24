<template>
	<div>
		<AdminHeader></AdminHeader>
		<AdminMenu></AdminMenu>
		<AdminCard></AdminCard>
	</div>
</template>

<script>
import AdminHeader from "./child/AdminHeader";
import AdminMenu from "./child/AdminMenu";
import AdminCard from "./child/AdminCard";
export default {
	name: "Admin",
	components: {
		AdminHeader,
		AdminMenu,
		AdminCard,
	},
	methods: {},
	async created() {
		let { data: res } = await this.$http.get("/auth");
		console.log(res);
	},
};
</script>

<style lang="less" scoped>
div {
	font-family: "Quicksand", sans-serif;
}
</style>
