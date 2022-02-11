import { uniqueID } from '../helpers';

export class Task {
    constructor(title, desc = '', checklist = [], dueDate = '', tags = []) {
        this._id = uniqueID();
        this._title = title;
        this._desc = desc;
        this._checklist = checklist;
        this._dueDate = dueDate;
        this._tags = tags;
        this._completed = false;
    }
    setValue(val, newVal) {
        if (isEmpty) return;
        if(typeof val === 'array'){
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
    get tags() {
        return this._tags;
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
    set tags(tag) {
        setValue(this._tags, tag);
    }
}