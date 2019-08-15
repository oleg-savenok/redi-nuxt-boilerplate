<!-- [layouts] Smooth scroll --- component -->

<template>
	<div>
		<Header />
		<div class="__page">
			<div class="__scroll">
				<div class="__scroll__content">
					<nuxt />
				</div>
			</div>
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
