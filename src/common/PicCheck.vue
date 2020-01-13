<template>
  <div class="picCheck">
     <div class="picload" >
        <el-upload ref="upload" class="dier"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :multiple = "false"
        :on-preview="handlePictureCardPreview"
        >
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
   </div>

  </div>
  
</template>
<script>
import {upload} from '../api/index'
    export default {
    data() {
      return {
         dialogImageUrl: '',
        dialogVisible: false
      };
    },
    props: {
      pic: Object, //这样可以指定传入的类型，如果类型不对，会警告
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    },
    mounted() {
      this.$refs.upload.uploadFiles.push(this.pic)
    }
    }
</script>
<style lang="less">
  .picCheck{
    .dier .el-icon-delete{
  display: none;
}

.wrapper{
    width: 990px;
    margin: 0 auto;
}
 .kuandu{
     width: 100%;
 }
 .el-form-item{
     width: 100%;
 }
 
 .dinggao{
     height: 174px;
     overflow: hidden;
     margin-top: 18px;
 }

  }

 
</style>

