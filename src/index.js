/**
 * Bind calss that will be publically available.
 */
class Bind {

    /**
     * Constructor for mapping properties to class instance.
     * @param {Object} initializer - Intial object user passes
     */
    constructor(initializer) {
        for (let property in initializer) {
            if (initializer.hasOwnProperty(property)) {
                this[property] = initializer[property];
            }
        }
        this._bind();
    }

    /**
     * Bind class to element.
     */
    _bind() {
        this.domNode = document.querySelector(this.el);
        this._bindData();
    }

    _bindData() {
        let s = this.domNode.innerHTML;
        console.log(s);
        let regExp = /\{\{((?:.|\n)+?)\}\}/g;
        let bindings = s.match(regExp);
    }
}

window.Bind = Bind;
