<template>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="total"
  v-show="total"
  class="padingTop"
  @current-change="tiaozhuan"
  >
</el-pagination>
</template>
<script>
    export default {
        props:{
            total : Number
        },
        methods: {
            tiaozhuan(page) {
                this.$bus.emit('page', page)
            }
        }
    }
</script>

<style scoped>
    .padingTop{
        margin-top: 5px;
        text-align: center;
    }
</style>
