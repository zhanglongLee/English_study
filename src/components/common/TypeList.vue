<template>
  <div class="type-list">
    <el-button
      v-for="(item,index) in typeList"
      :key="index"
      class="btn-item"
      type="primary"
      size="small"
      round
      @click="handleClick(item)"
    >{{ item.name }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    typeList: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            name: '全部'
          },
          {
            id: 2,
            name: '体育'
          },
          {
            id: 3,
            name: '科技'
          },
          {
            id: 4,
            name: '音乐'
          }
        ]
      }
    }
  },
  methods: {
    handleClick(data) {
      this.$emit('typeBtnClick', data.id)
    }
  }
}
</script>

<style scoped>
.type-list{
  margin: 10px 0;
}
.type-list >>> .btn-item{
  padding: 6px 15px;
}
</style>
