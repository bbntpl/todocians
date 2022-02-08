import { uniqueID } from '../helpers';

export class Tag {
    constructor(name) {
        this._id = uniqueID();
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}