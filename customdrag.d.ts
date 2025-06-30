export interface CustomDragOptions {
	onstart?: (event: PointerEvent) => boolean;
	onmove?: (event: PointerEvent, deltaX: number, deltaY: number) => boolean;
	onend?: (event: PointerEvent) => boolean;
}

declare function customDrag(
	target: HTMLElement,
	options: CustomDragOptions
): () => void;

export default customDrag;
