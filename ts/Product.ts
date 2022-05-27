export class Product {
    private _id: number;
    private _name: string;
    private _type: string;
    private _price: number;
    private _count: number;
    private _dateCreate: string;
    private _describe: string;

    constructor(id: number, name: string, type: string, price: number, count: number, dateCreate: string, describe: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._count = count;
        this._dateCreate = dateCreate;
        this._describe = describe;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }

    get dateCreate(): string {
        return this._dateCreate;
    }

    set dateCreate(value: string) {
        this._dateCreate = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }
}