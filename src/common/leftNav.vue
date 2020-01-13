<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item v-for="(item, index) in shuzu" :key="index" :index="item.resources.resource"><i class="el-icon-menu"></i>{{item.name}}</el-menu-item>
					<el-submenu  :key="item.id" v-for="(item) in shuzu1">
						<template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
						<el-menu-item v-for="(item1) in item.children" :key="item1.id"  :index="item1.resources.resource"  ><i class="el-icon-menu"></i>{{item1.name}}</el-menu-item>
					</el-submenu>

				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
					<head-top></head-top>
				    <router-view></router-view>
			</el-col>
		</el-row>
	
		
	
		 
  	</div>
</template>

<script>
import headTop from '../components/headTop'
// import {menuall} from '@/api/index'
    export default {
		data() {
			return {
				data: {},
				shuzu: [],
				shuzu1: [],
				item1: {
					resources: {
						resource: ''
					}
				}
			}
		},
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
		components: {
			headTop
		}
    }
</script>


<style lang="less" >
	@import '../style/mixin';
	.manage_page{
		.el-menu{
		overflow: hidden;
	}
  .el-menu{
    background-color: rgb(50, 64, 87)
  }
  .el-submenu{
    
  }
  .el-submenu__title, .el-menu-item{
  color: #bfcbd9;
	}
	.el-menu--inline .el-menu-item{
		background-color: rgba(29,40,54,.5)
	}
	
  .el-submenu__title:hover, .el-menu-item:hover {
    background-color:rgba(179, 184, 192, 0.3);
	}
	.head_top{
		float: right;
	}
		
	}
	
	
  
</style>