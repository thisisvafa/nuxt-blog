<template>
  	<!-- header -->
	<header class="header-default">
		<nav class="navbar navbar-expand-lg">
			<div class="container-xl">
				<!-- site logo -->
				<a class="navbar-brand" href="index.html"><img src="images/logo.svg" alt="logo" /></a> 

				<div class="collapse navbar-collapse">
					<!-- menus -->
					<ul class="navbar-nav mr-auto">
						<li class="nav-item ">
							<NuxtLink class="nav-link" to="/">Home</NuxtLink>
						</li>
						<li class="nav-item" v-for="(cat, i) in category" :key="i.name">
							<NuxtLink class="nav-link" :to="'/category/' + cat.slug">{{ cat.name }}</NuxtLink>
						</li>
						<li class="nav-item" >
							<NuxtLink class="nav-link" to="/category/music">Music</NuxtLink>
						</li>
						<li class="nav-item" >
							<NuxtLink class="nav-link" to="/category/video">Video</NuxtLink>
						</li>
						<li class="nav-item" >
							<NuxtLink class="nav-link" to="/category/news">News</NuxtLink>
						</li>
						<template v-if="$auth.user">
							<li class="nav-item">
								<a class="nav-link" href="/dashboard">Admin</a>
							</li>
						</template>
					</ul>
				</div>

				<!-- header right section -->
				<div class="header-right">
					<!-- social icons -->
					<ul class="social-icons list-unstyled list-inline mb-0">
						<li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-medium"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
					</ul>
					<!-- header buttons -->
					<div class="header-buttons">
						<button class="search icon-button">
							<i class="icon-magnifier"></i>
						</button>
						<button class="burger-menu icon-button">
							<span class="burger-icon"></span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>
<script>
export default {
	name: 'Header',
	data: () => ({
    category:[],
	user: ''
  }),
	
}
</script>

<style scoped>
@import '~/assets/front/css/bootstrap.min.css';
@import '~/assets/front/css/all.min.css';
@import '~/assets/front/css/slick.css';
@import '~/assets/front/css/simple-line-icons.css';
@import '~/assets/front/css/style.css';
/* .navbar-nav li.active .nav-link[data-v-383d0eae] {
    color: #FFF;
    border-radius: 25px;
    background: #FE4F70;
    background: linear-gradient(to right, #FE4F70 0%, #FFA387 100%);
} */
a.nuxt-link-exact-active {
  	color: #FFF !important;
   	border-radius: 25px;
    /* background: #FE4F70; */
    background: linear-gradient(to right, #FE4F70 0%, #FFA387 100%);
}
</style>
