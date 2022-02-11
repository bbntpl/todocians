import { Sidebar, TaskForm, TaskHandler } from './dom-collections';

import chevronRight from '../assets/icons/chevron-right.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';
import chevronUp from '../assets/icons/chevron-up.svg';
import chevronDown from '../assets/icons/chevron-down.svg';
import { appendChildren } from '../helpers';

//These functions changes the properties, attrivutes of elements
//They're primarily for UI elements manipulation
const DOMController = (() => {
    let _isSidebarCollapsed = false;
    let _selectedFolder = 'prj'; //prj or tag
    const _projectNote = 'Note: Simply \‘enter\’ on input to add a new project only if the characters are alphabet.';
    const _tagNote = 'Note: You can select multiple tags to display the tasks that are associated with them.';

    const toggleSidebar = (e) => {
        _isSidebarCollapsed = !_isSidebarCollapsed;
        _isSidebarCollapsed ? _showSidebar(e) : _hideSidebar(e);
    }

    const _showSidebar = (e) => {
        e.target.src = chevronLeft;
        document.documentElement.style.setProperty('--sidebar-width', '280px');
    }

    const _hideSidebar = (e) => {
        e.target.src = chevronRight;
        document.documentElement.style.setProperty('--sidebar-width', '0px');
    }

    const _showChecklist = (e, id) => {
        e.target.src = chevronUp;
        const checklist = document.querySelector(`.checklist-wrapper${id}`);
        checklist.classList.remove('hide');
    }
    const _hideChecklist = (e, id) => {
        e.target.src = chevronDown;
        const checklist = document.querySelector(`.checklist-wrapper${id}`);
        checklist.classList.add('hide');
    }
    
    const toggleTaskChecklist = (e, id) => {
        if (e.target.src === chevronUp) {
            _hideChecklist(e, id);
        } else {
            _showChecklist(e, id);
        }
    }
    const _changeTextsOfFolder = (note, placeholder) => {
        const folderNote = document.querySelector('.folder__note');
        folderNote.textContent = note;
        const accumulatorEl = document.querySelector('.accumulator');
        accumulatorEl.placeholder = placeholder;
    }

    const switchFolder = (e) => {
        if (e.target.classList.contains('active')) return;
        removeActiveChildNodes(e);
        if (e.target.id === 'ribbon-project') {
            _selectedFolder = 'prj';
            _changeTextsOfFolder(_projectNote, 'Add Project');
        } else {
            _selectedFolder = 'tag';
            _changeTextsOfFolder(_tagNote, 'Add Tag')
        }
    }

    const removeActiveChildNodes = (e) => {
        const mainClassName = e.target.className.split(' ');
        const siblings = document.querySelectorAll(`.${mainClassName[0]}`);
        siblings.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active')
    }

    const toggleActive = (e) => {
        e.target.classList.toggle('active');
    }
    const addActiveClassName = (el) => {
        el.classList.add('active');
    }
    const emptyInput = (e) => {
        e.target.value = '';
        e.target.focus = true;
    }

    const renderProjects = (projects) => {
        const prjElements = [];
        const projectListEl = document.querySelector('.folder__list');
        projects.forEach((prj, i) => {
            const props = { name: prj._name, index: i, id: prj._id }
            const prjTab = Sidebar.createPrjTab(props);
            prjElements.push(prjTab);
        });
        appendChildren(projectListEl, prjElements);
        return projectListEl;
    }

    const renderTags = (tags) => {
        const tagElements = [];
        const tagListEl = document.querySelector('.folder__list');
        tags.forEach((tag, i) => {
            const props = { name: tag._name, index: i, id: tag._id, numOfTags: 1 }
            const prjTab = Sidebar.createTagTab(props);
            tagElements.push(prjTab);
        });
        appendChildren(tagListEl, tagElements);
        return tagListEl;
    }

    const renderListOfTasks = (tasks) => {
        const taskElements = [];
        const taskHandlerList = document.querySelector('.task-handler__list');
        tasks.forEach((task, i) => {
            const props = {
                id: task._id,
                title: task._title,
                desc: task._desc,
                checklist: task._checklist,
                dueDate: task._dueDate,
                completed: task._completed,
                tags: task._tags
            }
            const taskBar = TaskHandler.createTask(i, props);
            taskElements.push(taskBar);
        });
        appendChildren(taskHandlerList, taskElements);
        return taskHandlerList;
    }

    const showTaskForm = (taskProps = '') => {
        const modal = document.querySelector('.modal-overlay');
        modal.classList.remove('hide');
        const taskForm = TaskForm.createModalTask(taskProps);
        modal.append(taskForm);
    }

    const hideTaskForm = () => {
        const modal = document.querySelector('.modal-overlay');
        modal.removeChild(modal.firstChild);
        modal.classList.add('hide');
    }

    const removeAllChildNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const displayCurrentProject = (name) => {
        const projectName = document.querySelector('.project__title--large');
        projectName.textContent = name;
    }

    const addClassNameToParent = (e, className) => {
        e.currentTarget.parentElement.classList.add(className);
    }

    const getSelectedFolder = () => _selectedFolder;

    const getProjectNote = () => _projectNote;

    const toggleEditInput = (el) => {
        el.classList.toggle('hide');
        el.focus = true;
    }

    const removeFolderList = () => {
        const parentEl = document.querySelector('.folder__list');
        DOMController.removeAllChildNodes(parentEl);
    }

    const removeListOfTasks = () => {
        const parentEl = document.querySelector('.task-handler__list');
        DOMController.removeAllChildNodes(parentEl);
    }

    const hideElementByClassName = (className) => {
        const el = document.querySelector(`.${className}`);
        el.classList.add('hide');
    }

    const unhideElementByClassName = className => {
        const el = document.querySelector(`.${className}`);
        el.classList.remove('hide');
    }
    const toggleDescendantElements = (isHidden, queryName) => {
        const nodeList = document.querySelectorAll(queryName);
        nodeList.forEach((el) => {
            if (isHidden) {
                el.classList.remove('hide');
            } else {
                el.classList.add('hide');
            }
        })
    }
    return {
        addActiveClassName,
        addClassNameToParent,
        displayCurrentProject,
        emptyInput,
        getProjectNote,
        getSelectedFolder,
        toggleDescendantElements,
        hideElementByClassName,
        hideTaskForm,
        renderListOfTasks,
        renderProjects,
        renderTags,
        removeAllChildNodes,
        removeActiveChildNodes,
        removeFolderList,
        removeListOfTasks,
        showTaskForm,
        switchFolder,
        toggleActive,
        toggleTaskChecklist,
        toggleEditInput,
        toggleSidebar,
        unhideElementByClassName
    }
})();

export default DOMController;