<!-- [components|atom] Theme Switcher --- component -->

<template>
	<div @click="switchTheme" class="A-themeSwitcher _c">
		<i class="A-themeSwitcher__icon material-icons">brightness_medium</i>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	
export default {
	name: 'ThemeSwitcher',
	methods: {
		...mapActions({
			switchTheme: "theme/switchTheme",
		}),
	}
};
</script>

<style src="./ThemeSwitcher.scss" lang="scss"></style>
