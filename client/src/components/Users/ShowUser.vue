<template>
  <div>
    <h1>Show User</h1>
    <div v-if="user">
            <p>ID : {{ user.id }}</p>
            <p>ชื่อ - นามสกุล : {{ user.name }}  {{ user.lastname }}</p>
            <p>Email : {{ user.email }}</p>
            <p>Password : {{ user.password }}</p>
    </div>
  </div>
</template>

<script>
  import UsersService from '../../services/UsersService'
export default {
  data () {
    return {
      user: null
    }
  },
  async created () {
        try {
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log (error)
        }
    },
  mounted () {
    this.userId = this.$route.params.userId
    console.log("mounted userId:", this.userId)
  }

}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
