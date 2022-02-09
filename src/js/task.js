import { uniqueID } from '../helpers';
import { Checklist } from './checklist';

export class Task {
    constructor(title, desc, checklist, dueDate) {
        this._id = uniqueID();
        this._title = title;
        this._desc = desc;
        this._checklist = checklist;
        this._dueDate = dueDate;
        this._completed = false;
    }
    setValue(val, newVal) {
        if (isEmpty) return;
        if(val instanceof Checklist){
            val.push(newVal);
        } else {
            val = newVal;
        }
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get desc() {
        return this._desc;
    }
    get completed() {
        return this._completed;
    }
    get checklist() {
        return this._checklist;
    }
    get dueDate() {
        return this._dueDate;
    }
    set desc(desc) {
        setValue(this._desc, desc);
        return this;
    }
    set title(title) {
        setValue(this._title, title);
        return this;
    }
    set dueDate(dueDate) {
        setValue(this._dueDate, dueDate);
        return this;
    }
    set checklist(checklist) {
        this.setValue(this._checklist,checklist);
        return this;
    }
    set completed(completed) {
        setValue(this._completed, completed);
        return this;
    }
}