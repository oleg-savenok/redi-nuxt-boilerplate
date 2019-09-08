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
	        this.$tween.to(el, 0.3, {
		        alpha: 0,
		        onComplete: () => {
			        done();
			        Events.dispatchEvent(TRANSITION_LEAVE_DONE);
		        }
	        });
        },
        beforeEnter() {
            Events.dispatchEvent(TRANSITION_ENTER);
        },
        enter(el, done) {
	        this.$tween.to(el, 0.4,{
		        alpha: 1,
		        onComplete: () => {
			        done();
			        Events.dispatchEvent(TRANSITION_ENTER_DONE);
		        }
	        });
        }
    }
};
