<template>
  <header>
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
        <span class="login">登录/注册</span>
        <!-- <div class="content">
                  <div class="information">
                    <img src="./assets/images/logo.png" alt="头像">
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
export default {
  name: 'TopPage',
  data() {
    return {
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
  min-width: 960px;
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
  }
}
</style>
