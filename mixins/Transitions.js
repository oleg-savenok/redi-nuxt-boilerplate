/* [mixins] Router transitions */

import {
    Events,
    TRANSITION_ENTER,
    TRANSITION_ENTER_DONE,
    TRANSITION_LEAVE,
    TRANSITION_LEAVE_DONE
} from "~/assets/js/Events";

export default {
    transition: {
        css: false,
        mode: "out-in",
        appear: true,
        beforeLeave() {
            Events.dispatchEvent(TRANSITION_LEAVE);
        },
        leave(el, done) {
	        this.$anime({
		        targets: el,
		        opacity: [1, 0],
		        duration: 300,
		        easing: 'easeInOutCubic',
		        complete: function() {
			        done();
			        Events.dispatchEvent(TRANSITION_LEAVE_DONE);
		        }
	        });
        },
        beforeEnter() {
            Events.dispatchEvent(TRANSITION_ENTER);
        },
        enter(el, done) {
	        this.$anime({
		        targets: el,
		        opacity: [0, 1],
		        duration: 400,
		        easing: 'easeInOutCubic',
		        complete: function() {
			        done();
			        Events.dispatchEvent(TRANSITION_ENTER_DONE);
		        }
	        });
        }
    }
};
