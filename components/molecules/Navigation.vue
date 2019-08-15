<!-- [components|the] HeaderNav --- component -->

<template>
	<nav class="M-navigation">
		<Item link="/about" text="about"/>
		<Item link="/contact" text="contact"/>
		<ThemeSwitcher />
	</nav>
</template>

<script>
	import Item from '../atoms/Header/NavigationItem';
	import ThemeSwitcher from '../atoms/Header/ThemeSwitcher';
	
	export default {
		name: 'Navigation',
		components: {
			Item,
			ThemeSwitcher
		}
	}
</script>

<style src="./Navigation.scss" lang="scss" scoped></style>
