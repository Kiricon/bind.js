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
        console.log(this);
    }

    /**
     * Bind class to element.
     */
    _bind() {

    }
}

window.Bind = Bind;
