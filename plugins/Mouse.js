/* [plugins] Mouse */

export default ({store})=>{
	window.addEventListener("mousemove", (e) => {
		store.dispatch("mouse/updateMousePosition", e);
	});
	
	const cursorTargets = document.querySelectorAll('._c');
	
	Array.from(cursorTargets).forEach(item => {
		const type = getComputedStyle(item).getPropertyValue('--cursor');
		
		item.addEventListener('mouseover', () => {
			store.dispatch("mouse/changeMouseType", type.replace(/\s/g, ''));
		});
		
		item.addEventListener('mouseout', () => {
			store.dispatch("mouse/changeMouseType", 'default');
		});
	});
};
