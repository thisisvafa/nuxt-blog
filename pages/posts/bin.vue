<template>
   <div>
    <LeftBar />
    <div class="relative md:ml-64 bg-blueGray-50">
      <TopBar />
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <div class="flex flex-wrap mt-4">
            <div class="w-full mb-12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
              >
                <!-- <div class="rounded-t mb-0 px-4 py-3 border-0">
                  <div class="flex flex-wrap items-center">
                    <div
                      class="relative w-full px-4 max-w-full flex-grow flex-1"
                    >
                      <h3 class="font-semibold text-lg text-blueGray-700">
                        All Posts
                      </h3>
                    </div>
                  </div>
                </div> -->
                <div class="rounded-t bg-white mb-0 px-6 py-6">
                  <div class="text-center flex justify-between">
                    <h6 class="text-blueGray-700 text-xl font-bold">
                      Deleted Posts
                    </h6>
                  </div>
                </div>
                <div class="block w-full overflow-x-auto">
                  <!-- Projects table -->
                  <table
                    class="items-center w-full bg-transparent border-collapse"
                  >
                    <thead>
                      <tr>
                        <th
                          class="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        >
                          Title
                        </th>
                        <th
                          class="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        >
                          Categories
                        </th>
                        <th
                          class="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        >
                          Date
                        </th>
                         <th
                          class="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        >
                         
                        </th>
                         <th
                          class="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        >
                        
                         
                        </th>
                      </tr>
                    </thead>
                    <tbody v-if="posts.data ? posts.data.length : 0">
                      
                      <tr class="border-b" v-for="(post, i) in posts.data" :key="i" >
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left flex items-center">
                          {{ post.title}}
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">{{ post.category}}</td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">{{ post.deleted_at }}</td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 delete" @click="restorePost(post.id, i)">Restore</td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 delete"
                        @click="deletePost(post.id, i)"
                        >
                        <i class="fa fa-trash mr-2 text-sm" aria-hidden="true"></i>
                        
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr >
                        <td colspan="5" class="text-center uppercase">
                          <b>No deleted posts</b> 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mt-4">
               <Component 
                  :is="link.url ? 'NuxtLink' : 'span'" 
                  v-for="(link, i) in posts.links"
                  :href="link.url"
                  to="/"
                  :key="i"
                  v-html="link.label"
                  class="px-1"
                  :class="link.url ? '' : 'text-blueGray-500'"
               />  
              </div>
            </div>
            
          </div>
          
          <Footer />
        </div>
    </div>
  </div>
</template>

<script>
import LeftBar from '@/components/Dashboard/LeftBar'
import TopBar from '@/components/Dashboard/TopBar'
import Footer from '@/components/Dashboard/Footer'

export default {
  name: 'BinPage',
  middleware: 'auth',
  components:{
    LeftBar,
    TopBar,
    Footer 
  },
  data: () => ({
    posts: []
  }),
  async fetch(){
    const response = await this.$axios.get('api/post/bin')
    this.posts = response.data
  },
  methods: {
    deletePost(id, index){
      this.$axios.delete('/api/post/forceDelete/' + id)
      .then(() => {
        if(id){
           this.posts.data.splice(index,1)
        }
      })
    },
    restorePost(id, index){
      this.$axios.put('/api/post/restore/' + id)
      .then(() => {
        if(id){
           this.posts.data.splice(index,1)
        }
      })
    }
  },
  head(){
    return{
      title: 'Deleted Posts'
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/all.min.css';
.delete{
  cursor: pointer;
}
</style>