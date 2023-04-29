<template>
  <div class="text-blueGray-700 antialiased">
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-full bg-no-repeat"
          style="background-image: url(https://monstajamss.com/wp-content/uploads/2022/03/register_bg_2.png)"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
              >
                <div class="rounded-t mb-0 px-6 py-6">
                  <div class="text-center mb-3">
                    <h6 class="text-blueGray-500 text-sm font-bold">
                      Welcome, please sign in
                    </h6>
                  </div>
                </div>
                <Errors class="mb-5" :errors="errors"></Errors>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form @submit.prevent="submitLogin">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        v-model="form.email"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        v-model="form.password"
                      />
                    </div>
                    <!-- <div>
                      <label class="inline-flex items-center cursor-pointer"
                        ><input
                          id="customCheckLogin"
                          type="checkbox"
                          v-model="form.remember"
                          class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        /><span
                          class="ml-2 text-sm font-semibold text-blueGray-600"
                          >Remember me</span
                        ></label
                      >
                    </div> -->
                    <div class="text-center mt-6">
                      <button
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="flex flex-wrap mt-6">
                <div class="w-1/2">
                  <a href="#pablo" class="text-blueGray-200"
                    ><small>Forgot password?</small></a
                  >
                </div>
                <div class="w-1/2 text-right">
                  <a href="./register.html" class="text-blueGray-200"
                    ><small>Create new account</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="absolute w-full bottom-0 bg-blueGray-800 pb-6">
          <div class="container mx-auto px-4">
            <hr class="mb-6 border-b-1 border-blueGray-600" />
            <div
              class="flex flex-wrap items-center md:justify-between justify-center"
            >
              <div class="w-full md:w-4/12 px-4">
                <div
                  class="text-sm text-white font-semibold py-1 text-center md:text-left"
                >
                  Copyright © <span id="get-current-year"></span>
                  <a
                    href="https://www.creative-tim.com?ref=njs-login"
                    class="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                    >Henry Oladeji</a
                  >
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  name: 'Login',
  data:() => ({
    form: {
    email: '',
    password: '',
    },
    errors: [],
  }),
  methods:{
    async submitLogin(){
      try{
        await this.$auth.loginWith('laravelSanctum',{data: this.form})
      }catch (errors){
        if(errors.response.status = 422){
          this.errors = errors.response.data.errors
        }
      }
      // this.errors = [];
    
      // this.$auth.loginWith('laravelSanctum', {
      //   data: {
      //     email: this.email,
      //     password:this.password,
      //     remember: this.remember
      //   }
      // })
    
      // .then(() => {
      //   this.$router.push('/');
      // })
      // .catch(error => {
      //   console.log(error);
      // });
      // .then(() => this.$router.push ('/dashboard'))
      // .catch(error => {
      //   if(error.response.status !== 422) throw error

      //   this.errors = Object.values(error.response.data.errors).flat()
      // })
    }
  },
  head(){
    return{
      title: 'Login'
    }
  }
}
</script>

<style scoped>
body{
  margin: 0 !important;
}
</style>

