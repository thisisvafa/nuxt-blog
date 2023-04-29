<template>
  <div class="site-wrapper">
    <div class="main-overlay"></div>

    <Header />
    <section class="main-content">
      <div class="container-xl">

			<div class="row gy-4">

				<div class="col-lg-8">

          <div class="row gy-4">
              <div class="col-sm-6" v-for="(post, i) in posts.data" :key="i">
                  <!-- post -->
                  <div class="post post-grid rounded bordered">
                      <div class="thumb top-rounded">
                          <a href="category.html" class="category-badge position-absolute">{{singleCat.name}}</a>
                          <!-- <span class="post-format">
                              <i class="icon-picture"></i>
                          </span> -->
                          <NuxtLink :to="'../'+ post.slug">
                              <div class="inner">
                                  <img :src='featuredImage+ post.featured_image' :alt="post.title" />
                              </div>
                          </NuxtLink>
                      </div>
                      <div class="details">
                          <ul class="meta list-inline mb-0">
                              <li class="list-inline-item text-capitalize"><a href="#"><img src="images/other/author-sm.png" class="author" alt="author"/>{{ post.username }}</a></li>
                              <li class="list-inline-item">{{ post.created_at }}</li>
                          </ul>
                          <h5 class="post-title mb-3 mt-3"><NuxtLink :to="'../' + post.slug">{{ post.title }}</NuxtLink></h5>
                          <p class="excerpt mb-0">{{ post.excerpt }}</p>
                      </div>
                      <div class="post-bottom clearfix d-flex align-items-center">
                          <div class="social-share me-auto">
                              <button class="toggle-button icon-share"></button>
                              <ul class="icons list-unstyled list-inline mb-0">
                                  <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                  <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                  <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                  <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                  <li class="list-inline-item"><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
                                  <li class="list-inline-item"><a href="#"><i class="far fa-envelope"></i></a></li>
                              </ul>
                          </div>
                          <div class="more-button float-end">
                              <a href="blog-single.html"><span class="icon-options"></span></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

					<nav>
						<ul class="pagination justify-content-center">
							<li class="page-item active" aria-current="page">
								<span class="page-link">1</span>
							</li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
						</ul>
					</nav>

				</div>
			

					<Sidebar />


			</div>

		</div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Front/Header'
import Sidebar from '@/components/Front/Sidebar'
import Footer from '@/components/Front/Footer'
import AuthorCard from '@/components/Front/AuthorCard'
export default {
  components:{
    Header,
    Sidebar,
    Footer,
    AuthorCard,
  },
  data: () => ({
    posts:[],
    categories: {},
    singleCat: {}
  }),
  async fetch(){
      const response = await this.$axios.get('/api/frontpage/category/'+this.$route.params.slug)
        this.posts = response.data.posts
        this.categories = response.data.cat
        this.singleCat = response.data.category
  },
  head(){
      return{
          title: this.singleCat.name
      }
  },
  computed: {
	featuredImage(){
	  return this.$config.myPublicVariable + 'storage/'
	},
    mainURL(){
      return this.$config.myLink
    },
  }
}
</script>

<style>
@import '~/static/front/css/bootstrap.min.css';
@import '~/static/front/css/all.min.css';
@import '~/static/front/css/slick.css';
@import '~/static/front/css/simple-line-icons.css';
@import '~/static/front/css/style.css';
 .spacer{
  height: 50px;
} 
</style>