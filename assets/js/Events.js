/* [assets|js] Event Dispatcher */

import EventDispatcher from "~/assets/js/EventDispatcher";

export const TRANSITION_ENTER = "transition_enter";
export const TRANSITION_ENTER_DONE = "transition_enter_done";
export const TRANSITION_LEAVE = "transition_leave";
export const TRANSITION_LEAVE_DONE = "transition_leave_done";

class DefaultEvents extends EventDispatcher {
    constructor() {
        super();
    }
}

const _Events = new DefaultEvents();
export const Events = _Events;
