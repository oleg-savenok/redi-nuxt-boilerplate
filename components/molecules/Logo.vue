<!-- [components|the] HeaderLogo --- component -->

<template>
	<nuxt-link to="/" class="M-logo">
		<Signature />
		<div class="M-logo__divider"></div>
		<Breadcrumb />
	</nuxt-link>
</template>

<script>
	import Signature from '../atoms/Header/Signature';
	import Breadcrumb from '../atoms/Header/Breadcrumb';
	
	export default {
		name: 'Logo',
		components: {
			Signature,
			Breadcrumb
		},
		computed: {
			currentRouteName() {
				return this.$route.name;
			}
		}
	};
</script>

<style src="./Logo.scss" lang="scss" scoped></style>


