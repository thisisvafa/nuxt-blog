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
                      All Posts
                    </h6>
                    <NuxtLink
                      to="/posts/create"
                      class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create New Post
                    </NuxtLink>
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
                          Username
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
                      <tr class="border-b" v-for="(post, i) in posts.data" :key="i">
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left flex items-center">
                          {{ post.title}}
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">{{ post.category}}</td>
                        <td class="up border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">{{ post.username}}</td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">{{ post.updated_at }}</td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"><NuxtLink :to="'/posts/edit/'+ post.id">Edit</NuxtLink></td>
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
                          <b>No posts</b> 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mt-4">
               <!-- <Component 
                  :is="link.url ? 'NuxtLink' : 'span'" 
                  v-for="(link, i) in posts.links"
                  :href="'localhost:3000?page='+link.page"
                  to="/"
                  :key="i"
                  v-html="link.label"
                  class="px-1"
                  :class="link.url ? '' : 'text-blueGray-500'"
               />  -->
               <!-- <button @click="fetch">Click</button> -->
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
  name: 'IndexPage',
  middleware: 'auth',
  components:{
    LeftBar,
    TopBar,
    Footer
  },
  data: () => ({
    posts: [],
    lastPage: 1,
    nextUrl: '',
    currentPage: 1
  }),
  async fetch(){
    let url = '/api/posts'
    if(this.nextUrl !== '' && this.nextUrl !== null){
      url = this.nextUrl
    }
    // const response = await this.$axios.get('/api/posts?page='+this.$route.query.page)
    const response = await this.$axios.get(url)
      if (this.posts.length > 0){
        this.posts = [...this.posts, ...response.data.data]
      }else{
        this.posts = response.data
      }
    this.nextUrl = response.data.next_page_url
    this.lastPage = response.data.lastPage
    this.currentPage = response.data.current_page
  },
  methods: {
    deletePost(id, index){
      this.$axios.delete('/api/post/delete/' + id)
      .then(() => {
        if(id){
           this.posts.data.splice(index,1)
        }
      })
      // .then(response => {
      //     if(response.status === 200){
      //       this.posts.data.splice(id, 1)
      //       // const index = this.posts.indexOf(post => post.id === id)
      //       // if(index !== -1){
      //       //   this.posts.splice(index, 1)
      //       // }
      //     }
      // })
    }
  },
  head(){
    return{
      title: 'All Posts'
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/all.min.css';
.delete{
  cursor: pointer;
}
.up{
  text-transform: capitalize;
}
</style>