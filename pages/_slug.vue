<template>
  <div class="site-wrapper">
    <div class="main-overlay"></div>

    <Header />
    <section class="main-content mt-3">
      <div class="container-xl">
        <!-- <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Inspiration</a></li>
                <li class="breadcrumb-item active" aria-current="page">3 Easy Ways To Make Your iPhone Faster</li>
            </ol>
        </nav> -->

        <div class="row gy-4">
          <div class="col-lg-8">
            <!-- post single -->
            <div class="post post-single">
              <!-- post header -->
              <div class="post-header">
                <h1 class="title mt-0 mb-3">{{ post.title }}</h1>
                <ul class="meta list-inline mb-0">
                  <li class="list-inline-item text-capitalize">
                    <a href="#"
                      ><img
                        src="images/other/author-sm.png"
                        class="author"
                        alt="author"
                      />{{ post.username }}</a
                    >
                  </li>
                  <li class="list-inline-item">
                    <NuxtLink :to="'/category/' + post.category_slug">{{
                      post.category
                    }}</NuxtLink>
                  </li>
                  <li class="list-inline-item">{{ post.created_at }}</li>
                </ul>
              </div>
              <!-- featured image -->
              <div class="featured-image">
                <img v-if="post" :src="featuredImage" :alt="post.title" />
              </div>
              <!-- post content -->
              <div class="post-content clearfix" v-html="post.body"></div>
              <!-- post bottom section -->
              <div class="post-bottom">
                <div class="row d-flex align-items-center">
                  <div class="col-md-6 col-12 text-center text-md-start">
                    <!-- tags -->
                    <a href="#" class="tag">#Trending</a>
                    <a href="#" class="tag">#Video</a>
                    <a href="#" class="tag">#Featured</a>
                  </div>
                  <div class="col-md-6 col-12">
                    <!-- social icons -->
                    <ul
                      class="social-icons list-unstyled list-inline mb-0 float-md-end"
                    >
                      <li class="list-inline-item">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fab fa-pinterest"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fab fa-telegram-plane"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="far fa-envelope"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="spacer" data-height="50"></div>

            <AuthorCard :author="post" />

            <div class="spacer" data-height="50"></div>

            <!-- section header -->
            <div class="section-header">
              <h3 class="section-title">Comments (3)</h3>
              <img src="images/wave.svg" class="wave" alt="wave" />
            </div>
            <!-- post comments -->
            <div class="comments bordered padding-30 rounded">
              <ul class="comments">
                <!-- comment item -->
                <li class="comment rounded">
                  <div class="thumb">
                    <img src="images/other/comment-1.png" alt="John Doe" />
                  </div>
                  <div class="details">
                    <h4 class="name"><a href="#">John Doe</a></h4>
                    <span class="date">Jan 08, 2021 14:41 pm</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam vitae odio ut tortor fringilla cursus sed quis odio.
                    </p>
                    <a href="#" class="btn btn-default btn-sm">Reply</a>
                  </div>
                </li>
                <!-- comment item -->
                <li class="comment child rounded">
                  <div class="thumb">
                    <img src="images/other/comment-2.png" alt="John Doe" />
                  </div>
                  <div class="details">
                    <h4 class="name"><a href="#">Helen Doe</a></h4>
                    <span class="date">Jan 08, 2021 14:41 pm</span>
                    <p>
                      Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                      semper libero, sit amet adipiscing sem neque sed ipsum.
                    </p>
                    <a href="#" class="btn btn-default btn-sm">Reply</a>
                  </div>
                </li>
                <!-- comment item -->
                <li class="comment rounded">
                  <div class="thumb">
                    <img src="images/other/comment-3.png" alt="John Doe" />
                  </div>
                  <div class="details">
                    <h4 class="name"><a href="#">Anna Doe</a></h4>
                    <span class="date">Jan 08, 2021 14:41 pm</span>
                    <p>
                      Cras ultricies mi eu turpis hendrerit fringilla.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia.
                    </p>
                    <a href="#" class="btn btn-default btn-sm">Reply</a>
                  </div>
                </li>
              </ul>
            </div>

            <div class="spacer" data-height="50"></div>

            <!-- section header -->
            <div class="section-header">
              <h3 class="section-title">Leave Comment</h3>
              <img src="images/wave.svg" class="wave" alt="wave" />
            </div>
            <!-- comment form -->
            <div class="comment-form rounded bordered padding-30">
              <form id="comment-form" class="comment-form" method="post">
                <div class="messages"></div>

                <div class="row">
                  <div class="column col-md-12">
                    <!-- Comment textarea -->
                    <div class="form-group">
                      <textarea
                        name="InputComment"
                        id="InputComment"
                        class="form-control"
                        rows="4"
                        placeholder="Your comment here..."
                        required="required"
                      ></textarea>
                    </div>
                  </div>

                  <div class="column col-md-6">
                    <!-- Email input -->
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="InputEmail"
                        name="InputEmail"
                        placeholder="Email address"
                        required="required"
                      />
                    </div>
                  </div>

                  <div class="column col-md-6">
                    <!-- Name input -->
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="InputWeb"
                        id="InputWeb"
                        placeholder="Website"
                        required="required"
                      />
                    </div>
                  </div>

                  <div class="column col-md-12">
                    <!-- Email input -->
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="InputName"
                        name="InputName"
                        placeholder="Your name"
                        required="required"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Submit"
                  class="btn btn-default"
                >
                  Submit</button
                ><!-- Submit Button -->
              </form>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Front/Header'
import Sidebar from '@/components/Front/Sidebar'
import Footer from '@/components/Front/Footer'
import AuthorCard from '@/components/Front/AuthorCard'
export default {
  name: 'SiglePost',
  // props:['author'],
  components: {
    Header,
    Sidebar,
    Footer,
    AuthorCard,
  },
  data: () => ({
    post: [],
    // author:[],
  }),
  async fetch() {
    await this.$axios
      .get('/api/frontpage/' + this.$route.params.slug)
      .then(response => {
        this.post = response.data
        //  this.author = response.data
      })
      .catch(error => {
        ;({
          message: 'Error',
          statusCode: 404,
          status: 404,
          statusText: 'Not Found',
        })
      })
  },
  head() {
    return {
      title: this.post.title,
    }
  },
  computed: {
    // featuredImage() {
    //   return this.$config.myPublicVariable + 'storage/'
    //     ? this.$config.myPublicVariable + 'storage/' 
    //     : 'https://via.placeholder.com/1280x720'
    // },
    featuredImage(){
      if(this.post.featured_image){
        return this.$config.myPublicVariable + 'storage/' + this.post.featured_image
      }else{
        return 'https://via.placeholder.com/1280x720'
      }
    }
  },
}
</script>

<style scoped>
@import '~/static/front/css/bootstrap.min.css';
@import '~/static/front/css/all.min.css';
@import '~/static/front/css/slick.css';
@import '~/static/front/css/simple-line-icons.css';
@import '~/static/front/css/style.css';
.spacer {
  height: 50px;
}
.post-content p {
  text-align: justify;
}
</style>
