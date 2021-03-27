<template>
  <div class="container">
    <div class="title">新建文章</div>
    <div class="wrap">
      <el-row>
        <el-col :span="24">
          <el-form
            :model="form"
            :rules="rules"
            status-icon
            ref="form"
            label-width="120px"
            v-loading="loading"
            @submit.native.prevent
          >
            <el-form-item label="文章标题" prop="title">
              <el-input size="medium" v-model="form.title" placeholder="请填写书名"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
              <el-input size="medium" v-model="form.author" placeholder="请填写作者"></el-input>
            </el-form-item>
            <el-form-item label="封面" prop="image">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :headers="uploadHeaders"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="form.image" :src="form.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="简介" prop="description">
              <el-input size="medium" type="textarea" :rows="4" placeholder="请输入简介" v-model="form.description">
              </el-input>
            </el-form-item>
            <el-form-item label="分类" prop="categoryId">
              <el-select v-model="form.categoryId" placeholder="请选择">
                <el-option
                  v-for="item in categoryList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="发布日期" prop="published_time">
              <el-date-picker
                v-model="form.published_time"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="是否发布" prop="is_published">
              <el-switch v-model="form.is_published" :active-color="atColor" :inactive-color="inColor"> </el-switch>
            </el-form-item>
            <el-form-item label="是否开启评论" prop="is_comment_enabled">
              <el-switch v-model="form.is_comment_enabled" :active-color="atColor" :inactive-color="inColor">
              </el-switch>
            </el-form-item>
            <el-form-item label="是否置顶" prop="is_top">
              <el-switch v-model="form.is_top" :active-color="atColor" :inactive-color="inColor"> </el-switch>
            </el-form-item>
            <el-form-item label="内容" prop="content">
              <!-- <el-input size="medium" type="textarea" :rows="10" placeholder="请输入内容" v-model="form.content">
              </el-input> -->
              <!-- <Tinymce ref="editor" v-model="form.content" :height="100" /> -->
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
import { getToken } from '@/lin/util/token.js'
import Tinymce from '@/component/tinymce/index.vue'

export default {
  components:{
    Tinymce
  },
  data() {
    const token = getToken('access_token')
    return {
      uploadHeaders: {
        Authorization: token,
      },
      uploadUrl: process.env.VUE_APP_BASE_URL + 'cms/file',
      categoryList:[],
      atColor:'#ff0000',
      inColor:'#999',
      loading: false,
      form: {
        title:'',               //	是	string	文章标题
        description:'',         //	是	string	文章描述
        image:'',               //	否	string	文章封面图
        content:'',             //	是	string	文章内容
        author:'',              //	是	string	文章作者
        published_time:'',      //	是	string	发布日期，格式：2020-01-14
        categoryId:'',          //	是	string	分类id
        is_published:0,        //	是	string	是否发布，0代表未发布，1代表已发布
        is_comment_enabled:1,  //	是	string	是否显示评论，1代表显示，0代表不显示
        is_top:0,              //	是	string	是否文章置顶，1代表置顶，0代表不置顶
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
        ],
        description: [
          { required: true, message: '请输入文章描述', trigger: 'blur' },
        ],
        image: [
          { required: true, message: '请输入文章封面图', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: 'blur' },
        ],
        author: [
          { required: true, message: '请输入文章作者', trigger: 'blur' },
        ],
        published_time: [
          {  required: true, message: '请选择日期', trigger: 'change' }
        ],
        categoryId: [
          { required: true, message: '请选择分类', trigger: 'change' }
        ],
        is_published: [
          { required: true, message: '请选择发布状态', trigger: 'change' }
        ],
        is_comment_enabled: [
          { required: true, message: '请选择评论状态', trigger: 'change' }
        ],
        is_top: [
          { required: true, message: '请选择置顶状态', trigger: 'change' }
        ],
      }
    }
  },
  mounted(){
    this.getCategory();
  },
  methods: {
    // 图片上传成功
    handleAvatarSuccess(res, file) {
      console.log(file)
      this.form.image = URL.createObjectURL(file.raw);
      this.form.originImage = file.response[0].path;
      console.log(this.form)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    // 获取分类列表
    getCategory(){
      this.$axios({
        method: 'get',
        url: '/v1/category'
      })
      .then(res=>{
        res.data.forEach((item,index)=>{
          this.categoryList.push(
            {
              value:item.id,
              label:item.category_name
            }
          )
        })
      })
    },
    submitForm() {
      this.$refs.form.validate(async v=>{
        if(v){
          try {
            this.loading = true
            this.form.image = this.form.originImage
            const res = await article.createArticle(this.form)
            this.loading = false
            if (res.code < window.MAX_SUCCESS_CODE) {
              this.$message.success(`${res.message}`)
              this.resetForm('form')
            }
          } catch (error) {
            this.loading = false
            this.$message.error('文章添加失败，请检测填写信息')
            console.log(error)
          }
        }
      })
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;
    border-bottom: 1px solid #dae1ec;
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}

.avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader /deep/ .el-upload:hover {
  border-color: #409eff;
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
</style>
