/* [plugins] Anime.js */

import { TweenMax, TimelineMax } from 'gsap';

export default (context, inject) => {
	context.$tween = TweenMax;
	inject("tween", TweenMax);
	context.$timeline = TimelineMax;
	inject("timeline", TimelineMax);
};
