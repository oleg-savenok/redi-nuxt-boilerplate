<!-- [components|atom] Theme Switcher --- component -->

<template>
	<div @click="themeHandle" class="A-themeSwitcher _c">
		<i class="A-themeSwitcher__icon material-icons">brightness_medium</i>
	</div>
</template>

<script>
export default {
	name: 'ThemeSwitcher',
	data: function() {
		return {
			isBlack: true,
		}
	},
	methods: {
		changeClass: function(selector, newClass, oldClass) {
			selector.add(newClass);
			selector.remove(oldClass);
		},
		themeHandle: function() {
			const themeSelector = document.getElementsByClassName("__app")[0].classList;
			
			if (!this.$data.isBlack) {
				this.changeClass(themeSelector, '--dark', '--light');
				this.$data.isBlack = true;
			} else {
				this.changeClass(themeSelector, '--light', '--dark');
				this.$data.isBlack = false;
			}
		}
	}
};
</script>

<style src="./ThemeSwitcher.scss" lang="scss"></style>
