<!-- [components|atom] Breadcrumb --- component -->

<template>
	<div class="A-breadcrumb">
		<div ref="animation" class="A-breadcrumb__animation">
			<div class="A-breadcrumb__current">{{ this.$data.currentRouteName }}</div>
			<div class="A-breadcrumb__next">{{ nextRoute }}</div>
		</div>
	</div>
</template>

<script>
	import anime from 'animejs';
	
	export default {
		name: 'Breadcrumb',
		data: function() {
			return {
				currentRouteName: this.$route.name,
				nextRouteName: this.$route.name,
				firstRender: true,
			}
		},
		methods: {
			currentRoute: function(nextRoute) {
				// Animate
				if (process.browser && !this.$data.firstRender) {
					anime({
						targets: this.$refs.animation,
						duration: 300,
						delay: 50,
						easing: 'easeOutQuint',
						translateY: '-50%',
						complete: (animation) => {
							this.$data.currentRouteName = nextRoute; // Change current route name
							animation.seek(0); // Set animation to start
						}
					});
				}
				
				// Set firstRender indicator to false
				this.$data.firstRender = false;
			}
		},
		computed: {
			nextRoute: function() {
				this.currentRoute(this.$route.name);
				return this.$route.name;
			},
		},
	};
</script>

<style src="./Breadcrumb.scss" lang="scss"></style>


