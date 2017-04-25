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

        // Run init script
        if(typeof this.init == 'function') {
            this.init.call(this);
        }
    }

    /**
     * Bind class to element.
     */
    _bind() {
        this._domNode = document.querySelector(this.el);
        this.element = this._domNode;
        this._bindData();
    }

    /**
     * Get our bindings in our node element
     */
    _bindData() {
        this._initialHTML = this._domNode.innerHTML;
        let regExp = /\{\{((?:.|\n)+?)\}\}/g;
        this._bindings = this._initialHTML.match(regExp);
        if(this._bindings != null) {
            this._parseBindings();
        }
    }


    /**
     * Parse {{}} bindings and return formatted html
     */
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


    /**
     * Parses individual binding expressions and returns string
     * @param {string} expression - Binding expression
     * @return {string} - Result of expression parsing
     */
    _parseExpression(expression) {
        let returnString = '';
        returnString = eval(expression).toString();
        return returnString;
    }


    /**
     * Public facing method for updating the element
     */
    update() {
        this._parseBindings();
    }
}

window.Bind = Bind;
