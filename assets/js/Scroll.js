/* [assets|js] Smooth Scroll */

import vs from "virtual-scroll";
import event from "dom-events";
import {detect} from "detect-browser";

export default class Scroll {
    constructor(opt = {}) {
        this.createBound();
        this.options = opt;
        this.rAF = undefined;
        this.isRAFCanceled = false;
        this.disabled = true;

        this.browser = detect();

        this.vars = {
            vertical: true,
            ease: this.options.ease || 0.075,
            current: 0,
            currentOffset: 0,
            target: 0,
            normalize: this.getNormalized(),
            height: window.innerHeight,
            width: window.innerWidth,
            bounding: 0,
            ticking: false,
            offset: 0,
            scrollPosition: 0,
            scrollOffsetPosition: 0,
            prevPosition: 0,
            prevOffsetPosition: 0,
            direction: 1,
            skew: this.options.skew || false,
            decimals: 3,
            size: {w: 0, h: 0}
        };

        this.vs = new vs({
            limitInertia: this.options.vs && this.options.vs.limitInertia || false,
            mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
            touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
            firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
            preventTouch: this.browser.os != "Android OS"
        });

        this.dom = {
            section: this.options.section,
            children: []
        };
    }

    init() {
        this.addEvents();
        this.resize();
    }

    run() {
        this.requestAnimationFrame();

        if (this.disabled) {
            this.vars.target = this.vars.current;
            return;
        }

        const target = Math.max(0, this.vars.target - this.vars.offset);
        const targetOffset = this.vars.target;

        this.vars.current += (target - this.vars.current) * this.vars.ease;
        this.vars.current < 0.1 && (this.vars.current = 0);
        this.vars.currentOffset += (targetOffset - this.vars.currentOffset) * this.vars.ease;
        this.vars.currentOffset < 0.1 && (this.vars.currentOffset = 0);

        this.vars.elasticity = (target - this.vars.current) || 0;
        this.vars.elasticityOffset = (targetOffset - this.vars.currentOffset) || 0;

        this.vars.scrollPosition = this.vars.current;
        this.vars.scrollOffsetPosition = this.vars.currentOffset;

        if (this.isNotScrolling()) return;
        else if (this.vars.scrollOffsetPosition > this.vars.prevOffsetPosition) this.vars.direction = 1;
        else this.vars.direction = -1;

        this.vs._emitter.emit("direction", this.vars.direction);
        this.vs._emitter.emit("scrolling", parseFloat((this.vars.scrollPosition).toFixed(this.vars.decimals)));
        this.vs._emitter.emit("scrollingOffset", parseFloat((this.vars.scrollOffsetPosition).toFixed(this.vars.decimals)));
        this.vs._emitter.emit("elasticity", this.vars.elasticity);

        const _current = -this.vars.scrollPosition;
        const _currentOffset = -this.vars.scrollOffsetPosition;

        for (const child of this.dom.children) {
            if (child.inView) {
                child.el.dataset.visible = true;
                const point = child.offset ? _currentOffset : _current;
                const transform = child.transform ? this.getTransformOf(child) : 0;
                const target = (point + (point * child.parallax / 100) - transform);
                const cy = this.isVerticalScroll(child) ? target : 0;
                const cx = this.isHorizontalScroll(child) ? target : 0;
                const maxSkew = 7.5;
                const skew = !this.vars.skew ? 0 : this.isVerticalScroll(child) && !child.el.dataset.blockSkew ? Math.max(-maxSkew, Math.min(maxSkew, (child.offset ? this.vars.elasticityOffset : this.vars.elasticity) * 0.02 * (child.el.dataset.maxSkew || 1))) : 0;
                if (child.isImg) {
                    child.dataset.s = -Math.ceil(this.vars.vertical ? cy : cx);
                    child.dataset.t = transform;
                }
                for (const img of child.imgs) {
                    img.dataset.s = -Math.ceil(this.vars.vertical ? cy : cx);
                    img.dataset.t = transform;
                }
                child.el.style.transform = `translate3d(${cx}px,${cy}px,0) skew(${skew}deg, ${skew}deg)`;
            } else {
                child.el.dataset.visible = false;
            }
            child.inView = this.childInView(child);
        }
        this.vars.prevPosition = this.vars.scrollPosition;
        this.vars.prevOffsetPosition = this.vars.scrollOffsetPosition;
    }

    isNotScrolling() {
        return (this.vars.scrollPosition).toFixed(this.vars.decimals) === (this.vars.prevPosition).toFixed(this.vars.decimals) && (this.vars.prevOffsetPosition).toFixed(this.vars.decimals) === (this.vars.scrollOffsetPosition).toFixed(this.vars.decimals);
    }

    isVerticalScroll(child) {
        return (this.vars.vertical && !child.opposite) || (!this.vars.vertical && child.opposite);
    }

    isHorizontalScroll(child) {
        return (!this.vars.vertical && !child.opposite) || (this.vars.vertical && child.opposite);
    }

    calc(e) {
        const delta = (this.vars.vertical || this.isDesktop()) ? e.deltaY : e.deltaX;
        this.vars.target += delta * -1 * this.vars.normalize;
        this.clampTarget();
    }

    scrollTo(val, anim = false) {
        if (!anim) {
            this.vars.current = val;
            this.vars.currentOffset = val;
            this.vs._emitter.emit("scrolling", val);
            this.vs._emitter.emit("scrollingOffset", val);
        }
        this.vars.target = val;
        this.vars.targetOffset = val;
    }

    clampTarget() {
        this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding + this.vars.offset)));
    }

    childInView(child) {
        const initPos = Math.ceil(this.vars.vertical || child.opposite ? child.bounding.top : child.bounding.left);
        const lastPos = Math.ceil(this.vars.vertical || child.opposite ? initPos + child.bounding.height : initPos + child.bounding.width) + (child.transform * child.bounding.height);
        const windowSize = this.vars.vertical || child.opposite ? this.vars.height : this.vars.width;
        const scrollPoint = child.offset ? this.vars.scrollOffsetPosition : this.vars.scrollPosition;
        return scrollPoint + windowSize + 100 > initPos && scrollPoint - 100 < lastPos;
    }

    getTransformOf(child) {
        const c = child.el ? child.el : child;
        const bounding = child.el ? child.bounding : c.getBoundingClientRect();
        const transform = c.dataset.transform * bounding.height;
        const scrollPos = this.vars.scrollPosition;
        const windowPos = (this.vars.vertical || child.opposite ? this.vars.height : this.vars.width);
        const initPos = Math.ceil(this.vars.vertical || child.opposite ? bounding.top : bounding.left);
        const lastPos = Math.ceil(this.vars.vertical || child.opposite ? initPos + bounding.height : initPos + bounding.width) + (child.transform * bounding.height);
        const scrollDist = lastPos - initPos;
        const startingPos = (windowPos - initPos) / scrollDist;
        const p = Math.min(1, ((scrollPos + windowPos - initPos) / scrollDist) - startingPos);
        return Math.ceil(transform * (1 - p));
    }

    horizontal() {
        this.vars.vertical = false;
        this.vs._emitter.emit("vertical", this.vars.vertical);
        this.resize();
    }

    vertical() {
        this.vars.vertical = true;
        this.vs._emitter.emit("vertical", this.vars.vertical);
        this.resize();
    }

    getChildren() {
        this.dom.children = [];
        const children = this.dom.section.querySelectorAll(".--scroll");
        for (const child of children) {
            const isImg = child.tagName === "IMG";
            const imgs = Array.from(child.querySelectorAll("img"));
            if (!this.vars.vertical && child.tagName === "FOOTER") return;
            this.dom.children.push({
                el: child,
                isImg,
                bounding: child.getBoundingClientRect(),
                parallax: child.dataset.parallax || 0,
                transform: child.dataset.transform || false,
                opposite: child.dataset.opposite || false,
                offset: child.dataset.offset || false,
                imgs,
                inView: false
            });
        }
    }

    updateChildrenPos() {
        for (const child of this.dom.children) {
            child.el.style.transform = "translate3d(0px,0px,0)";
            for (const img of child.imgs) img.dataset.s = 0;
            if (child.isImg) child.dataset.s = 0;
            child.parallax = child.el.dataset.parallax || 0;
            child.transform = child.el.dataset.transform || false;
            child.bounding = child.el.getBoundingClientRect();
            child.inView = this.childInView(child);
            if (child.transform) {
                const cx = this.vars.vertical || child.opposite ? 0 : -this.getTransformOf(child);
                const cy = this.vars.vertical || child.opposite ? -this.getTransformOf(child) : 0;
                if (child.isImg) child.dataset.s = -Math.ceil(this.vars.vertical || child.opposite ? cy : cx);
                for (const img of child.imgs) {
                    img.dataset.s = img.dataset.t = -Math.ceil(this.vars.vertical || child.opposite ? cy : cx);
                }
                child.el.style.transform = `translate3d(${cx}px,${cy}px,0)`;
            }
        }
    }

    update() {
        this.resize();
    }

    enableScroll() {
        this.disabled = false;
        this.getChildren();
        this.resize();
    }

    disableScroll() {
        this.disabled = true;
    }

    setOffset(num) {
        this.vars.offset = num;
    }

    on(requestAnimationFrame = true) {
        if (this.isRAFCanceled) {
            this.isRAFCanceled = false;
        }
        this.vs && this.vs.on(this.calc);
        requestAnimationFrame && this.requestAnimationFrame();
    }

    off(cancelAnimationFrame = true) {
        this.vs && this.vs.off(this.calc);
        cancelAnimationFrame && this.cancelAnimationFrame();
    }

    getNormalized() {
        switch (this.browser.name) {
        case "chrome":
            if (this.browser.os == "Android OS") return 1;
            return 0.5;
        case "safari":
            return 0.75;
        case "ios":
            return 2.25;
        default:
            return 1;
        }
    }

    requestAnimationFrame() {
        this.rAF = requestAnimationFrame(this.run);
    }

    cancelAnimationFrame() {
        this.isRAFCanceled = true;
        cancelAnimationFrame(this.rAF);
    }

    resize(e) {
        this.vars.height = window.innerHeight;
        this.vars.width = window.innerWidth;
        !this.vars.native && this.clampTarget();
        e && e.type == "resize" && this.scrollTo(0);
        this.updateChildrenPos();
        const bounding = this.dom.section.getBoundingClientRect();
        this.vars.bounding = this.vars.vertical ? bounding.height - this.vars.height : bounding.width - this.vars.width;
        this.vars.size = {
            w: Math.floor(bounding.width + this.vars.offset),
            h: Math.floor(bounding.height + this.vars.offset),
            screenW: this.vars.width,
            screenH: this.vars.height
        };
        this.vs._emitter.emit("size", this.vars.size);
    }

    createBound() {
        ["run", "calc", "resize", "scrollTo"]
            .forEach(fn=>this[fn] = this[fn].bind(this));
    }

    addEvents() {
        this.on();
        event.on(window, "resize", this.resize);
    }

    removeEvents() {
        this.off();
        event.off(window, "resize", this.resize);
    }

    isDesktop() {
        return !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test((navigator.userAgent || navigator.vendor || window.opera)) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)));
    }

    destroy() {
        this.vars.current = 0;
        this.vs && (this.vs.destroy(), this.vs = null);
        this.removeEvents();
    }
}
