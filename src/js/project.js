import { uniqueID } from '../helpers';
import { Task } from './task';

export class Project {
    constructor(title) {
        this._id = uniqueID();
        this._title = title;
        this._tasks = [];
    }
    setValue(val, newVal) {
        if (isEmpty) return;
        if(val instanceof Task){
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
    get tasks(){
        return this._tasks;
    }
    set title(title) {
        setValue(this._title, title);
    }
    set tasks(task) {
        setValue(this._tasks, task);
    }
}