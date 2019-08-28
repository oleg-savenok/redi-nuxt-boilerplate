/* [store] Theme */

export const state = () => ({
	theme: 'dark',
	colors: {
		black: '#101010',
		white: '#fafafa',
	},
	schema: {
		primary: '#101010',
		contrast: '#fafafa',
	},
});

export const mutations = {
	setTheme(state, value) {
		state.theme = value;
	},
	setSchemaColor(state, payload) {
		state.schema[payload.color] = payload.value;
	},
};

export const actions = {
	switchTheme({ commit, state }) {
		if (state.theme === 'dark') {
			commit('setTheme', 'light');
			commit('setSchemaColor', { color: 'primary', value: state.colors.white, });
			commit('setSchemaColor', { color: 'contrast', value: state.colors.black, });
		} else {
			commit('setTheme', 'dark');
			commit('setSchemaColor', { color: 'primary', value: state.colors.black, });
			commit('setSchemaColor', { color: 'contrast', value: state.colors.white, });
		}
	},
};
