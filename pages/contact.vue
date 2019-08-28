<!-- [pages] Contact --- component -->

<template>
	<div>
		<div class="_s">
			<div class="hero">
				<h2 class="title">Contact page</h2>
			</div>
			
			<div class="img"></div>
		</div>
	</div>
</template>

<script>
	// Vuex
	import { mapState, mapMutations } from "vuex";
	
	// Mixins
	import Head from '~/mixins/Head';
	import LifecycleHooks from '~/mixins/LifecycleHooks';
	import Transitions from '~/mixins/Transitions';
	
	// Event dispatcher
	import { Events, TRANSITION_ENTER_DONE } from "~/assets/js/Events";
	
	export default {
		name: 'Contact',
		mixins: [ Head, LifecycleHooks, Transitions ],
		computed: {
			...mapState({
				vertical: state=>state.scroll.verticalScroll
			})
		},
		methods: {
			...mapMutations({
				setScrollActive: "scroll/setActive",
				setScrollDirection: "scroll/setScrollDirection",
				setScrollTo: "scroll/updateScrollTo"
			}),
			
			// Enable scroll
			enableScroll() {
				this.setScrollDirection(this.vertical);
				this.setScrollActive(true);
			},
			
			/* MOUNTED -------------------------------------------------------------------------------------------------- */
			addListeners() {
				this.enterHandler = this.enableScroll.bind(this);
				Events.addEventListener(TRANSITION_ENTER_DONE, this.enterHandler);
			},
			
			/* BEFORE DESTROY ------------------------------------------------------------------------------------------- */
			removeListeners() {
				Events.removeEventListener(TRANSITION_ENTER_DONE, this.enterHandler);
			},
		},
	};
</script>

<style src="./contact.scss" lang="scss" scoped></style>
