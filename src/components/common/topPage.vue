<template>
  <header>
    <Login :visibility="isShow" />
    <div class="title">
      <ul>
        <!-- <li class="logo">
                  <img src="./assets/images/logo.png" alt="logo">
                </li> -->
        <li
          v-for="(item, index) in navList"
          :key="index"
          class="item"
          :class="{ active: item.active }"
          @click="toNav(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="information-wrap">
        <div class="search">
          <input type="text" placeholder="请搜索" />
          <div class="search-btn">
            <i></i>
          </div>
        </div>
        <span class="login" @click="isShow = true">登录/注册</span>
        <!-- <div class="content">
          <div class="information">
            <img src="@/assets/images/logo.png" alt="头像" />
          </div>
          <div class="logout-wrap">
            <div class="userName">Lee</div>
            <div class="personal-center">个人中心</div>
            <div class="collection">我的收藏</div>
            <div class="logout">退出登录</div>
          </div>
        </div> -->
      </div>
    </div>
  </header>
</template>

<script>
import Login from '@/components/common/login/Login'
export default {
  name: 'TopPage',
  components: {
    Login
  },
  data() {
    return {
      isShow: false, // 登录
      navList: [
        {
          name: '首页',
          active: true,
          path: '/'
        },
        {
          name: '我要翻译',
          active: false,
          path: '/translate'
        },
        {
          name: '文章专区',
          active: false,
          path: '/article'
        },
        {
          name: '听力专区',
          active: false,
          path: '/listen'
        }
      ]
    }
  },
  watch: {
    $route(newPath) {
      const path = newPath.fullPath
      this.checkAct(path)
    }
  },
  mounted() {
    this.checkAct(this.$route.fullPath)
  },
  methods: {
    toNav(path) {
      this.$router.push({ path: path })
    },
    checkAct(path) {
      if (path) {
        this.navList.forEach((item, index) => {
          if (item.path === path) {
            this.navList[index].active = true
          } else {
            item.active = false
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 9999999;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 54px;
  min-width: 1300px;
  margin: 0 auto;
  background: rgba(61, 68, 76, 0.7);

  .title {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 0;

    ul {
      display: flex;
    }

    .item {
      height: 54px;
      line-height: 54px;
      padding: 0 10px;
      font-size: 16px;
      color: #ccc;
      cursor: pointer;
    }

    .logo img {
      height: 75px;
    }

    .item:hover {
      color: #fff;
    }

    .item.active {
      color: #fff;
      background: rgba(61, 68, 76, 1);
    }

    .information-wrap {
      display: flex;
      align-items: center;

      .search {
        width: 260px;
        overflow: hidden;
        border-radius: 3px;
        display: flex;

        input {
          width: 230px;
          height: 32px;
          line-height: 32px;
          padding: 0 0 0 10px;
          color: #fff;
          background: #31363e;
          border: none;
          outline: none;
        }

        .search-btn {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #31363e;
          cursor: pointer;

          i {
            width: 24px;
            height: 24px;
            background: url(../../assets/images/search.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .login {
        font-size: 16px;
        color: #ccc;
        margin-left: 20px;
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100px;
        height: 54px;

        .information {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .logout-wrap {
          z-index: 9999;
          position: absolute;
          top: 54px;
          right: 0px;
          width: 100px;
          height: 0;
          overflow: hidden;
          padding: 0 10px;
          background: #31363e;
          transition: all 0.2s linear;

          div {
            width: 100%;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
            color: #ccc;
            cursor: pointer;
          }

          .userName {
            border-bottom: 1px solid #ccc;
          }

          div:hover {
            color: #fff;
          }
        }

        .information:hover + .logout-wrap,
        .logout-wrap:hover {
          height: 121px;
        }
      }
    }
  }
}
</style>
