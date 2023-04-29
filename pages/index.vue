<template>
  <!-- site wrapper -->
  <div class="site-wrapper">
    <div class="main-overlay"></div>

    <Header />

    <!-- section main content -->
    <section class="main-content">
      <div class="container-xl">
        <div class="row gy-4">
          <div class="col-lg-8">
            <!-- section header -->
            <div class="section-header">
              <h3 class="section-title text-uppercase">Latest Posts</h3>
            </div>

            <div class="padding-30 rounded bordered">
              <ContentPosts
                v-for="front in frontpage"
                :key="front.id"
                :front="front"
              />
              <!-- load more button -->
              <div class="text-center">
                <button v-if="nextPageUrl" @click="next" class="btn btn-simple">
                  Load More
                </button>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>

    <!-- instagram feed -->
    <div class="instagram">
      <div class="container-xl">
        <!-- button -->
        <a href="#" class="btn btn-default btn-instagram"
          >@Katen on Instagram</a
        >
        <!-- images -->
        <div class="instagram-feed d-flex flex-wrap">
          <div class="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-1.jpg" alt="insta-title" />
            </a>
          </div>
          <div class="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-2.jpg" alt="insta-title" />
            </a>
          </div>
          <div class="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-3.jpg" alt="insta-title" />
            </a>
          </div>
          <div class="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-4.jpg" alt="insta-title" />
            </a>
          </div>
          <div class="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-5.jpg" alt="insta-title" />
            </a>
          </div>
          <div class="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-6.jpg" alt="insta-title" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
  <!-- end site wrapper -->
</template>

<script>
import Header from '@/components/Front/Header'
import Sidebar from '@/components/Front/Sidebar'
import Footer from '@/components/Front/Footer'
import ContentPosts from '@/components/Front/ContentPosts'
export default {
  // middleware: 'auth',
  name: 'MainSite',
  components: {
    Header,
    Sidebar,
    Footer,
    ContentPosts,
  },
  data: () => ({
    frontpage: [],
    nextPageUrl: null,
  }),
  async fetch() {
    let url = '/api/frontpage'
    const response = await this.$axios.get(url)
    this.frontpage = [...this.frontpage, ...response.data.posts.data]
    this.nextPageUrl = response.data.posts.next_page_url
  },
  methods: {
    next() {
      fetch(this.nextPageUrl)
        .then(response => response.json())
        .then(data => {
          this.frontpage = [...this.frontpage, ...data.posts.data]
          this.nextPageUrl = data.posts.next_page_url
        })
    },
  },
  head() {
    return {
      title: 'Blog',
    }
  },
  computed: {
    featuredImage() {
      return this.$config.myPublicVariable + 'storage/'
    },
  },
}
</script>

<style scoped>
@import '~/assets/front/css/bootstrap.min.css';
@import '~/assets/front/css/all.min.css';
@import '~/assets/front/css/slick.css';
@import '~/assets/front/css/simple-line-icons.css';
@import '~/assets/front/css/style.css';

.spacer {
  height: 50px;
}

.section-header {
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border: solid 1px #ebebeb;
}

.section-title {
  text-align: center;
}

.author {
  border-radius: 9999px;
}
</style>
