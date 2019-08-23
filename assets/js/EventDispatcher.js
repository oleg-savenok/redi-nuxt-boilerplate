/* [assets|js] Event Dispatcher */

export default class EventDispatcher {
    addEventListener(type, listener) {
        if (this._listeners === undefined) this._listeners = {};

        const listeners = this._listeners;

        if (listeners[type] === undefined) {
            listeners[type] = [];
        }

        if (listeners[type].indexOf(listener) === -1) {
            listeners[type].push(listener);
        }
    }

    hasEventListener(type, listener) {
        if (this._listeners === undefined) return false;

        const listeners = this._listeners;

        return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;
    }

    removeEventListener(type, listener) {
        if (this._listeners === undefined) return;

        const listeners = this._listeners;
        const listenerArray = listeners[type];

        if (listenerArray !== undefined) {
            const index = listenerArray.indexOf(listener);

            if (index !== -1) {
                listenerArray.splice(index, 1);
            }
        }
    }

    dispatchEvent(event, data) {
        const params = data ? data.params : null;
        const target = data ? data.target : null;

        if (this._listeners === undefined) return;

        const listeners = this._listeners;
        const listenerArray = listeners[event];

        if (listenerArray !== undefined) {
            const array = listenerArray.slice(0);

            for (let i = 0, l = array.length; i < l; i++) {
                array[i].call(this, {event, params, target});
            }
        }
    }
}
