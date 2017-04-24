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
        this._domNode = document.querySelector(this.el);
        this._bindData();
    }

    /**
     * Get our bindings in our node element
     */
    _bindData() {
        this._initialHTML = this._domNode.innerHTML;
        let regExp = /\{\{((?:.|\n)+?)\}\}/g;
        this._bindings = this._initialHTML.match(regExp);
        this._parseBindings();
    }

    _parseBindings() {
        let newHTML = this._initialHTML;
        for(let i = 0; i < this._bindings.length; i++) {
            let binding = this._bindings[i];
            let expression = binding.substring(2, binding.length-2);
            let result = this._parseExpression(expression);
            newHTML = newHTML.replace(binding, result);
        }
        this._domNode.innerHTML = newHTML;
    }

    _parseExpression(expression) {
        let returnString = '';
        returnString = eval(expression).toString();
        return returnString;
    }
}

window.Bind = Bind;
