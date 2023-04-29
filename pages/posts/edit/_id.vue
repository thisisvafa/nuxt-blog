<template>
  <div>
    <LeftBar />
    <div class="relative md:ml-64 bg-blueGray-50">
      <TopBar />
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
              >
                <div class="rounded-t bg-white mb-0 px-6 py-6">
                  <div class="text-center flex justify-between">
                    <h6 class="text-blueGray-700 text-xl font-bold">
                      Update Post: {{ title }}
                    </h6>
                  </div>
                </div>
                <PostError :errors="errors"></PostError>
                <!-- <SlugError :slugerrors="slugerrors"></SlugError>
                <div v-if="slugerrors" class="flex-auto px-4 lg:px-10 py-10 pt-0"> -->
                  <form @submit.prevent="updatePost">
                    <h6
                      class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                    >
                    </h6>
                    <div class="flex flex-wrap mb-5">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            v-model="title"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- <div class="flex flex-wrap mb-5">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                          <div class="mt-2">
                            <span class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Categories</span>
                            <div v-if="categories ? categories.length : 0">
                              <div v-for="(category, i) in categories" :key="i">
                                <label class="inline-flex items-center">
                                  <input type="checkbox" class="form-checkbox" v-model="category.id" 
                                    :value="category.id"
                                  >
                                  <span class="ml-2" v-html="category.name"></span>
                                </label>
                              </div>
                            </div>
                            <div v-else>
                              <div v-for="(mainCategory, i) in mainCategories" :key="i">
                                <label class="inline-flex items-center">
                                  <input type="checkbox" class="form-checkbox" v-model="catSelected" 
                                    :value="mainCategory.id"
                                  >
                                  <span class="ml-2" v-html="mainCategory.name"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    <div class="flex flex-wrap mb-5">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Body
                          </label>
                          <editor
                            api-key="0k0h7wkha4v0kqhmq83hhspkpj5ijabiacfscwrbeh2nkxf5"
                            v-model="body"
                            :init="{
                              height: 500,
                              menubar: true,
                              plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                              ],
                              toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                            }"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Excerpt
                          </label>
                          <textarea
                            v-model="excerpt"
                            type="text"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            rows="4"
                          >
                              </textarea
                          >
                        </div>
                      </div>
                    </div>
                    <div class="rounded-t mb-0 px-6 py-6">
                      <div class="text-center flex justify-between">
                        <NuxtLink class="text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 font-bold bg-pink-500"
                          to="/posts"
                        >
                          Back
                        </NuxtLink>
                        <button
                          class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                <!-- </div>
                <div v-else></div> -->
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
import PostError from '@/components/PostError'
import SlugError from '@/components/SlugError'
import Editor from '@tinymce/tinymce-vue'

export default {
  middleware: 'auth',
  name: 'PostEdit',
  components:{
    LeftBar,
    TopBar,
    Footer,
    PostError,
    SlugError,
    'editor': Editor
  },
  data:() =>({
    errors: [],
    // slugerrors: [],
    title: '',
    body: '',
    excerpt: '',
    categories: [],
    mainCategories: [],
    catSelected: [],
  }),
  async fetch(){
    await this.$axios.get('/api/post/'+this.$route.params.id)
    .then(response => {
      this.title = response.data.post.title
      this.body = response.data.post.body
      this.excerpt = response.data.post.excerpt
      this.categories = response.data.categories
      this.mainCategories = response.data.mainCategories
    })
    .catch(error => {
      if(error.response.status == 403){
        this.$router.push('/posts') 
      }
      // this.slugerrors = error.response.data.message
      // console.log(this.slugerrors)
    })
  },
  methods: {
    async updatePost(){
      this.errors = []
      await this.$axios.put('/api/post/update/'+this.$route.params.id , {
        title: this.title,
        body: this.body,
        excerpt: this.excerpt,
        categories: this.categories.id,
        mainCategories: this.catSelected
      }).then(()=> this.$router.push('/posts'))
      .catch(error => {
        if(error.response.status !== 422) throw error
        if(error.response.status == 403) {
          this.$router.push('/posts')
        }

        this.errors = Object.values(error.response.data.errors).flat()
        // this.slugerrors = error.response.data.message
      })

    },
    async updateCategories(){
        console.log(this.categories)
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  head(){
    return{
      title: 'Update Post - ' + this.title
    }
  },
}
</script>