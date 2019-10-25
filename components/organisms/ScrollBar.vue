<!-- [components|organisms] ScrollBar --- component -->

<template>
	<div ref="scrollbar" class="O-scrollbar">
		<div ref="progress" class="O-scrollbar__progress" :style="{ height: `${progress*100}%` }"></div>
	</div>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        name: 'ScrollBar',
        computed: {
            ...mapState({
                progress: state => state.scroll.progress,
            })
        },
	    watch: {
            progress() {
                this.changeProgress();
            },
	    },
        methods: {
            changeProgress() {
                this.$tween.to(this.$refs.progress, 0.2, {
                    height: `${this.progress*100}%`
                });
            }
        },
    };
</script>

<style src="./ScrollBar.scss" lang="scss"></style>
