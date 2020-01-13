<template>
  <div class="picupload">
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
import {upload} from '../api/index'
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
      hantupianshangchuan(file) {
          let that = this;
          let div = this.$el;
          let yghSessionId = localStorage.getItem('sessionId');
           let formData = new FormData();
           formData.append("file", file.file);
           if (div.dataset.categoryname == '身份证正面') {
                formData.append("side", 'front');
           } else if (div.dataset.categoryname == '身份证反面') {
              formData.append("side", 'back');
           } else {
             formData.append("side", '');
           }
            upload(formData).then(res => {
              // console.log(res)
                      if(res.code == 200) {
            let data = res.data.tAttachments;
            div.dataset.name = data.name;
            div.dataset.url = data.url;
            div.dataset.type = data.type;
            if (div.dataset.categoryname == '身份证正面') {
              let result = JSON.parse(res.data.result);
                if (result.reason.includes('成功')) {
                    this.$bus.emit('name', result.result.realname, that.num)
                    this.$bus.emit('gender',result.result.sex, that.num)
                    this.$bus.emit('idCard',result.result.idcard, that.num)
                     this.$bus.emit('birthday',result.result.born, that.num)
                      this.$bus.emit('idCardResidence',result.result.address, that.num)
                      this.$bus.emit('nation',result.result.nation, that.num)
                } else {
                  alert('上传的图片不符合要求，请重新上传！');
                   this.$refs.upload.clearFiles();
                }
            } else if (div.dataset.categoryname == '身份证反面') {
              let result = JSON.parse(res.data.result);
                if (result.reason.includes('成功')) {
                  // console.log(that.num)
                    this.$bus.emit('idCardValidDate',result.result.end, that.num)
                      this.$bus.emit('issuingOrgan',result.result.department, that.num)
                } else {
                  alert('上传的图片不符合要求，请重新上传！');
                   this.$refs.upload.clearFiles();
                }
            }
            // console.log(div)
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
.picupload{
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

