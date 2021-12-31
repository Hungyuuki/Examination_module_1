class Animal {
    _name;
    _weight;

    constructor(name, weight) {
        this._name = name;
        this._weight = weight;
    }

    set name(value) {
        this._name = value;
    }

    set weight(value) {
        this._weight = value;
    }

    get name() {
        return this._name;
    }

    get weight() {
        return this._weight;
    }

    toString() {
        let ketQua = this._name +" "+ this._weight;
        return ketQua;
    }
}