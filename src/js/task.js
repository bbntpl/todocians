import { uniqueID, isEmpty } from '../helpers';
import { Checklist } from './checklist';

export class Task {
    constructor(title, desc, checklist, dueDate, completed) {
        this._id = uniqueID();
        this._title = title;
        this._desc = desc;
        this._checklist = checklist;
        this._dueDate = dueDate;
        this._completed = completed;
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
    }
    set title(title) {
        setValue(this._title, title);
    }
    set dueDate(dueDate) {
        setValue(this._dueDate, dueDate);
    }
    set checklist(checklist) {
        this.setValue(this._checklist,checklist);
    }
    set completed(completed) {
        setValue(this._completed, completed);
    }
}