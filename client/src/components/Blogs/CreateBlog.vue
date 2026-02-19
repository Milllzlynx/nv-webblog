<template>
  <div>
    <h1>Create Blog</h1>
    <form v-on:submit.prevent="createBlog">
      <div class="mb-3">
        <label class="form-label">Title:</label>
        <input type="text" v-model="blog.title" class="form-control" placeholder="Enter blog title">
      </div>

        <upload-image @uploaded="onUploaded"></upload-image> <!-- เพิ่ม Component Upload -->

      <div class="mb-3 editor-wrapper">
        <label class="form-label">Content:</label>
        <ckeditor :editor="editor" v-model="blog.content" :config="editorConfig"></ckeditor>
      </div>

      <div class="mb-3">
        <label class="form-label">Category:</label>
        <input type="text" v-model="blog.category" class="form-control">
      </div>

      <div class="mb-3">
        <label class="form-label">Status:</label>
        <input type="text" v-model="blog.status" class="form-control">
      </div>

      <button type="submit" class="btn btn-primary">Create Blog</button>
    </form>

  </div>
</template>

<script>
import BlogsService from '../../services/BlogsService'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadImage from '../Utils/Upload.vue' // Import

export default {
  components: {
    UploadImage // Register Component
  },
  data() {
    return {
      editor: ClassicEditor,  // 1. กำหนด Editor Build
      editorConfig: {
        licenseKey: 'GPL',
        // สามารถปรับแต่ง Toolbar ได้ตามต้องการ
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'] // 2. ตั้งค่า Toolbar
      },
      blog: {
        title: '',
        thumbnail: 'null',
        pictures: 'null',
        content: '',
        category: '',
        status: 'saved'
      }
    }
  },
  methods: {
    // รับชื่อไฟล์จาก Component ลูก
    onUploaded(filename) {
      this.blog.thumbnail = filename
      console.log('Thumbnail set to:', filename)
    },

    async createBlog() {
      try {
        await BlogsService.post(this.blog)
        this.$router.push({
          name: 'blogs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
/* ปรับแต่ง CSS เฉพาะส่วน Editor */
.editor-wrapper {
  text-align: left;
}

/* แก้ไขความสูงขั้นต่ำของ Editor ให้พิมพ์ง่ายขึ้น */
:deep(.ck-editor__editable) {
  min-height: 300px;
}
</style>