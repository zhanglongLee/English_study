<template>
  <div class="container">
    <top-page v-if="!isNotFound" />
    <section>
      <router-view />
    </section>
    <footer></footer>
  </div>
</template>
<script>
import topPage from './components/common/topPage'
export default {
  name: 'Translate',
  components: {
    'top-page': topPage
  },
  data() {
    return {
      isNotFound: false
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.isNotFound = val.meta.title === '404页面'
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    this.isNotFound = this.$route.meta.title === '404页面'
  }

}
</script>
<style lang="scss">
@import url(assets/css/reset.css);
@import url(assets/css/iconfont.css);
*{
  box-sizing: border-box;
}

.container{

  width: 100%;
  height: 100%;
    .information-wrap{
      display: flex;
      align-items: center;

      .search{
        width: 260px;
        overflow: hidden;
        border-radius: 3px;
        display: flex;

        input{
          width: 230px;
          height: 32px;
          line-height: 32px;
          padding: 0 0 0 10px;
          color: #fff;
          background: #31363e;
          border: none;
          outline: none;
        }

        .search-btn{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #31363e;
          cursor: pointer;

          i{
            width: 24px;
            height: 24px;
            background: url(./assets/images/search.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .login{
        font-size: 16px;
        color: #ccc;
        margin-left: 20px;
        cursor: pointer;

        &:hover{
          color: #fff;
        }
      }
      .content{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100px;
        height: 54px;

        .information{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          overflow: hidden;

          img{
            width: 100%;
            height: 100%;
          }
        }

        .logout-wrap{
          z-index: 9999;
          position: absolute;
          top: 54px;
          right: 0px;
          width: 100px;
          height: 0;
          overflow: hidden;
          padding: 0 10px;
          background: #31363e;
          transition: all .2s linear;

          div{
            width: 100%;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
            color: #ccc;
            cursor: pointer;
          }

          .userName{
            border-bottom: 1px solid #ccc;
          }

          div:hover{
            color: #fff;
          }
        }

        .information:hover + .logout-wrap,
        .logout-wrap:hover{
          height: 121px;
        }

      }
    }
}

</style>
