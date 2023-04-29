<template>
  <div class="about-author padding-30 rounded">
    <div class="thumb author">
      <img v-if="author" :src="profileImage" :alt="author.username" />
    </div>
    <div class="details">
      <h4 class="name text-capitalize"><a href="#">{{ author.username }}</a></h4>
      <div v-html="author.description"></div>
      <!-- social icons -->
      <ul class="social-icons list-unstyled list-inline mb-0">
        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
        <li class="list-inline-item"><a href="#"><i class="fab fa-medium"></i></a></li>
        <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['author'],
  computed: {
    // profileImage(){
    //   return this.$config.myPublicVariable + 'storage/img/profile/' + this.author.profile_image
    // },
    profileImage(){
      if(this.author.profile_image){
        return this.$config.myPublicVariable + 'storage/img/profile/' + this.author.profile_image
      }else{
        // return 'https://via.placeholder.com/1280x720'
      }
    }

  }
}
</script>

<style scoped>
.author{
  border-radius: 9999px;
}
.about-author .thumb{
  margin-top:-15px !important;
}
</style>