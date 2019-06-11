<!-- [components|the] HeaderNav --- component -->

<template>
	<nav class="header__nav">
		<HeaderNavItem link="/" text="Home"/>
		<HeaderNavItem link="/about" text="About"/>
		<HeaderNavItem link="/contact" text="Contact"/>
	</nav>
</template>

<script>
	import HeaderNavItem from '~/components/the/Header/HeaderNavItem';
	
	export default {
		name: 'HeaderNav',
		components: {
			HeaderNavItem
		}
	}
</script>

<style src="./HeaderNav.scss" lang="scss" scoped></style>
