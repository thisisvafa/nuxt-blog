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
                      Create New Category
                    </h6>
                  </div>
                </div>
                <PostError :errors="errors"></PostError>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form @submit.prevent="submitPost">
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
                            Name
                          </label>
                          <input
                            type="text"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            v-model="name"
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
                            Description
                          </label>
                          <editor 
                            api-key="0k0h7wkha4v0kqhmq83hhspkpj5ijabiacfscwrbeh2nkxf5"
                            v-model="description"
                            :init="{
                              height: 250,
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
                    <div class="rounded-t mb-0 px-6 py-6">
                      <div class="text-center flex justify-between">
                        <NuxtLink class="text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 font-bold bg-pink-500"
                          to="/categories"
                        >
                          Back
                        </NuxtLink>
                        <button
                          class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
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
import Editor from '@tinymce/tinymce-vue'

export default {
  middleware: 'auth',
  name: 'CategoryCreate',
  components:{
    LeftBar,
    TopBar,
    Footer,
    PostError,
    'editor': Editor
  },
  data:() =>({
    errors: [],
    name: '',
    description: ''
  }),
  methods: {
    async submitPost(){
      this.errors = []
      await this.$axios.$post('/api/category/store', {
        name: this.name,
        description: this.description
      }).then(()=> this.$router.push('/categories'))
      .catch(error => {
        if(error.response.status !== 422) throw error

        this.errors = Object.values(error.response.data.errors).flat()
      })
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  head(){
    return{
      title: 'Create Category'
    }
  },
}
</script>