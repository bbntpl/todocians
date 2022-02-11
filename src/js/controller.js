import { format, endOfDay } from 'date-fns'
import DOMController from './dom-controller';
import Todo from './todo';
import swal from 'sweetalert';

export const addFolderTab = (tabName) => {
    const selectedFolder = DOMController.getSelectedFolder();
    selectedFolder == 'prj' ? Todo.addProject(tabName) : Todo.addTag(tabName);
}

export const deleteDatabase = () => {
    Todo.deleteData();
    DOMController.removeFolderList();
    DOMController.displayCurrentProject('');
}

export const displayProjects = (filterName = null) => {
    DOMController.removeFolderList();
    const projects = Todo.getFilteredProjects(filterName);
    DOMController.renderProjects(projects);
}

export const displayTags = (filterName = null) => {
    DOMController.removeFolderList();
    const tags = Todo.getFilteredTags(filterName);
    DOMController.renderTags(tags);
}

export const displayTasks = () => {
    DOMController.removeListOfTasks();
    const tasks = Todo.getTasks();
    DOMController.renderListOfTasks(tasks);
}

export const displayAllTasks = () => {
    removeListOfTasks();
    const allTasks = Todo.getAllTasks();
    DOMController.renderListOfTasks(allTasks);
}

export const switchFolder = (e) => {
    DOMController.switchFolder(e);
    updateFolderView();
}

export const selectFolderFilter = (e) => {
    DOMController.removeActiveChildNodes(e);
    Todo.setFolderFilter(e.target.id);
    updateFolderView();
}

export const updateFolderView = () => {
    const folderFilter = Todo.getFolderFilter();
    const selectedFolder = DOMController.getSelectedFolder();
    if (selectedFolder === 'prj') {
        displayTasks();
        displayProjects(folderFilter);
    } else if (selectedFolder === 'tag') {
        displayAllTasks();
        displayTags(folderFilter);
    }
}

export const updateTaskHandlerView = () => {
    toggleTasksByAvailability();
}

export const showHeaderText = () => {
    const { findIndexOfObj, getFilteredProjects, getProjectId } = Todo;
    const project = getFilteredProjects();
    const prjIndex = findIndexOfObj(project, '_id', getProjectId());
    const textHeader = project[prjIndex]._name || '';
    DOMController.displayCurrentProject(textHeader);
}

export const removeListOfTasks = () => {
    const taskHandlerEl = document.querySelector('.task-handler__list');
    DOMController.removeAllChildNodes(taskHandlerEl);
}

export const isProjectAsActive = (id) => {
    return Todo.getProjectId == id;
}

export const isTagActive = (id) => {
    return Todo.getTagIds().find(id);
}

export const minAndMaxDates = (formatString) => {
    const minDate = new Date();
    const maxDate = new Date(864000000000000);
    return {
        min: format(minDate, formatString),
        max: format(maxDate, formatString)
    };
}

export const matchLinkedTagsToTask = (tag, taskTags) => {
    return taskTags.find(taskTag => taskTag._id === tag._id);
}

//EVENT CALLBACK FUNCTIONS
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

const toggleTasksByAvailability = () => {
    if (Todo.getTasks().length) {
        displayTasks();
        DOMController.hideElementByClassName('task-handler__empty-msg');
    } else {
        removeListOfTasks();
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
}

export const removeFolderTab = (id) => {
    const { deleteProject, deleteTag } = Todo;
    const selectedFolder = DOMController.getSelectedFolder();
    selectedFolder === 'prj' ? deleteProject(id) : deleteTag(id);
    updateFolderView();
}

export const showProjectTasksView = () => {
    showHeaderText();
    DOMController.toggleDescendantElements(true, '.main > *');
    toggleTasksByAvailability();
}

export const hideProjectTasksView = () => {
    Todo.setProjectId('');
    DOMController.toggleDescendantElements(false, '.main > *');
    removeListOfTasks();
    DOMController.displayCurrentProject('');
}

export const removeActiveProjectView = (id) => {
    removeFolderTab(id);
    if (id === Todo.getProjectId()) {
        hideProjectTasksView();
    }
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

export const showTaskFormIfProjectIsActive = (taskProps = '') => {
    if (!Todo.getProjectId()) return
    DOMController.showTaskForm(taskProps);
}

export const addTaskToSelectedPrj = () => {
    const props = collectInputsFromTaskForm();
    const prjIndex = Todo.getProjectId();
    Todo.setTask(prjIndex, props);
    DOMController.hideTaskForm();
}

export const editTaskToSelectedPrj = (taskId) => {
    const props = collectInputsFromTaskForm();
    Todo.editTask(taskId, props);
    DOMController.hideTaskForm();
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
        checklist,
        tags
    }
}

export const collectChecklistFromTaskForm = () => {
    const cl = document.querySelectorAll('.task-checklist-name');
    if (!cl.length) return [];
    const clCbox = document.querySelectorAll('.task-checklist-completed');
    return Array.from(cl).reduce((arr, input, index) => {
        const checklistObj = {
            desc: input.value,
            completed: clCbox[index].value
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
