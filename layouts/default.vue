<!-- [layouts] Default --- component -->

<template>
	<div>
		<Header />
		<div class="__page">
			<nuxt />
		</div>
	</div>
</template>

<script>
	import Header from '~/components/the/Header/Header';
	
	export default {
		name: "Default",
		components: {
			Header
		}
	}
</script>
