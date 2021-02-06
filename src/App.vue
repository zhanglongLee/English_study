<template>
  <div class="container">
    <header>
      <div class="title">
        <ul>
          <!-- <li class="logo">
            <img src="./assets/images/logo.png" alt="logo">
          </li> -->
          <li class="item">首页</li>
          <li class="item">我要翻译</li>
          <li class="item">文章专区</li>
          <li class="item">听力专区</li>
        </ul>
        <div class="information-wrap">
          <div class="search">
            <input type="text" placeholder="请搜索">
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
    <section>
      <router-view/>
    </section>
    <footer></footer>
  </div>
</template>

<style lang="scss">
@import url(assets/css/reset.css);
*{
  box-sizing: border-box;
}
.container{

  width: 100%;
  height: 100%;

  header {
    position: fixed;
    z-index: 9999999;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 54px;
    max-width: 1900px;
    min-width: 960px;
    margin: 0 auto;
    background: #3D444C;
  }

  .title {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 0;
    
    ul{
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
      background: rgb(49, 54, 61);
    }

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
}

</style>
