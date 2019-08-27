<!-- [components|organisms] Mouse --- component -->

<template>
	<div ref="cursor" class="O-cursor" :style="{ mixBlendMode: this.mixMode }">
		<div ref="circle" class="O-cursor__circle"></div>
	</div>
</template>

<script>
import TweenLite from 'gsap';
import { mapState } from 'vuex';

export default {
	name: 'ActionCursor',
	computed: {
		...mapState({
			position: (state) => state.mouse.position,
			scale: (state) => state.mouse.scale,
			mixMode: (state) => state.mouse.mixMode,
		}),
	},
	watch: {
		position() {
			this.moving();
		},
		scale() {
			this.setScale();
		},
	},
	methods: {
		moving() {
			TweenLite.to(this.$refs.cursor, 0.05, {
				x: this.position.x,
				y: this.position.y,
			});
		},
		setScale() {
			TweenLite.to(this.$refs.circle, 0.2, {
				scaleX: this.scale,
				scaleY: this.scale,
			});
		},
	},
};
</script>

<style src="./Mouse.scss" lang="scss"></style>
