import { uniqueID } from '../helpers';

export class Checklist {
	constructor(desc, completed) {
		this.id = uniqueID();
		this.desc = desc;
		this.completed = completed;
	}

	//getters
	static get id() {
		return this._id;
	}
	get desc() {
		return this._desc;
	}
	get completed() {
		return this._completed;
	}

	//setters
	set desc(desc) {
		this._desc = desc;
	}
	set completed(completed) {
		this._completed = completed;
	}

	//preserve the properties after being parsed from stringified format
	toJSON() {
		return {
			id: this.id,
			desc: this.desc,
			completed: this.completed
		}
	}
}
