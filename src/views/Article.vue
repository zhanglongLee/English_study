<template>
  <div class="container">
    <div class="content">
      <div class="content-top">
        <div class="latest shadow">
          <div class="big-img-content">
            <div class="big-img">
              <img :src="require('@/assets/images/article/1.png')" />
            </div>
            <div class="big-img-des">
              <h3>Curry hits back after sharing nude photo</h3>
              <p>
                Ayesha Curry is setting the record straight after fans allege
                she's a hypocrite for sharing a nude photo to social media.
              </p>
            </div>
          </div>
          <div class="small-content">
            <div class="small-img">
              <img :src="require('@/assets/images/article/1.png')" />
              <div class="small-img-title">
                Meghan and Harry make surprise appearance
              </div>
            </div>
            <div class="small-img">
              <img :src="require('@/assets/images/article/1.png')" />
              <div class="small-img-title">
                Meghan and Harry make surprise appearance
              </div>
            </div>
            <div class="small-img">
              <img :src="require('@/assets/images/article/1.png')" />
              <div class="small-img-title">
                Meghan and Harry make surprise appearance
              </div>
            </div>
            <div class="small-img">
              <img :src="require('@/assets/images/article/1.png')" />
              <div class="small-img-title">
                Meghan and Harry make surprise appearance
              </div>
            </div>
            <div class="small-img">
              <img :src="require('@/assets/images/article/1.png')" />
              <div class="small-img-title">
                Meghan and Harry make surprise appearance
              </div>
            </div>
          </div>
        </div>
        <div class="recommend shadow"></div>
      </div>
      <div class="article-list">
        <div v-for="item in 10" :key="item" class="article shadow">
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
          comment-width="100%"
          :comment-list="commentList"
          :comment-num="commentNum"
          :label="label"
          :avatar="avatar"
          :placeholder="placeholder"
          :min-rows="minRows"
          :max-rows="maxRows"
          @doSend="doSend($event)"
          @doChidSend="doChidSend(arguments)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import comment from '../components/common/Comment'
export default {
  name: 'Article',
  components: {
    comment
  },
  data() {
    return {
      label: '博主',
      placeholder: '说点什么吧',
      minRows: 4,
      maxRows: 4,
      commentNum: 2,
      avatar: require('@/components/common/img/icon/avtar.png'),
      commentList: [
        {
          id: 1,
          commentUser: {
            id: 1,
            nickName: '小胖',
            avatar: require('@/components/common/img/icon/xiaopang.jpg')
          },
          content: '小肥你好呀[太开心][太开心]~',
          createDate: '2019-9-23 17:36:02',
          childrenList: [
            {
              id: 2,
              commentUser: {
                id: 2,
                nickName: '小肥',
                avatar: require('@/components/common/img/icon/xiaofei.jpg')
              },
              targetUser: {
                id: 1,
                nickName: '小胖',
                avatar: require('@/components/common/img/icon/xiaopang.jpg')
              },
              content: '小胖你好呀[太开心][太开心]~很高兴认识你',
              createDate: '2019-9-23 17:45:26'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.shadow {
  background: #fff;
  box-shadow: 5px 5px 20px #e4e3e3;
}
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

      .latest {
        width: 60%;
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
      .recommend {
        // position: fixed;
        // top: 74px;
        // right: 40px;
        width: 36%;
      }
    }
    .article-list {
      width: 60%;
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
  }
}
</style>
