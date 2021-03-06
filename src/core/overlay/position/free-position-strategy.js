/**
 * Free position strategy for overlay without origin
 * @author lingyi.zcs
 */
export class FreePositionStrategy {
    /**
     * Apply the position to the element. (NOTE: normally will triggered by scrolling)
     * \@docs-private
     *
     * @param {?} element Element to which to apply the CSS.
     * @return {?} Resolved when the styles have been applied.
     */
    apply(element) {
        if (!this._wrapper) {
            this._wrapper = document.createElement('div');
            this._wrapper.classList.add('cdk-free-overlay-wrapper');
            element.parentNode.insertBefore(this._wrapper, element);
            this._wrapper.appendChild(element);
            // // Initialized style once
            // const style = element.style;
            // style.position = this._cssPosition;
            // style.top = this._top;
            // style.left = this._left;
            // style.width = this._width;
            // style.height = this._height;
        }
        // TODO: do somethings while triggered (eg. by scrolling)
    }
    /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    dispose() {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    }
}
function FreePositionStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    FreePositionStrategy.prototype._wrapper;
}
