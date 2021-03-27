<template>
    <div class="tablePaper clearfix" v-if="!!PagerOrder">
      <el-pagination style="float: right;"
        :page-size="PagerOrder.size"
        :pager-count="5"
        :current-page="currPageNum"
        layout="prev, next"
        @current-change="currentChange"
        :total="PagerOrder.count">
      </el-pagination>
      <span class="pagerInfo">共 {{ PagerOrder.count }} 条， 每页 {{ PagerOrder.size }} 条  </span>
      <div class="pagerInfo">
        <slot></slot>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      //分页数据
      PagerOrder: {},
      //当前页码
      currPageNum: {
        type: [Number],
        default: 1
      },

    },
    methods: {
      currentChange(data){
        let obj = {
          type: 'paperNumChange',
          data: data
        }
        this.$emit("tablePaperEven", obj);
      },

    },
    mounted() {


    },
    data () {
      return {
        pagerCount: 6
      }
    }
  }
</script>

<style scoped>
  .tablePaper { width: 100%; height: 100%; background: #fff;}
  /* .pagerInfo{float: right;font-size: 14px;line-height: 32px;margin-right: 10px;}
  
  .page-info input{width: 50px;height: 35px;border: 1px solid #f1f1f1;text-align: center;}
  .page-info span{margin-right: 10px;font-size: 14px;}
  .page-info button{width: 40px;height: 35px;background: #C72723;color: #fff;font-size: 20px;border-radius: 5px;margin: 0 5px;cursor: pointer;} */

</style>

