import DOMController from './dom-controller';
import Todo from './todo';

export const addFolderTab = (e) => {
    if(!e.target.value) return;
    const selectedFolder = DOMController.getSelectedFolder();
    if(selectedFolder === 'prj'){
        Todo.addProject(e.target.value);
        displayProjects();
    } else {
        Todo.addTag(e.target.value);
        displayTags();
    }
    DOMController.emptyInput(e);
}
export const deleteDatabase = () => {
    Todo.deleteData();
    console.log(Todo.getProjects());
    removeFolderList();
}
export const displayProjects = () => {
    removeFolderList();
    const projects = Todo.getProjects();
    DOMController.renderProjects(projects);
}
export const displayTags = () => {
    removeFolderList();
    const tags = Todo.getTags();
    DOMController.renderTags(tags);
}
export const removeFolderList = () => {
    const parentEl = document.querySelector('.folder__list');
    DOMController.removeAllChildNodes(parentEl);
}
export const removeFolderTab = (i) => {
    const selectedFolder = DOMController.getSelectedFolder();
    if(selectedFolder === 'prj'){
        Todo.deleteProject(i);
        displayProjects();
    } else {
        Todo.deleteTag(i);
        displayTags();
    }
}
export const switchFolder = (e) => {
    DOMController.switchFolder(e);
    const selectedFolder = DOMController.getSelectedFolder();
    selectedFolder === 'prj' ? displayProjects() : displayTags();
}

export const initialMount = () => {
    if(!Todo.getProjects()) return;
    displayProjects();
}