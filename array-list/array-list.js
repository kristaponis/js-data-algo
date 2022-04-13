class ArrayList {
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(value) {
        this.data[this.length] = value
        this.length++
    }

    pop() {
        const x = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return x
    }

    get(index) {
        return this.data[index]
    }

    delete(index) {
        const x = this.data[index]
        this._collapseTo(index)
        return x
    }

    _collapseTo(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}
