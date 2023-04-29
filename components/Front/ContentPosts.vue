<template>
  <div class="row">
    <div class="col-md-12 col-sm-6">
      <!-- post -->
      <div class="post post-list clearfix">
        <div class="thumb rounded">
          <!-- <span class="post-format-sm">
											<i class="icon-picture"></i>
										</span> -->
          <NuxtLink :to="'' + front.slug">
            <div class="inner">
              <img
                :src="featuredImage + front.featured_image"
                :alt="front.title"
              />
            </div>
          </NuxtLink>
        </div>
        <div class="details">
          <ul class="meta list-inline mb-3">
            <li class="list-inline-item text-capitalize">
              <a href="#">{{ front.username }}</a>
            </li>
            <li class="list-inline-item">
              <NuxtLink :to="'/category/' + front.category_slug">{{
                front.category
              }}</NuxtLink>
            </li>
            <li class="list-inline-item">{{ front.created_at }}</li>
          </ul>
          <h5 class="post-title">
            <NuxtLink :to="'' + front.slug">{{ front.title }}</NuxtLink>
          </h5>
          <p class="excerpt mb-0">{{ front.excerpt }}</p>
          <div class="post-bottom clearfix d-flex align-items-center">
            <div class="social-share me-auto">
              <button class="toggle-button icon-share"></button>
              <ul class="icons list-unstyled list-inline mb-0">
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
            <div class="more-button float-end">
              <a href="blog-single.html"><span class="icon-options"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['front'],
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