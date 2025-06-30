// import { vec2 } from "./2DVector.js";

/**@param {HTMLElement} target */
export function addCustomDrag(target, { onstart = (ev, delta) => true, onmove = (ev, delta) => true, onend = ev => true }) {
    let pos = new vec2(), delta = new vec2();
	let moveHandle = (ev) => {
		ev.preventDefault();
		delta.set(ev.clientX - pos.x, ev.clientY - pos.y);
        pos.set(ev.clientX, ev.clientY);
        onmove(ev, delta);
    }
    target.addEventListener("mousedown", (ev) => {
        pos.set(ev.clientX, ev.clientY);

        if (!onstart(ev)) return;
        document.addEventListener("pointermove", moveHandle);
        document.addEventListener("pointerup", (ev) => {
            onend(ev);
            document.removeEventListener("pointermove", moveHandle);
        }, { once: true, capture: true });

    })
}