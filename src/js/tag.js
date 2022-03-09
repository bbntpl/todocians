import { uniqueID } from '../helpers';

export class Tag {
	constructor(name) {
		this.id = uniqueID();
		this.name = name;
	}

	//getters
	static get id() {
		return this._id;
	}

	static get name() {
		return this._name;
	}

	//preserve the properties after being parsed from stringified format
	toJSON() {
		return {
			id: this.id,
			name: this.name,
		}
	}
}