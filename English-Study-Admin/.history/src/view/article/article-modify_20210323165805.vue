<template>
  <div class="container">
    <div class="title">
      <span>修改图书</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
    </div>
    <el-divider></el-divider>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="书名" prop="title">
              <el-input size="medium" v-model="form.title" placeholder="请填写书名"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
              <el-input size="medium" v-model="form.author" placeholder="请填写作者"></el-input>
            </el-form-item>
            <el-form-item label="封面" prop="image">
              <el-input size="medium" v-model="form.image" placeholder="请填写封面地址"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="description">
              <el-input size="medium" type="textarea" :rows="4" placeholder="请输入简介" v-model="form.description">
              </el-input>
            </el-form-item>
            <el-form-item label="内容" prop="description">
              <el-input size="medium" type="textarea" :rows="4" placeholder="请输入内容" v-model="form.content">
              </el-input>
            </el-form-item>
            <el-form-item label="发布日期" prop="description">
              <el-input size="medium" type="textarea" :rows="4" placeholder="请输入发布日期" v-model="form.published_time">
              </el-input>
            </el-form-item>
            <el-form-item label="是否发布" prop="is_published">
              <el-switch
                v-model="is_published"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item label="是否开启评论" prop="is_comment_enabled">
              <el-switch
                v-model="is_comment_enabled"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item label="是否置顶" prop="is_top">
              <el-switch
                v-model="is_top"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import article from '@/model/article'

export default {
  props: {
    rowObj: {
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
      form: {
        title: '',
        author: '',
        summary: '',
        image: '',
      },
    }
  },
  async mounted() {
    this.loading = true
    this.form = this.rowObj
    // this.form = await article.getArticle(this.editBookID)
    this.loading = false
  },
  methods: {
    async submitForm() {
      const res = await article.editBook(this.editBookID, this.form)
      if (res.code < window.MAX_SUCCESS_CODE) {
        this.$message.success(`${res.message}`)
        this.$emit('editClose')
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    back() {
      this.$emit('editClose')
    },
  },
}
</script>

<style lang="scss" scoped>
.el-divider--horizontal {
  margin: 0;
}

.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;

    .back {
      float: right;
      margin-right: 40px;
      cursor: pointer;
    }
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
