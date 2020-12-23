<template>
	<div id="header">
		<div class="logo">
			<h2>
				<a href="">
					博客后台管理系统
				</a>
			</h2>
		</div>
		<div class="profile">
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
					<a href="javascript:;">
						Admin
						<i class="fa fa-angle-down" aria-hidden="true"></i>
					</a>
					<div class="pos">
						<ol>
							<li><a href="javascript:;">设置</a></li>
							<li><a href="javascript:;">设置</a></li>
						</ol>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "AdminHeader",
};
</script>

<style lang="less" scoped>
#header {
	height: 55px;
	padding: 0 16px;
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
				visibility: hidden;
				position: absolute;
				top: 55px;
				right: 0;
				width: 179px;
				color: #000;
				background-color: #fff;
				transform: translateY(50px);
				transition: all 0.4s ease-in-out;
				ol {
					li {
						width: 100%;
						text-align: left;
						& a {
							display: block;
						}
						& a:hover {
							background-color: #f5f5f5;
						}
					}
				}
			}
			&:hover .pos {
				visibility: unset;
				transform: translateY(0px);
			}
		}
	}
}
</style>
