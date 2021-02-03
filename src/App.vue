<template>
  <div class="container">
    <header class="qqpc">
      <div class="title">
        <ul>
          <li class="logoLink">11</li>
          <li class="item">首页</li>
          <li class="item">下载</li>
          <li class="item">动态</li>
        </ul>
      </div>
    </header>
    <section>
      <router-view/>
    </section>
    <footer></footer>
  </div>
</template>

<style lang="scss">
body,html{
  box-sizing: content-box;
}
.container{

  width: 100%;
  height: 100%;

  header {
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 75px;
    max-width: 1900px;
    min-width: 960px;
    margin: 0 auto;
  }
  .qqpc {
    background: url(https://sqimg.qq.com/qq_product_operations/im/imbanner/20180201/pcqq_bg.jpg)
      no-repeat center center;
    background-size: cover;
  }
  .title {
    width: 100%;
    height: 75px;
    background-color: transparent;
    font-size: 0;

    ul,li {
      float: left;
      list-style: none;
    }

    .item {
      height: 75px;
      line-height: 75px;
      width: 75px;
      text-align: center;
      font-size: 20px;
    }

    .logoLink {
      width: 106px;
      height: 75px;
      overflow: hidden;
      font-size: 0;
      background: transparent
        url(//sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo_b.png) no-repeat
        left 15px;
      margin-left: 300px;
    }

    .item:hover {
      background-color: #12b7f5;
    }
  }
}

</style>
