<template>
  <nav
          class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
        >
          <div
            class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
          >
            <h3
              class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              >Welcome, {{ user.username  }}</h3
            >
            <form
              class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
            >
              <div class="relative flex w-full flex-wrap items-stretch">
                <span
                  class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                  ><i class="fas fa-search"></i
                ></span>
                <input
                  type="text"
                  placeholder="Search here..."
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
            <ul
              class="flex-col md:flex-row list-none items-center hidden md:flex"
            >
              <NuxtLink
                class="text-blueGray-500 block"
                to=""
              >
                <div class="items-center flex" 
                @click="showDropdown()">
                  <span
                    class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
                    ><img
                      alt="..."
                      class="w-full rounded-full align-middle border-none shadow-lg"
                      :src='featuredImage+ user.profile_image'
                  /></span>
                </div>
              </NuxtLink>
              <div class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 block" 
                id="user-dropdown" 
                data-popper-placement="bottom-end" 
                style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-56px, 64px);"
                v-if="dropDown"
              >
                <NuxtLink to="settings"
                  class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >
                  Settings
                </NuxtLink>
                <hr>
                <template v-if="$auth.user">
                  <a href=""
                    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    @click.prevent="logout"
                    >
                    Logout
                  </a>
                </template>
              </div>
            </ul>
          </div>
        </nav>
</template>

<script>
export default {
  name: 'TopBar',
  data(){
    return {
      dropDown: false,
      user: '',
    }
  },
  created(){
	  this.$axios.$get('/sanctum/csrf-cookie').then(response => {
      this.getUser();
    });
    
  },
  computed: {
    featuredImage(){
      return this.$config.myPublicVariable + 'storage/img/profile/'
    }
  },
  methods: {
    //  featuredImage(){
    //   return this.$config.myPublicVariable + 'storage/img/profile/'
    // },
    logout(){
      this.$auth.logout()
    },
    showDropdown(){
      this.dropDown = !this.dropDown
    },
    getUser(){
      this.$axios.$get('/api/user').then(response => {
        this.user = response.data;
      })
	  }
  }
}
</script>

<style scoped>
@import '@/assets/css/all.min.css';
</style>