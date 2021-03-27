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
      <table-paper :currPageNum="index" :PagerOrder="page" @tablePaperEven="tablePaperChange"></table-paper>
    </div>

    <!-- 编辑页面 -->
    <article-modify v-else @editClose="editClose" :editBookID="editBookID"></article-modify>
  </div>
</template>

<script>
import article from '@/model/article'
import MyTable from '@/component/base/table/my-table'
import tablePaper from '@/component/base/tablePaper/tablePaper'
import BookModify from './article-modify'

export default {
  components: {
    MyTable,
    BookModify,
    tablePaper
  },
  data() {
    return {
      tableColumn: [
        { prop: 'title', label: '标题' },
        { prop: 'author', label: '作者' }
      ],
      tableData: [],
      operate: [],
      page:{
        size:5,
        count:8
      },
      index:1,
      showEdit: false,
      editBookID: 1,
      loading:false,
      currentPage3:4
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
    tablePaperChange(data){
      console.log(data)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async getArticles() {
      try {
        const articles = await article.getArticles()
        console.log(articles)
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
      console.log('val', val)
      this.showEdit = true
      this.editBookID = val.row.id
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await article.deleteBook(val.row.id)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.getArticles()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
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

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
  }
}
</style>
