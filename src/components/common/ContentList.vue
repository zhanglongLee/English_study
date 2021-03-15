<template>
  <div class="content-list">
    <div
      v-for="item in curList"
      :key="item.id"
      class="articles-list-content-left-item"
    >
      <div class="item-info">
        <div class="title ellipsis" @click="navToDetail(item.id)">
          {{ item.title }}
        </div>
        <div class="brief">{{ item.content.substr(0, 100) }}...</div>
        <div class="date">{{ item.happendate.split(" ")[0] }}</div>
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
  }
}
</script>

<style scoped>
.content-list{
  width: 100%;
}
.articles-list-content-left-item {
  height: 180px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.articles-list-content-left-item > .item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.articles-list-content-left-item > .item-info > .title {
  color: rgba(38, 38, 38, 1);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.articles-list-content-left-item > .item-info > .brief {
  width: 100%;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
}
.articles-list-content-left-item > .item-info > .date {
  color: rgba(168, 168, 168, 1);
  font-size: 12px;
}
.articles-list-content-left-item > .item-img {
  width: 270px;
  margin-left: 10px;
}
.articles-list-content-left-item > .item-img > img {
  width: 100%;
  height: 100%;
}
</style>
