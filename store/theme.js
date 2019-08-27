/* [store] Theme */

export const state = () => ({
	isDark: true,
	isLight: false,
});

export const mutations = {
	updateThemeDark(state, mode) {
		state.isDark = mode;
	},
	updateThemeLight(state, mode) {
		state.isLight = mode;
	},
};

export const actions = {
	toggleTheme({ commit, state }) {
		if (state.isDark) {
			commit('updateThemeLight', true);
			commit('updateThemeDark', false);
		} else {
			commit('updateThemeDark', true);
			commit('updateThemeLight', false);
		}
	},
};
