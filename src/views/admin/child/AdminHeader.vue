<template>
	<div id="header">
		<!-- 左侧logo -->
		<div class="logo">
			<h2>
				<a href="javascript:;">
					博客后台管理系统
				</a>
			</h2>
		</div>
		<div class="profile">
			<!-- 右侧部分 -->
			<ul class="clearfix">
				<li>
					<a href="javascript:;"><i class="fa fa-bell-o" aria-hidden="true"></i></a>
				</li>
				<li>
					<a href="javascript:;"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
				</li>
				<li>
					<a href="javascript:;"><i class="fa fa-comment-o" aria-hidden="true"></i></a>
				</li>
				<li>
					<a href="javascript:;" @mouseenter="isFade = true" @mouseleave="isFade = false">
						Admin
						<i class="fa fa-angle-down" aria-hidden="true"></i>
					</a>
					<!-- 二级菜单 -->
					<transition name="fade">
						<div
							class="pos"
							@mouseenter="isFade = true"
							@mouseleave="isFade = false"
							v-show="isFade"
						>
							<ol>
								<li>
									<a href="javascript:;">
										<i class="iconfont icon-settings" aria-hidden="true"></i>设置
									</a>
								</li>
								<!-- 退出按钮 -->
								<li @click="exitClick">
									<a href="javascript:;"> <i class="iconfont icon-exit"></i>退出 </a>
								</li>
							</ol>
						</div>
					</transition>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "AdminHeader",
	data() {
		return {
			isFade: false, // 控制二级菜单的显示与隐藏
		};
	},
	methods: {
		exitClick() {
			// 退出功能
			sessionStorage.clear();
			this.$router.replace("/login");
			this.$message({ type: "success", message: "退出成功" });
		},
	},
};
</script>

<style lang="less" scoped>
//  过渡动画
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateY(50px);
}

// main css
#header {
	height: 55px;
	padding: 0 16px;
	margin-bottom: 30px;
	line-height: 55px;
	background-color: #f96332;
	color: #f3f3f3;
}

.logo {
	float: left;
	width: 200px;
	text-align: center;
	a {
		display: block;
		transition: all 0.3s;
		font-weight: 500;
		&:hover {
			background-color: #f95823;
			text-decoration: none;
		}
	}
}

.profile {
	float: right;
	ul {
		& li:last-child {
			width: 79px;
		}
		li {
			position: relative;
			float: left;
			width: 48px;
			text-align: center;
			margin-right: 10px;
			a {
				display: block;
				width: 100%;
				height: 100%;
				transition: all 0.3s;

				&:hover {
					background-color: #f95823;
					text-decoration: none;
				}
			}
			.pos {
				position: absolute;
				top: 55px;
				right: 0;
				width: 179px;
				color: #000;
				background-color: #fff;
        transition: all 0.4s ease-in-out;
        border: 1px #eaeaea solid;
        border-top: 0;
				z-index: 9;
				i {
					font-size: 15px;
					margin-right: 10px;
				}
				ol {
					li {
						width: 100%;
						color: #878787;
						text-align: left;
						font-size: 14px;
						border-top: 1px solid #eaeaea;
						a {
							display: block;
							padding: 0 16px;
							box-sizing: border-box;
						}
						& a:hover {
							background-color: #f5f5f5;
						}
					}
				}
			}
		}
	}
}
</style>
