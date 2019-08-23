/* [mixins] Lifecycle methods */

export default {
	methods: {
		setInitValue() {},
		init() {},
		addListeners() {},
		removeListeners() {}
	},
	created() {
		this.setInitValue();
	},
	mounted() {
		this.init();
		this.addListeners();
	},
	beforeDestroy() {
		this.removeListeners();
	}
};
