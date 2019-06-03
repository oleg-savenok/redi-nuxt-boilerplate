<template>
	<section class="container">
		<div>
			<logo />
			<h1 class="title">Nuxt.js Boilerplate by <a target="_blank" href="https://redi.agency">Redi agency</a>.</h1>
			<h2 class="subtitle">Start your further nuxt project in seconds</h2>
			<div class="links">
				<a href="https://vuejs.org/" target="_blank" class="button--green">Vue.js</a>
				<a href="https://nuxtjs.org/" target="_blank" class="button--green">Nuxt.js</a>
				<a href="https://github.com/oleg-savenok/nuxt-boilerplate" target="_blank" class="button--grey last">
					This project on GitHub
				</a>
			</div>
		</div>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Head from '~/mixins/Head';

export default {
	components: {
		Logo,
	},
	mixins: [Head],
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
		Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 60px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 36px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
