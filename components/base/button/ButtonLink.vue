<!-- [components|base] ButtonLink --- component -->

<template>
	<a :href="link" target="_blank" :class="['base--button-link', `button-link--${color}`]">{{ text }}</a>
</template>

<script>
export default {
	name: 'ButtonLink',
	props: {
		link: {
			type: String,
			default: 'https://redi.agency/',
		},
		text: {
			type: String,
			default: 'Please, set text for this button'
		},
		color: {
			type: String,
			default: 'green',
		},
	},
};
</script>

<style src="./ButtonLink.scss" lang="scss" scoped></style>
