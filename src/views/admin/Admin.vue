<template>
	<div>
		<AdminHeader></AdminHeader>
	</div>
</template>

<script>
import AdminHeader from "./child/AdminHeader";
export default {
	name: "Admin",
	components: {
		AdminHeader,
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
