//
// store/index.js

export const state = () => ({
    counter: 1
});

export const mutations = {
    increment(state) {
        state.counter++;
    },
    reset(state) {
        state.counter = 1;
    }
};

export const actions = {
    async nuxtServerInit({commit}, {route}) {
        //
        // Server Store init
    }
};
