/* [plugins] Smooth Scroll */

import Scroll from "~/assets/js/Scroll";

export default (context, inject) => {
	context.$scroll = Scroll;
	inject("scroll", Scroll);
};
