<!-- [layouts] Default --- component -->

<template>
	<div class="__app" :style="{ '--primary-color': this.schema.primary, '--contrast-color': this.schema.contrast }">
		<Header />
		<div ref="scroll" class="__scroll">
			<nuxt ref="page" />
		</div>
		<Mouse />
	</div>
</template>

<script>
	// Vuex
	import { mapState, mapMutations, mapActions } from "vuex";
	
	// Mixins
	import LifecycleHooks from '~/mixins/LifecycleHooks';
	
	// Components
	import Header from '~/components/organisms/Header';
	import Mouse from '~/components/organisms/Mouse';
	
	// Event dispatcher
	import { Events, TRANSITION_ENTER_DONE, TRANSITION_LEAVE_DONE } from "~/assets/js/Events";
	
	export default {
		name: 'Default',
		components: {
			Header,
			Mouse
		},
		mixins: [ LifecycleHooks ],
		computed: {
			...mapState({
				loaded: state=>state.loaded,
				schema: state => state.theme.schema,
				scrollPoint: state=>state.scroll.point,
				scrollActive: state=>state.scroll.active,
				scrollTo: state=>state.scroll.scrollTo,
				scrollProgress: state=>state.scroll.progress,
				verticalScroll: state=>state.scroll.vertical,
				updateScroll: state=>state.scroll.update,
			})
		},
		watch: {
			updateScroll() {
				this.scroll.resize();
			},
			scrollTo() {
				this.scrollTo > 0 && this.scroll.scrollTo(this.scrollTo, true);
				this.setScrollTo(-1);
			},
			verticalScroll() {
				if (this.verticalScroll) {
					this.scroll.vertical();
					this.$refs.scroll.classList.remove("horizontal");
				} else {
					this.scroll.horizontal();
					this.$refs.scroll.classList.add("horizontal");
				}
			},
			scrollActive() {
				this.scrollActive ? this.scroll.enableScroll() : this.scroll.disableScroll();
			},
		},
		methods: {
			...mapMutations({
				setScrollActive: "scroll/setActive",
				setScrollPoint: "scroll/setPoint",
				setScrollTo: "scroll/updateScrollTo",
				setDirection: "scroll/setDirection",
				setHeight: "scroll/setHeight",
				incrementCounter: "increment"
			}),
			
			update() {
				this.scroll.update();
			},
			
			disable() {
				this.scroll.scrollTo(0);
				this.setScrollActive(false);
			},
			
			/* MOUNTED -------------------------------------------------------------------------------------------------- */
			// Initial app
			init() {
				this.$nextTick(this.initScroll);
			},
			
			// Initial Smooth scroll
			initScroll() {
				this.scroll = new this.$scroll({
					section: this.$refs.scroll,
					native: false,
					skew: false,
					ease: 0
				});
				this.scroll.vs._emitter.on("scrolling", this.setScrollPoint);
				this.scroll.vs._emitter.on("direction", this.setDirection);
				this.scroll.vs._emitter.on("size", this.setHeight);
				this.scroll.init();
			},
			
			// Add listeners for update scroll after each page change
			addListeners() {
				this.enterHandler = this.update.bind(this);
				this.leaveHandler = this.disable.bind(this);
				Events.addEventListener(TRANSITION_ENTER_DONE, this.enterHandler);
				Events.addEventListener(TRANSITION_LEAVE_DONE, this.leaveHandler);
			},
			
			/* BEFORE DESTROY ------------------------------------------------------------------------------------------- */
			// Remove all listeners before leave this layout
			removeListeners() {
				Events.removeEventListener(TRANSITION_ENTER_DONE, this.enterHandler);
				Events.removeEventListener(TRANSITION_LEAVE_DONE, this.leaveHandler);
			},
		}
	};
</script>
