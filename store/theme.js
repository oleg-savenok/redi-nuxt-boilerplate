/* [store] Theme */

export const state = () => ({
	theme: 'light',
	colors: {
		black: '#101010',
		white: '#fafafa',
	},
	schema: {
		primary: '#fafafa',
		contrast: '#101010',
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
