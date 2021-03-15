<template>
  <div class="container">
    <div v-for="item in 10" :key="item" class="article shadow">
      <div class="pic"></div>
      <div class="main">
        <div class="type">News</div>
        <div class="title">我是标题</div>
        <div class="desc">我是描述</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList'
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .article {
    width: 100%;
    // height: 150px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
    }
    .pic {
      width: 220px;
      height: 120px;
      margin-right: 20px;
    }
    .main {
      flex: 1;
      height: 120px;
    }
  }
}
</style>
