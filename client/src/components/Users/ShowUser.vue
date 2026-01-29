<template>
  <div>
    <h1>Show User</h1>
    <div v-if="user">
      <p>ID : {{ this.user.id }}</p>
      <p>ชื่อ - นามสกุล : {{ this.user.name }} {{ this.user.lastname }}</p>
      <p>Email : {{ this.user.email }}</p>
      <p>Password : {{ this.user.password }}</p>
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'
export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    console.log("created userId:", this.user)
  },
  async mounted() {
    var userId = this.$route.params.userId
    this.user = (await UsersService.show(userId)).data
    console.log("mounted userId:", this.user)
  }

}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
