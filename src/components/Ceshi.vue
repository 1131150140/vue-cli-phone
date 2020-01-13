<template>
    <div>
        <el-tree
  :data="data2"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
</el-tree>

<div class="buttons">
  <el-button @click="getCheckedKeys">通过 key 获取</el-button>
  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
  <el-button @click="resetChecked">清空</el-button>
</div>
    </div>
</template>

<script>
import {getstructure} from '@/api/index'
  export default {
    methods: {
      
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([9,8,5]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      getcaidan() {
          // getstructure().then(res => {
          //   this.data2 = res.datas;
          // })
        }
    },
    mounted() {
        this.getcaidan();
    },

    data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'id'
        }
      };
    }
  };
</script>

<style>

</style>
