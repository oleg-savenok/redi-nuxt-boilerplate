/* [store] Mouse */

export const state = () => ({
	isVisible: false,
	position: { x: 0, y: 0 },
	scale: 1,
	icon: '',
});

export const mutations = {
	setMousePosition(state, { x, y }) {
		state.position = { x, y };
	},
	setMouseScale(state, scale) {
		state.scale = scale;
	},
};

export const actions = {
	updateMousePosition({ commit }, e) {
		commit('setMousePosition', {
			x: e.clientX,
			y: e.clientY,
		});
	},
	changeMouseType({ commit }, type) {
		if (type === 'default') {
			commit('setMouseScale', 1);
		} else if (type === 'hover') {
			commit('setMouseScale', 3);
		}
	},
};
