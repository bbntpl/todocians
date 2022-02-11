import { uniqueID } from '../helpers';
import { Task } from './task';

export class Project {
    constructor(name) {
        this._id = uniqueID();
        this._name = name;
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
    get name() {
        return this._name;
    }
    get tasks(){
        return this._tasks;
    }
    set name(name) {
        setValue(this._name, name);
    }
    set tasks(task) {
        setValue(this._tasks, task);
    }
}