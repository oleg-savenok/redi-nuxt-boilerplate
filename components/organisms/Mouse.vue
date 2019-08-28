<!-- [components|organisms] Mouse --- component -->

<template>
	<div ref="cursor" class="O-cursor">
		<div ref="circle" class="O-cursor__circle"></div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Mouse',
	computed: {
		...mapState({
			isVisible: state => state.mouse.isVisible,
			position: state => state.mouse.position,
			scale: state => state.mouse.scale,
			alpha: state => state.mouse.alpha,
			duration: state => state.mouse.duration,
		}),
	},
	watch: {
		position() {
			this.moving();
		},
		isVisible() {
			this.changeVisibility();
		},
		scale() {
			this.setScale();
		},
	},
	methods: {
		changeVisibility() {
			if (this.isVisible) {
				this.$tween.to(this.$refs.cursor, this.duration.show, {
					alpha: this.alpha,
					delay: this.duration.move
				});
			} else {
				this.$tween.to(this.$refs.cursor, this.duration.hide, {
					alpha: this.alpha,
				});
			}
		},
		moving() {
			this.$tween.to(this.$refs.cursor, this.duration.move, {
				x: this.position.x,
				y: this.position.y,
			});
		},
		setScale() {
			this.$tween.to(this.$refs.circle, this.duration.hover, {
				scaleX: this.scale,
				scaleY: this.scale,
			});
		},
	},
};
</script>

<style src="./Mouse.scss" lang="scss"></style>
