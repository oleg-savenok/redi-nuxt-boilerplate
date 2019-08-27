/* [store] Mouse */

export const state = () => ({
	isVisible: false,
	position: { x: 0, y: 0 },
	alpha: 0,
	scale: 1,
	icon: '',
	duration: {
		move: 0.1,
		hover: 0.2,
		show: 0.1,
		hide: 0.1,
	},
});

export const mutations = {
	setMousePosition(state, { x, y }) {
		state.position = { x, y };
	},
	setMouseScale(state, scale) {
		state.scale = scale;
	},
	setMouseAlpha(state, alpha) {
		state.alpha = alpha;
	},
	setMouseVisible(state, mode) {
		state.isVisible = mode;
	}
};

export const actions = {
	updateMousePosition({ commit }, e) {
		commit('setMousePosition', {
			x: e.clientX,
			y: e.clientY,
		});
	},
	changeMouseVisible({ commit }, type) {
		if (type === 'show') {
			commit('setMouseAlpha', 1);
			commit('setMouseVisible', true);
		} else if (type === 'hide') {
			commit('setMouseAlpha', 0);
			commit('setMouseVisible', false);
		}
	},
	changeMouseType({ commit }, type) {
		if (type === 'default') {
			commit('setMouseScale', 1);
		} else if (type === 'hover') {
			commit('setMouseScale', 3);
		}
	},
};
