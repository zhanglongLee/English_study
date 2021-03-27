<template>
  <dir class="img-upload">
    <el-upload
      class="avatar-uploader"
      :action="uploadUrl"
      :show-file-list="showFileList"
      :headers="uploadHeaders"
      :http-request="httpRequest"
      :before-upload="beforeUpload"
    >
      <slot></slot>
    </el-upload>
  </dir>
</template>

<script>
import { getToken } from '@/lin/util/token.js'
export default {
  props:{
    showFileList:{
      type:Boolean,
      default:()=>{
        return false
      }
    },
    httpRequest:{
      type:Function,
    },
    beforeUpload:{
      type:Function,
    }
  },
  data(){
    const token = getToken('access_token')
    return{
      uploadHeaders: {
        Authorization: token,
      },
      uploadUrl: process.env.VUE_APP_BASE_URL + 'cms/file',
    }
  }
}
</script>

<style scoped>
.img-upload{
  width: 100%;
}
</style>