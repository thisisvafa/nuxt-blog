<template>
  <form @submit.prevent="submitRegister">
    <input type="text" v-model="name" placeholder="Full Name">
    <input type="email" v-model="email" placeholder="Email">
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <input type="password" v-model="password_confirmation" placeholder="Password Confirmation">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  // middleware: 'auth',

  data:() => ({
    name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: ''
  }),

  methods:{
    submitRegister(event){
      this.$axios.$get('sanctum/csrf-cookie')
      this.$axios.$post('/register', {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        password_confirmation: this.password_confirmation
      
      }).then(response => {
        this.$router.push('/auth/login')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>