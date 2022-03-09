import { uniqueID } from '../helpers';

export class Task {
	constructor(title, desc = '', checklist = [], dueDate = '', tags = []) {
		this.id = uniqueID();
		this.title = title;
		this.desc = desc;
		this.checklist = checklist;
		this.dueDate = dueDate;
		this.tags = tags;
		this.completed = false;
	}

	//getters
	static get id() {
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

	//setters
	set desc(desc) {
		this._desc = desc;
	}
	set title(title) {
		this._title = title;
	}
	set dueDate(dueDate) {
		this._dueDate = dueDate;
	}
	set completed(completed) {
		this._completed = completed;
	}
	set checklist(checklist) {
		this._checklist = checklist;
	}
	set tags(newTags) {
		this._tags = newTags;
	}

	//preserve the properties after being parsed from stringified format
	toJSON() {
		return {
			id: this.id,
			desc: this.desc,
			title: this.title,
			dueDate: this.dueDate,
			completed: this.completed,
			checklist: this.checklist,
			tags: this.tags
		}
	}
}