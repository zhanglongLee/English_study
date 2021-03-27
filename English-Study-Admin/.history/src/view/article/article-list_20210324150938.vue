<template>
  <div>
    <!-- 列表页面 -->
    <div class="container" v-if="!showEdit">
      <div class="header"><div class="title">文章列表</div></div>
      <!-- 表格 -->
      <my-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
        @row-click="rowClick"
        v-loading="loading"
      ></my-table>
      <table-paper class="table-paper" :currPageNum="page.index" :PagerOrder="page" @tablePaperEven="tablePaperChange"></table-paper>
    </div>

    <!-- 编辑页面 -->
    <article-modify v-else @editClose="editClose" :rowObj="rowObj"></article-modify>
  </div>
</template>

<script>
import article from '@/model/article'
import MyTable from '@/component/base/table/my-table'
import tablePaper from '@/component/base/tablePaper/tablePaper'
import articleModify from './article-modify'

export default {
  components: {
    MyTable,
    articleModify,
    tablePaper,
  },
  data() {
    return {
      /* title: '', //	是	string	文章标题
        description: '', //	是	string	文章描述
        image: '', //	否	string	文章封面图
        content: '', //	是	string	文章内容
        author: '', //	是	string	文章作者
        published_time: '', //	是	string	发布日期，格式：2020-01-14
        categoryId: '', //	是	string	分类id
        is_published: 0, //	是	string	是否发布，0代表未发布，1代表已发布
        is_comment_enabled: 1, //	是	string	是否显示评论，1代表显示，0代表不显示
        is_top: 0, //	是	string	是否文章置顶，1代表置顶，0代表不置顶 */
      tableColumn: [
        { prop: 'title', label: '标题' },
        { prop: 'author', label: '作者' },
        { prop: 'description', label: '描述' },
        { prop: 'content', label: '内容' },
        { prop: 'published_time', label: '发布日期' },
        { prop: 'category.name', label: '分类名' },
      ],
      tableData: [],
      operate: [],
      page: {
        size: 5,
        count: 8,
        index: 1,
      },
      showEdit: false,
      rowObj: {},
      loading: false,
      currentPage3: 4,
    }
  },
  async mounted() {
    this.loading = true
    await this.getArticles()
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary' },
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
        permission: '删除图书',
      },
    ]
    this.loading = false
  },
  methods: {
    tablePaperChange(data) {
      this.page.index = data
      this.getArticles(this.page)
    },
    async getArticles() {
      try {
        const articles = await article.getArticles(this.page)
        this.page.count = articles.total
        this.tableData = articles.data
      } catch (error) {
        // 资源不存在
        if (error.code === 10020) {
          this.tableData = []
        }
      }
    },
    handleEdit(val) {
      this.showEdit = true
      this.rowObj = val.row
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await article.deleteArticle(val.row.id)
        if (res.code == 0) {
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
          
          this.getArticles(this.page)
        }
      })
    },
    rowClick() {},
    editClose() {
      this.showEdit = false
      this.getArticles()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 30px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      height: 59px;
      line-height: 59px;
      color: $parent-title-color;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .table-paper {
    margin-top: 20px;
  }
}
</style>
