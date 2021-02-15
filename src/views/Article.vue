<template>
  <div class="container">
    <div class="content">
      <div class="content-top">
        <div class="latest"></div>
        <div class="recommend"></div>
      </div>
      <div class="article-list">
        <div class="article" v-for="item in 10" :key="item">
          <div class="pic"></div>
          <div class="main">
            <div class="type">News</div>
            <div class="title">我是标题</div>
            <div class="desc">我是描述</div>
          </div>
        </div>
      </div>
      <div class="comment">
        <comment
          commentWidth="100%"
          @doSend="doSend($event)"
          @doChidSend="doChidSend(arguments)"
          :commentList="commentList"
          :commentNum="commentNum"
          :label="label"
          :avatar="avatar" 
          :placeholder="placeholder"
          :minRows="minRows"
          :maxRows="maxRows"
        ></comment>
      </div>
    </div>
  </div>
</template>

<script>
import comment from "../components/Comment";
export default {
  name: "Article",
  components: {
    comment
  },
  data() {
    return {
      label: "博主",
      placeholder: "说点什么吧",
      minRows: 4,
      maxRows: 4,
      commentNum: 2,
      avatar: require("@/components/img/icon/avtar.png"),
      commentList: [
        {
          id: 1,
          commentUser: {
            id: 1,
            nickName: "小胖",
            avatar:require("@/components/img/icon/xiaopang.jpg")
          },
          content:"小肥你好呀[太开心][太开心]~",
          createDate: "2019-9-23 17:36:02",
          childrenList: [
            {
              id: 2,
              commentUser: {
                id: 2,
                nickName: "小肥",
                avatar:require("@/components/img/icon/xiaofei.jpg")
              },
              targetUser: {
                id: 1,
                nickName: "小胖",
                avatar:require("@/components/img/icon/xiaopang.jpg")
              },
              content: "小胖你好呀[太开心][太开心]~很高兴认识你",
              createDate: "2019-9-23 17:45:26"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  padding-top: 54px;

  .content {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    .content-top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 400px;

      .latest {
        width: 60%;
        background: red;
      }
      .recommend {
        // position: fixed;
        // top: 74px;
        // right: 40px;
        width: 36%;
        height: 400px;
        background: burlywood;
      }
    }
    .article-list {
      width: 60%;
      .article {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        .pic {
          width: 220px;
          height: 120px;
          margin-right: 20px;
          background: #4395ff;
        }
        .main {
          flex: 1;
          height: 120px;
          background: blue;
        }
      }
    }
  }
}
</style>