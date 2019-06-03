<template>
	<div class="__page">
		<section class="container">
			<div>
				<HomeLogo />
				<h1 class="title">Nuxt.js Boilerplate by <a target="_blank" href="https://redi.agency">Redi agency</a>.</h1>
				<h2 class="subtitle">Start your new nuxt project in seconds</h2>
				<div class="links">
					<ButtonLink text="Vue.js" link="https://vuejs.org/" />
					<ButtonLink text="Nuxt.js" link="https://nuxtjs.org/" />
					<ButtonLink
						text="This project on GitHub"
						color="grey"
						link="https://github.com/oleg-savenok/redi-nuxt-boilerplate"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
// Base components
import ButtonLink from '~/components/base/button/ButtonLink';
// Page components
import HomeLogo from '~/components/page/home/HomeLogo';
// Mixins
import Head from '~/mixins/Head';

export default {
	components: {
		ButtonLink,
		HomeLogo,
	},
	mixins: [Head],
};
</script>

<style src="./index.scss" lang="scss"></style>
