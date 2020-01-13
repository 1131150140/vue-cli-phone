<template>
    <div class="header_container">
		<el-breadcrumb separator="/">
			
		</el-breadcrumb>
		<el-dropdown @command="handleCommand"  menu-align='start'>
			<img  class="avator">
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">首页</el-dropdown-item>
				<el-dropdown-item  command="singout">退出</el-dropdown-item>
				<el-dropdown-item  command="edirpassword">修改密码</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
// import {loginOut,getUser} from '../api/index'	
    export default {
    	data(){
    		return {
    			
    		}
    	},
    	created(){
    		
    	},
    	computed: {
    		
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.header_container{
		background-color: #EFF2F7;
		height: 36px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
		
	}
	.avator{
		.wh(36px, 36px);
		border-radius: 50%;
		margin-right: 37px;
		background-size: 100% 100%;
		transition:.6s;
	}
	.avator:hover{
		transform:rotate(110deg)scale(1);
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>
