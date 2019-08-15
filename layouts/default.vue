<!-- [layouts] Default --- component -->

<template>
	<div class="__app --dark">
		<Header />
		<div class="__page">
			<nuxt />
		</div>
	</div>
</template>

<script>
	import Header from '~/components/organisms/Header';
	
	export default {
		name: "Default",
		components: {
			Header
		}
	}
</script>
