import { uniqueID } from '../helpers';

export class Project {
	constructor(name) {
		this.id = uniqueID();
		this.name = name;
		this.tasks = [];
	}

	//getters
	static get id() {
		return this._id;
	}
	
	get name() {
		return this._name;
	}

	get tasks() {
		return this._tasks;
	}

	//setters
	set name(newName) {
		this._name = newName;
	}

	set tasks(task) {
		this._tasks = task;
	}

	//preserve the properties after being parsed from stringified format
	toJSON() {
		return {
			id: this.id,
			name: this.name,
			tasks: this.tasks
		}
	}
}