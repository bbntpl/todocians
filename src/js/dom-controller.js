import { Sidebar, Modal } from './dom-collections';

import chevronRight from '../assets/icons/chevron-right.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';
import { appendChildren  } from '../helpers';

//These functions changes the properties of elements
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

    const removeActiveChildNodes = (e) => {
        //main classname of an element
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

    const renderProjects = (projects) => {
        const prjElements = [];
        const folder__list = document.querySelector('.folder__list');
        projects.forEach((prj, i) => {
            const props = { name: prj._name, index: i, id: prj._id }
            const prjTab = Sidebar.createPrjTab(props);
            prjElements.push(prjTab);
        });
        appendChildren(folder__list, prjElements);
        return folder__list;
    }

    const renderTags = (tags) => {
        const tagElements = [];
        const folder__list = document.querySelector('.folder__list');
        tags.forEach((tag, i) => {
            const props = { name: tag._name, index: i, id: tag._id, numOfTags: 1 }
            const prjTab = Sidebar.createTagTab(props);
            tagElements.push(prjTab);
        });
        appendChildren(folder__list, tagElements);
        return folder__list;
    }

    const renderListOfTasks = () => {
        
    }

    const renderListOfChecklists = () => {

    }

    const showTaskForm = () => {
        const modal = document.querySelector('.modal-overlay');
        modal.classList.remove('hide');
        const taskForm = Modal.createModalTask();
        modal.append(taskForm);
    }

    const hideTaskForm = () => {
        const modal = document.querySelector('.modal-overlay');
        modal.removeChild(modal.firstChild);
        modal.classList.add('hide');
    }

    const showAddTodoTexts = () => {
        return {
            legend: 'Add todo',
            title: '',
            desc: '',
            checklist: [],
            dueDate: ''
        }
    }

    const showEditTodoTexts = (props) => {
        const { title, desc, checklist, dueDate } = props;
        return {
            legend: 'Edit todo',
            title: title,
            desc: desc,
            checklist: checklist,
            dueDate: dueDate
        }
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
    const displayActionConfirmation = (action, item) => {
        const modal = document.querySelector('.modal');
        modal.append(Modal.createActionConfirmation(action, item));
    }
    const getSelectedFolder = () => _selectedFolder;

    const getProjectNote = () => _projectNote;

    const toggleEditInput = (el) => {
        el.classList.toggle('hide');
        el.focus = true;
    }

    const setObjProp = () => {

    }

    const renderTask = () => {

    }

    const addChecklist = () => {

    }

    const renderFolderTabs = () => {

    }

    const renderTasks = () => {

    }

    const manuallyToggleTaskHandler = (hide) => {
        const taskHandlerChildren
            = document.querySelectorAll('.main > *');

            taskHandlerChildren.forEach((el) => {
            if (hide) {
                el.classList.add('hide');
            } else {
                el.classList.remove('hide');
            }
        })
    }
    return {
        addActiveClassName,
        addClassNameToParent,
        displayActionConfirmation,
        displayCurrentProject,
        emptyInput,
        getProjectNote,
        getSelectedFolder,
        hideTaskForm,
        renderProjects,
        renderTags,
        removeAllChildNodes,
        removeActiveChildNodes,
        showAddTodoTexts,
        showEditTodoTexts,
        showTaskForm,
        switchFolder,
        toggleActive,
        toggleEditInput,
        toggleSidebar,
        manuallyToggleTaskHandler,
    }
})();

export default DOMController;