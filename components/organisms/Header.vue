<!-- [components|the] Header --- component -->

<template>
	<header class="O-header">
		<Logo />
		<Navigation />
	</header>
</template>

<script>
	// Components
	import Logo from '../molecules/Logo';
	import Navigation from '../molecules/Navigation';
	
	export default {
		name: 'Header',
		components: {
			Logo,
			Navigation
		}
	}
</script>

<style src="./Header.scss" lang="scss" scoped></style>
