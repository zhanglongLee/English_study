<template>
  <div class="container">
    <div class="big-img-content">
      <div class="big-img">
        <img :src="require('@/assets/images/article/1.png')" />
      </div>
      <div class="big-img-des">
        <h3>Curry hits back after sharing nude photo</h3>
        <p>
          Ayesha Curry is setting the record straight after fans allege she's a
          hypocrite for sharing a nude photo to social media.
        </p>
      </div>
    </div>
    <div class="small-content">
      <div class="small-img">
        <img :src="require('@/assets/images/article/2.png')" />
        <div class="small-img-title">
          Meghan and Harry make surprise appearance
        </div>
      </div>
      <div class="small-img">
        <img :src="require('@/assets/images/article/3.png')" />
        <div class="small-img-title">
          Meghan and Harry make surprise appearance
        </div>
      </div>
      <div class="small-img">
        <img :src="require('@/assets/images/article/4.png')" />
        <div class="small-img-title">
          Meghan and Harry make surprise appearance
        </div>
      </div>
      <div class="small-img">
        <img :src="require('@/assets/images/article/5.png')" />
        <div class="small-img-title">
          Meghan and Harry make surprise appearance
        </div>
      </div>
      <div class="small-img">
        <img :src="require('@/assets/images/article/5.png')" />
        <div class="small-img-title">
          Meghan and Harry make surprise appearance
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top5List'
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .big-img-content {
    display: flex;
    width: 100%;
    height: 215px;
    background: #464e56;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    .big-img {
      width: 428px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .big-img-des {
      width: calc(100% - 430px);
      padding: 30px;
      font-size: 13px;
      color: #fff;
      h3 {
        width: 90%;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
      p {
        line-height: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
  .small-content {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .small-img {
      width: 135px;
      cursor: pointer;
      padding-bottom: 10px;
      &:hover {
        opacity: 0.9;
        .small-img-title {
          color: rgb(0, 120, 255);
        }
      }
      img {
        width: 100%;
        height: 62px;
      }
      .small-img-title {
        color: rgb(2, 14, 101);
        margin-top: 4px;
        font-size: 12px;
        line-height: 14px;
        padding: 0 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
