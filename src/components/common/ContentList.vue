<template>
  <div class="content-list">
    <div
      v-for="item in curList"
      :key="item.id"
      class="articles-list-content-left-item"
    >
      <div class="item-info">
        <div class="title ellipsis" @click="toDetail(item.id)">
          {{ item.title }}
        </div>
        <div class="brief">{{ item.content.substr(0, 150) }}...</div>
        <div class="content-info">
          <div class="date">{{ item.happendate.split(" ")[0] }}</div>
          <div class="views"><i class="iconfont icon-yanjing"></i>{{ item.views }}</div>
          <div class="likes"><i class="iconfont icon-duomeitiicon-"></i>{{ item.views }}</div>
        </div>
      </div>
      <div v-if="item.pic" class="item-img">
        <img :src="item.pic" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    toDetail(id) {
      this.$emit('navToDetail', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.content-list{
  width: 100%;
  .articles-list-content-left-item {
    height: 150px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover .item-info > .brief{
      color: rgb(7, 7, 122);
    }
    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        color: rgba(38, 38, 38, 1);
        font-size: 20px;
        font-weight: bold;
      }
      .brief {
        width: 100%;
        color: #333;
        font-size: 14px;
      }
      .content-info{
        height: 30px;
        cursor: default;
        display: flex;
        align-items: center;
        color: rgba(168, 168, 168, 1);
        font-size: 12px;
        .date:hover,.views:hover,.likes:hover{
          color: red;
        }
        .views{
          margin: 0 10px;
        }
      }

    }
    .item-img {
      width: 200px;
      margin-left: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
