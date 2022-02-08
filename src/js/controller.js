import DOMController from './dom-controller';
import Todo from './todo';

export const addFolderTab = (e) => {
    const tabName = e.target.value;
    if (!alphabetRegex(tabName)) return;
    const selectedFolder = DOMController.getSelectedFolder();

    if (selectedFolder === 'prj') {
        Todo.addProject(e.target.value);
    } else {
        Todo.addTag(e.target.value);
    }
    displayFilteredFolder();
    DOMController.emptyInput(e);
}
const alphabetRegex = (str) => /^[a-zA-Z](.|\s)*$/.test(str);
export const deleteDatabase = () => {
    Todo.deleteData();
    removeFolderList();
}
export const displayProjects = (filterName = null) => {
    removeFolderList();
    const projects = Todo.getFilteredProjects(filterName);
    DOMController.renderProjects(projects);
}
export const displayTags = (filterName = null) => {
    removeFolderList();
    const tags = Todo.getFilteredTags(filterName);
    DOMController.renderTags(tags);
}
export const removeFolderList = () => {
    const parentEl = document.querySelector('.folder__list');
    DOMController.removeAllChildNodes(parentEl);
}
export const removeFolderTab = (id) => {
    const { deleteProject, deleteTag } = Todo;
    const selectedFolder = DOMController.getSelectedFolder();
    selectedFolder === 'prj' ? deleteProject(id) : deleteTag(id);
    displayFilteredFolder();
}
export const switchFolder = (e) => {
    DOMController.switchFolder(e);
    displayFilteredFolder();
}
export const selectFolderFilter = (e) => {
    DOMController.removeActiveChildNodes(e);
    Todo.setFolderFilter(e.target.id);
    displayFilteredFolder();
}
export const displayFilteredFolder = () => {
    const folderFilter = Todo.getFolderFilter();
    const selectedFolder = DOMController.getSelectedFolder();
    if (selectedFolder === 'prj') {
        displayProjects(folderFilter);
    } else if(selectedFolder === 'tag') {
        displayTags(folderFilter);
    } else {
        throw new Error('Folder is an unknown type');
    }
}
export const updateFilteredArrays = () => {
    displayFilteredFolder();
}
export const initialMount = () => {
    if (!Todo.getFilteredProjects()) return;
    displayProjects();
}