<template>
	<div id="login_bg">
		<div id="login">
			<div class="lg_tit">
				<span>Admin</span>
			</div>
			<div class="line">
				<div class="line_l"></div>
				<div class="line_r"></div>
			</div>
			<!-- 登录表单 -->
			<el-form>
				<!-- 用户名 -->
				<el-form-item>
					<el-input placeholder="Username" v-model="userInfo.username">
						<i slot="prefix" class="iconfont icon-zhanghao"></i>
					</el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item>
					<el-input placeholder="password" v-model="userInfo.password" show-password>
						<i slot="prefix" class="iconfont icon-221yonghu_mima_yuechi"></i>
					</el-input>
				</el-form-item>
				<!-- 记住密码 -->
				<div class="rm">
					<input type="checkbox" name="" id="rm" v-model="isRember" />
					<span>
						<label for="rm">记住密码</label>
					</span>
				</div>
				<!-- 提交表单 -->
				<el-row>
					<el-button type="warning" plain @click="onSumbit">登 录</el-button>
				</el-row>
				<div class="forget"><a>忘记密码 ?</a></div>
			</el-form>
		</div>
		<div class="bg"></div>
		<div class="bg2"></div>
	</div>
</template>

<script>
import qs from "qs";
export default {
	name: "Login",
	data() {
		return {
			userInfo: {
				username: "",
				password: "",
			},
			isRember: false,
		};
	},
	methods: {
		async onSumbit() {
			//  发送登录请求
			let { data: res } = await this.$http.post("/login", qs.stringify(this.userInfo));
			if (res.status != 200) return this.$message({ message: res.msg, type: "error" });

			this.$message({ message: "登录成功", type: "success" });
			// 将服务器传递过来的token存储在本地
			let token = res.token;
			sessionStorage.setItem("token", token);
			this.$router.push("/admin");

			// 实现记录密码
			localStorage.setItem("isRember", this.isRember);
			if (!this.isRember)
				return localStorage.setItem("userInfo", { username: "", password: "" });
			localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
		},
	},
	created() {
		// 从本地从存储中查询是否记住了密码
		if (localStorage.getItem("isRember") == "false") return;
		// 本地存储因异常无内容时要阻止程序向下执行
		if (!JSON.parse(localStorage.getItem("userInfo"))) return;
		this.isRember = true;
		this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
	},
};
</script>

<style lang="less" scoped>
// 背景图片
#login_bg {
	width: 100%;
	height: 100vh;
	background: url("~assets/img/bg.jpg");
}
// 折叠样式
.bg {
	position: absolute;
	top: 50.8%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 540px;
	height: 385px;
	background-color: #fff;
	border-radius: 5px 5px 5px 5px;
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.23);
	z-index: 8;
}
.bg2 {
	position: absolute;
	top: 51.6%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 530px;
	height: 385px;
	background-color: #fff;
	border-radius: 5px 5px 5px 5px;
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.23);
}

// 登录页主要样式
#login {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 548px;
	height: 385px;
	padding: 30px;
	background-color: #fff;
	border-radius: 5px 5px 5px 5px;
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.23);
	z-index: 9;
	.line {
		width: 481px;
		height: 1px;
		margin: 19px auto 30px;
		.line_l {
			float: left;
			width: 50%;
			height: 1px;
			background: linear-gradient(to right, #fff, #000);
		}
		.line_r {
			float: left;
			width: 50%;
			height: 1px;
			background: linear-gradient(to left, #fff, #000);
		}
	}
	.lg_tit {
		width: 100%;
		text-align: center;
		color: #3b3b3b;
		font-size: 28px;
		font-family: HelveticaNeue Bold, HelveticaNeue Bold-Bold;
		font-weight: 700;
	}
}

.rm {
	display: flex;
	margin-top: 44px;
	align-items: center;
	font-size: 13px;
	font-family: HelveticaNeue Bold, HelveticaNeue Bold-Bold;
	font-weight: 700;
	text-align: left;
	color: #767676;

	input {
		width: 19px;
		height: 19px;
		border-radius: 2px;
		box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.31);
	}

	span {
		margin-left: 5px;
	}
}

.forget {
	width: 200px;
	height: 14px;
	text-align: center;
	font-size: 13px;
	margin: 0 auto;
	font-family: HelveticaNeue Bold, HelveticaNeue Bold-Bold;
	font-weight: 700;
	color: #414141;
	a {
		cursor: pointer;
	}
}
.el-row {
	margin: 10px 0;
	.el-button {
		float: right;
	}
}
</style>
