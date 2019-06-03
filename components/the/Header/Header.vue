<!-- [The] Header --- component -->

<template>
	<header class="the--header">
		<HeaderLogo />
		<HeaderNav />
	</header>
</template>

<script>
	// Components
	import HeaderLogo from '~/components/the/Header/HeaderLogo';
	import HeaderNav from '~/components/the/Header/HeaderNav';
	
	export default {
		name: 'Header',
		components: {
			HeaderLogo,
			HeaderNav
		}
	}
</script>

<style src="./Header.scss" lang="scss" scoped></style>
