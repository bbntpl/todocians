import { format } from 'date-fns'
import DOMController from './dom-controller';
import Todo from './todo';
import swal from 'sweetalert';

const addFolderTab = (tabName) => {
    const selectedFolder = DOMController.getSelectedFolder();
    selectedFolder == 'prj' ? Todo.addProject(tabName) : Todo.addTag(tabName);
}

//delete all of the projects and tags including local storage items
const deleteDatabase = () => {
    Todo.deleteData();
    DOMController.removeFolderList();
    hideProjectTasksView();
}

const displayProjects = (filterName = null) => {
    DOMController.removeFolderList();
    const projects = Todo.getFilteredProjects(filterName);
    if(projects.length){
        DOMController.renderProjects(projects);
    } else {
        hideProjectTasksView();
    }
}

const displayTags = (filterName = null) => {
    DOMController.removeFolderList();
    const tags = Todo.getFilteredTags(filterName);
    if(tags.length){
        DOMController.renderTags(tags);
    } else {
        hideProjectTasksView();
    }
}

const displayTasksByProject = () => {
    const tasks = Todo.getFilteredTasks();
    DOMController.renderListOfTasks(tasks);
}

const displayTasksByTags = () => {
    const allTasks = Todo.getFilteredTasks();
    DOMController.renderListOfTasks(allTasks);
}

const displayTasks = () => {
    DOMController.removeListOfTasks();
    const selectedFolder = DOMController.getSelectedFolder();
    const projectId = Todo.getProjectId();
    if(selectedFolder === 'prj' && projectId) {
        DOMController.unhideElementByClassName('add-task-btn');
        showHeaderText();
        displayTasksByProject();
    } else if (selectedFolder === 'prj' && !projectId) {
        DOMController.unhideElementByClassName('add-task-btn');
    } else {
        showTagsTasksView();
    }
}

const showTagsTasksView = () => {
    DOMController.hideElementByClassName('task-handler__empty-msg');
    DOMController.hideElementByClassName('add-task-btn');
    DOMController.unhideElementByClassName('task-handler__options');
    DOMController.displayCurrentProject('');
    displayTasksByTags();
}

//select folder filter and update prj/tag list
const selectFolderFilter = (e) => {
    DOMController.removeActiveChildNodes(e);
    Todo.setFolderFilter(e.target.id);
    updateFolderView();
}

export const selectTaskFilter = (e) => {
    Todo.setTaskFilter(e.target.value);
    displayTasks();
}

//update the view of the sidebar - folder such as project/tag list
const updateFolderView = () => {
    const folderFilter = Todo.getFolderFilter();
    const selectedFolder = DOMController.getSelectedFolder();
    if (selectedFolder === 'prj') {
        displayProjects(folderFilter);
    } else if (selectedFolder === 'tag') {
        displayTags(folderFilter);
    }
}

const showHeaderText = () => {
    const { findIndexOfObj, getFilteredProjects, getProjectId } = Todo;
    const project = getFilteredProjects();
    const prjIndex = findIndexOfObj(project, '_id', getProjectId());
    const textHeader = project[prjIndex]._name || '';
    DOMController.displayCurrentProject(textHeader);
}


export const isProjectAsActive = (id) => {
    return Todo.getProjectId == id;
}

export const isTagActive = (id) => {
    return Todo.getTagIds().find(id);
}

export const minAndMaxDates = (formatString) => {
    const minDate = new Date();
    const maxDate = new Date(86400000000000);
    return {
        min: format(minDate, formatString),
        max: format(maxDate, formatString)
    };
}

export const matchLinkedTagsToTask = (tag, taskTags) => {
    return taskTags.find(taskTag => taskTag._id === tag._id);
}

//EVENT CALLBACK FUNCTIONS
//switch to different folder (folders are projects or tags)
export const switchFolder = (e) => {
    DOMController.switchFolder(e);
    updateFolderView();
    displayTasks();
}

export const switchFilterTab = (event) => {
    selectFolderFilter(event);
    updateFolderView();
}

export const getInputValueOnEnter = (event) => {
    const inputVal = event.target.value;
    if (event.key === 'Enter' && Todo.alphabetRegex(inputVal)) {
        addFolderTab(inputVal);
        DOMController.emptyInput(event);
        updateFolderView();
    }
}

export const toggleTasksByAvailability = () => {
    if (Todo.getTasks().length) {
        displayTasks();
        DOMController.hideElementByClassName('task-handler__empty-msg');
    } else {
        DOMController.removeListOfTasks();
        DOMController.unhideElementByClassName('task-handler__empty-msg');
    }
}


export const selectProjectTab = (event, id) => {
    const className = event.target.classList;
    if (className.contains('active')) return;
    DOMController.removeActiveChildNodes(event);
    Todo.setProjectId(id);
    showProjectTasksView();
}

export const toggleTagTabSelection = (event, id) => {
    const tagTab = event.target;
    DOMController.toggleActive(event);
    if (tagTab.classList.contains('active')) {
        Todo.pushActiveTags(id);
    } else {
        Todo.deselectTag(id);
    }
    displayTasks();
}

export const removeFolderTab = (id) => {
    const { deleteProject, deleteTag } = Todo;
    const selectedFolder = DOMController.getSelectedFolder();
    selectedFolder === 'prj' ? deleteProject(id) : deleteTag(id);
    updateFolderView();
}

export const showProjectTasksView = () => {
    showHeaderText();
    DOMController.toggleDescendantElements(true, '.main > *:not(.task-handler__list)');
    toggleTasksByAvailability();
}

export const hideProjectTasksView = () => {
    Todo.setProjectId('');
    DOMController.toggleDescendantElements(false, '.main > *:not(.task-handler__list)');
    DOMController.removeListOfTasks();
    DOMController.displayCurrentProject('');
}

export const removeActiveProjectView = (id) => {
    removeFolderTab(id);
    if (id === Todo.getProjectId()) {
        hideProjectTasksView();
    }
}

export const removeTask = (id) => {
    Todo.deleteTask(id, DOMController.getSelectedFolder());
    DOMController.hideTaskForm();
    displayTasks();
    updateFolderView();
}

export const selectFirstProjectTab = () => {
    const project = Todo.getFilteredProjects();
    if (project.length) {
        Todo.setProjectId(project[0]._id);
    }
    const firstPrjTab = document.querySelectorAll('.folder__tab');
    DOMController.addActiveClassName(firstPrjTab[0]);
}

export const toggleEditInput = (inputEl, nameEl) => {
    inputEl.classList.toggle('hide');
    nameEl.classList.toggle('hide');
}

export const editProjectTab = (event, { id, inputEl, nameEl }) => {
    const newPrjName = event.target.value;
    if (event.key === 'Enter' && Todo.alphabetRegex(newPrjName)) {
        Todo.setProjectNameById(event, id);
        DOMController.emptyInput(event);
        nameEl.textContent = newPrjName;
        toggleEditInput(inputEl, nameEl);
        updateTodoView(event);
    }
}

export const customAlert = (props, callback) => {
    const { action, item, id } = props;
    const confirmedResponse
        = `Are you sure you want to ${action} ${item}?`;
    swal(confirmedResponse, {
        buttons: {
            confirm: 'Yes',
            cancel: 'Cancel',
        },
    })
        .then((outcome) => {
            if (outcome) {
                callback(id);
            }
        });
}

//display custom alerts
export const alertEmptyDatabase = () => {
    swal('The local storage is empty.', {
        buttons: {
            confirm: 'OK'
        },
        icon: "info",
    })
}

export const alertDatabaseRemovalAction = () => {
    if (Todo.getFilteredProjects().length) {
        const customAlertArgs = { action: 'delete', item: 'the database' }
        customAlert(customAlertArgs, deleteDatabase);
    } else {
        alertEmptyDatabase();
    }
}

export const updateTodoView = (event) => {
    DOMController.removeActiveChildNodes(event);
    showHeaderText();
}

export const addTaskToSelectedPrj = () => {
    const taskProps = collectInputsFromTaskForm();
    const prjIndex = Todo.getProjectId();
    Todo.setTask(prjIndex, taskProps);
    DOMController.hideTaskForm();
    updateFolderView();
}

export const editTask = (taskId) => {
    const props = collectInputsFromTaskForm();
    Todo.editTask(taskId, props, DOMController.getSelectedFolder());
    DOMController.hideTaskForm();
    displayTasks();
}

export const collectInputsFromTaskForm = () => {
    const title = document.getElementById('task-input-title');
    const desc = document.getElementById('task-input-desc');
    const dueDate = document.getElementById('task-input-duedate');
    const checklist = collectChecklistFromTaskForm();
    const tags = collectTagsFromTaskForm();
    return {
        title: title.value,
        desc: desc.value,
        dueDate: dueDate.value,
        checklist: checklist,
        tags: tags
    }
}

export const collectChecklistFromTaskForm = () => {
    const cl = document.querySelectorAll('.task-checklist-name');
    if (!cl.length) return [];
    const clCbox = document.querySelectorAll('.task-checklist-completed');
    return Array.from(cl).reduce((arr, input, index) => {
        const checklistObj = {
            desc: input.value,
            completed: clCbox[index].checked
        }
        arr.push(checklistObj);
        return arr;
    }, []);
}

export const collectTagsFromTaskForm = () => {
    const tagCheckboxes = document.querySelectorAll('.ck-input');
    const tags = Todo.getTags();
    return tags.reduce((arr, tag, i) => {
        if (tagCheckboxes[i].checked) {
            arr.push(tag);
        }
        return arr;
    }, []);
}

//display projects, active project and tasks
//if it exists
const defaultView = () => {
    displayProjects();
    selectFirstProjectTab();
    showHeaderText();
    toggleTasksByAvailability();
}

export const initialMount = () => {
    if (Todo.getFilteredProjects().length){
        defaultView();
    } else {
        hideProjectTasksView();
    }
}
