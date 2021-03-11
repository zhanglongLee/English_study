<template>
  <div>
    <div class="el-scrollbar__wrap">
      <el-backtop
        target=".el-scrollbar__wrap"
        :visibility-height="visibilityHeight"
        :right="right"
        :bottom="bottom"
        @click="clickCb"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  props: {
    visibilityHeight: { // 滚动高度达到此参数值才出现
      type: Number,
      default: 200
    },
    right: { // 控制其显示位置, 距离页面右边距
      type: Number,
      default: 40
    },
    bottom: { // 控制其显示位置, 距离页面底部距离
      type: Number,
      default: 40
    }
  },
  inject: ['color'],
  data() {
    return {

    }
  },
  created() {
    console.log(this.color)
  },
  methods: {
    clickCb() {
    }
  }
}
</script>

<style scoped>
.el-scrollbar__wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
