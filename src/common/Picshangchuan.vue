<template>
  <div class="picshangchuan">
     <div class="picload" :categoryname="childMsg" >
        <el-upload ref="upload" class="diji"
        action="https://jsonplaceholder.typicode.com/posts/"
        :http-request="hantupianshangchuan"
        list-type="picture-card"
        :multiple = false
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
   </div>

  </div>
  
</template>
<script>
import {getSave} from '../api/index'
    export default {
    data() {
      return {
         dialogImageUrl: '',
        dialogVisible: false
      };
    },
    props: {
      childMsg: String, //这样可以指定传入的类型，如果类型不对，会警告
      num : String
    },
    methods: {
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      qingchu() {
          this.$refs.upload.clearFiles();
      },
       open6(msg) {
        this.$notify.error({
          title: '错误',
          message: msg
        });
      },
       open3(msg) {
        this.$notify({
          title: '成功',
          message: msg,
          type: 'success'
        })
       },
      hantupianshangchuan(file) {
          let that = this;
          let div = this.$el;
           let formData = new FormData();
           formData.append("file", file.file);
           var d = new Date().getMilliseconds();
           formData.append('key', d)
            getSave(formData).then(res => {
                      if(res.code == 200) {
                        this.open3('上传成功!')
                      } else {
                        this.open6(res.message)
                      }
              })
      }
    },
    created() {
      this.$bus.on('qingchupic', this.qingchu)
    },
    beforeDestroy() {
      this.$bus.off('qingchupic', this.qingchu)
    }
    }
</script>
<style scoped lang="less">
.picshangchuan{
    .wrapper{
    width: 990px;
    height: 100%;
    margin: 0 auto;
}
 .kuandu{
     width: 100%;
 }
 .el-form-item{
     width: 100%;
 }
 .el-form-item__content{
     width: 70%;
 }
 .dinggao{
     height: 174px;
     overflow: hidden;
 }
}

</style>

