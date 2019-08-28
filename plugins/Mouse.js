/* [plugins] Mouse */

export default ({ store }) => {
	
	window.addEventListener('mousemove', (e) => {
		// Show after first pixel moved
		store.dispatch('mouse/changeMouseVisible', 'show');
		// Update position while mouse moving
		store.dispatch('mouse/updateMousePosition', e);
	});
	
	document.addEventListener('mouseleave', (e) => {
		// Hide after mouse leave document
		store.dispatch('mouse/changeMouseVisible', 'hide');
	});

	
	// Add event listeners for change mouse type
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
