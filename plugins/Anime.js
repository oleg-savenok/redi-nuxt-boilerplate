/* [plugins] Anime.js */

import anime from 'animejs';

export default (context, inject) => {
	context.$anime = anime;
	inject("anime", anime);
};
