/* [plugins] Mouse */

export default ({ store }) => {
	
	// Move
	window.addEventListener('mousemove', (e) => {
		store.dispatch('mouse/changeMouseVisible', 'show');
		store.dispatch('mouse/updateMousePosition', e);
	});
	
	document.addEventListener('mouseleave', (e) => {
		store.dispatch('mouse/changeMouseVisible', 'hide');
	});

	const cursorTargets = document.querySelectorAll('._c');

	Array.from(cursorTargets).forEach((item) => {
		const type = getComputedStyle(item).getPropertyValue('--cursor');

		item.addEventListener('mouseover', () => {
			store.dispatch('mouse/changeMouseType', type.replace(/\s/g, ''));
		});

		item.addEventListener('mouseout', () => {
			store.dispatch('mouse/changeMouseType', 'default');
		});
	});
};
