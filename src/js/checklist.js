import { uniqueID } from '../helpers';

export class Checklist {
    constructor(desc, completed) {
        this._id = uniqueID();
        this._desc = desc;
        this._completed = completed;
    }
    setValue(val, newVal) {
        if (!isEmpty) val = newVal;
    }
    get id() {
        return this._id;
    }
    get desc() {
        return this._desc;
    }
    get completed() {
        return this._completed;
    }
    set desc(desc) {
        setValue(this._desc, desc);
    }
    set completed(completed) {
        setValue(this._completed, completed);
    }
}
