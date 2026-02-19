<template>
  <div>
    <h1>Edit Blog</h1>
    <form v-on:submit.prevent="editBlog">
      <div class="mb-3">
        <label class="form-label">Title:</label>
        <input type="text" v-model="blog.title" class="form-control" placeholder="Enter blog title">
      </div>

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
      <p>
        <button type="submit" class="btn btn-primary">update blog</button>
        <button v-on:click="navigateTo('/blogs')">กลับ</button>
      </p>
    </form>
  </div>
</template>

<script>
import BlogsService from '../../services/BlogsService'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
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
        status: ''
      }
    }
  },
  methods: {
    async editBlog() {
      try {
        await BlogsService.put(this.blog)
        this.$router.push({
          name: 'blogs'
        })
      } catch (err) {
        console.log(err)
      }
    },
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async created() {
    try {
      let blogId = this.$route.params.blogId // รับค่าพารามิเตอร์จาก URL [5]
      this.blog = (await BlogsService.show(blogId)).data
    } catch (error) {
      console.log(error)
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