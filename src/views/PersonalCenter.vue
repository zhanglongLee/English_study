<template>
  <div class="personal-center">
    <el-container class="personal-content">
      <el-aside width="300px" class="personal-aside">
        <div class="user-info">
          <div class="user-img">
            <el-avatar class="img-wrap" :size="150" :src="userInfo.imgUrl" />
          </div>
          <div class="user-name">{{ userInfo.name }}<i class="el-icon-male male"></i></div>
        </div>
        <el-menu v-if="menuList.length>0" :default-active="currentIndex" class="aside-menu" @select="menuSelect">
          <el-menu-item v-for="item in menuList" :key="item.index" :index="item.index">
            <i :class="item.className"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="personal-main">
        <el-form
          class="user-form"
          label-position="left"
          label-width="80px"
          :model="userInfo"
        >
          <div class="form-header">
            <div class="form-title">{{ formTitle }}</div>
            <el-button v-if="disabled&&showEdit" type="primary" @click="disabled=false">编辑</el-button>
            <div v-if="!disabled&&showEdit" class="btns">
              <el-button type="info" @click="unSave">取消</el-button>
              <el-button type="primary" @click="save">保存</el-button>
            </div>
            <el-button v-if="showDel" type="primary" @click="disabled=false">删除</el-button>
          </div>

          <div v-if="currentIndex==='1'" class="form-content">
            <el-form-item label="我的昵称">
              <el-input v-model="userInfo.name" :disabled="disabled" />
            </el-form-item>
            <el-form-item label="我的邮箱">
              <el-input v-model="userInfo.email" :disabled="disabled" />
            </el-form-item>
            <el-form-item label="我的性别" prop="sex">
              <el-radio v-model="userInfo.sex" :disabled="disabled" :label="0">男</el-radio>
              <el-radio v-model="userInfo.sex" :disabled="disabled" :label="1">女</el-radio>
            </el-form-item>
            <el-form-item label="我的头像">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="userInfo.imgUrl" :src="userInfo.imgUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </div>
          <el-table
            v-if="currentIndex==='2'"
            ref="multipleTable"
            :data="downloadList"
            tooltip-effect="dark"
            class="my-list"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              label="日期"
              width="120"
            >
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="标题"
              width="360"
              show-overflow-tooltip
            />
          </el-table>

          <el-table
            v-if="currentIndex==='3'"
            ref="multipleTable"
            :data="collectionList"
            tooltip-effect="dark"
            class="my-list"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              label="日期"
              width="120"
            >
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="标题"
              width="360"
              show-overflow-tooltip
            />
          </el-table>

          <div v-if="currentIndex==='4'" class="form-content">
            <el-form-item label="旧密码">
              <el-input v-model="userInfo.oldPwd" />
            </el-form-item>
            <el-form-item label="新密码">
              <el-input v-model="userInfo.newPwd" />
            </el-form-item>
            <el-button type="primary">修改密码</el-button>
          </div>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      address: '2018年12月英语六级听力真题及答案:第2套'
    }
    const item1 = {
      date: '2016-05-02',
      address: '数字转型通达未来 | 江苏交控“六朵云”成果发布'
    }
    return {

      currentIndex: '1', // 当前选中的menu
      disabled: true,
      // menu信息
      menuList: [
        { index: '1', title: '个人信息', className: 'el-icon-user' },
        { index: '2', title: '我的下载', className: 'el-icon-download' },
        { index: '3', title: '我的收藏', className: 'el-icon-star-off' },
        { index: '4', title: '用户设置', className: 'el-icon-s-tools' }
      ],
      userInfo: {
        name: '小胖同学',
        email: '123456@qq.com',
        sex: 0,
        imgUrl: require('../assets/images/logo.png'),
        oldPwd: '',
        newPwd: ''
      },
      downloadList: Array(15).fill(item),
      collectionList: Array(5).fill(item1),
      imgUrl: require('../assets/images/logo.png')
    }
  },
  computed: {
    formTitle() {
      return this.menuList[Number(this.currentIndex) - 1].title
    },
    showDel() {
      return this.currentIndex === '2' || this.currentIndex === '3'
    },
    showEdit() {
      return this.currentIndex === '1'
    }
  },
  methods: {
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
    // 取消
    unSave() {
      this.disabled = true
    },
    // 保存
    save() {
      this.disabled = true
    },
    // 菜单选中
    menuSelect(i) {
      this.currentIndex = i
    }
  }
}
</script>
<style lang="scss" scoped>
.personal-center {
  min-width: 1300px;
  min-height: calc(100vh - 54px);
  padding-bottom: 10px;
  background-color: rgb(238, 241, 246);

  .personal-content {
    width: 1000px;
    margin: 0 auto;
    padding-top: 20px;

    .personal-aside {
      background: #fff;
      padding: 10px 0;

      .user-info {
        width: 100%;
        text-align: center;

        .user-img {
          width: 100%;
          display: flex;
          justify-content: center;
          .img-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .user-name {
          display: inline-block;
          margin: 20px 0;
          line-height: 30px;
          padding: 0 20px;
          text-align: center;
          font-size: 16px;
          color: rgb(247, 226, 226);
          border-radius: 18px;
          background: #666;

          i {
            font-size: 18px;
            margin-left: 5px;
          }
          .male {
            color: rgb(247, 226, 226);
          }
          .female {
            color: red;
          }
        }
      }
      .aside-menu {
        li {
          text-align: center;
          font-size: 16px;
        }
      }
    }

    .personal-main {
      padding: 0;
      margin-left: 100px;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      background: #fff;
      .user-form {
        .form-header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 30px;
          line-height: 60px;
          border-bottom: 1px solid #ccc;
          .form-title{
            font-size: 18px;
            font-weight: bold;
          }
          .cancel-btn{
            background: #bbb;
            border-color: #bbb;
          }
        }
        .form-content{
          padding: 30px 100px;
          /deep/ .el-form-item__content{
            width: 206px;
          }
          .avatar-uploader{
            /deep/ .el-upload {
              border: 1px dashed #d9d9d9;
              border-radius: 6px;
              cursor: pointer;
              position: relative;
              overflow: hidden;
            }
            /deep/ .el-upload:hover {
              border-color: #409EFF;
            }
            .avatar-uploader-icon {
              font-size: 28px;
              color: #8c939d;
              width: 178px;
              height: 178px;
              line-height: 178px;
              text-align: center;
            }
            .avatar {
              width: 178px;
              height: 178px;
              display: block;
            }
          }

        }

        .my-list{
          padding: 0 30px;
        }
      }
    }
  }
}

.el-aside {
  color: #333;
}
</style>

