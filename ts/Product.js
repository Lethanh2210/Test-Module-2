export class Product {
    constructor(id, name, type, price, count, dateCreate, describe) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._count = count;
        this._dateCreate = dateCreate;
        this._describe = describe;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;
    }
    get dateCreate() {
        return this._dateCreate;
    }
    set dateCreate(value) {
        this._dateCreate = value;
    }
    get describe() {
        return this._describe;
    }
    set describe(value) {
        this._describe = value;
    }
}
//# sourceMappingURL=Product.js.map