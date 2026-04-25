class MinStack {
    constructor() {
        this.stack = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.min.length == 0) {
            this.min.push(val)
        } else {
           this.min.push(Math.min(val, this.min[this.min.length - 1]))
        }
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop()
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}
