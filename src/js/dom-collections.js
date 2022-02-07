import {
    createCustomElement,
    createEl,
    createImg,
    appendChildren
} from '../helpers';

import { 
    addFolderTab, 
    deleteDatabase, 
    removeFolderTab,
    switchFolder 
} from './controller';

import DOMController from './dom-controller';

import chevronLeft from '../assets/icons/chevron-left.svg';
import prjIcon from '../assets/icons/project.svg';
import tagIcon from '../assets/icons/tag.svg';
import magnifyIcon from '../assets/icons/magnify.svg';
import logoImg from '../assets/images/logo.svg';
import editIcon from '../assets/icons/edit.svg';
import closeIcon from '../assets/icons/close.svg';
import trashIcon from '../assets/icons/trash.svg';
import calendarMonth from '../assets/icons/calendar-month.svg';
import databaseRemovalIcon from '../assets/icons/database-remove-outline.svg'

//These are collection of DOM elements including event listeners
const Sidebar = (() => {
    const _createLogo = () => createImg('img', 'logo', logoImg);
    const _createSearchbar = () => {
        const searchbarEl = createEl('div', 'searchbar');
        const magnifyIconEl = createImg('img', 'searchbar-icon', magnifyIcon);
        const searchbarInput = createEl('input', 'searchbar-input');
        searchbarInput.id = 'prj-search';
        appendChildren(searchbarEl, [magnifyIconEl, searchbarInput]);
        return searchbarEl;
    }
    const _createFilters = () => {
        const organizerFilters = createEl('div', 'organizer__filter');

        //filter btns
        const filterAll = createCustomElement('div', ['filter', 'active'], {
            textContent: 'All',
            id: 'folder-filter__all'
        });
        const filterAZ = createCustomElement('div', 'filter', {
            textContent: 'A-Z',
            id: 'folder-filter__az'
        });
        const filterSize= createCustomElement('div', 'filter', {
            textContent: 'Size',
            id: 'folder-filter__size'
        });
        const filterFinished= createCustomElement('div', 'filter', {
            textContent: 'Finished',
            id: 'folder-filter__finished'
        });

        const filterTabs = [filterAll, filterAZ, filterSize, filterFinished];
        appendChildren(organizerFilters, filterTabs);
        filterTabs.forEach(e => {
            e.addEventListener('click', DOMController.removeActiveChildNodes);
        })
        return organizerFilters;
    }
    const _createFolder = () => {
        const folderEl = createEl('div', 'folder');
        const folderNote = createEl('p', 'folder__note', 'Note: Simply \‘enter\’ on input to add a new project if it is not empty.');
        const accumulatorInput = createCustomElement('input', 'accumulator', {
            id: 'prj-accumulator',
            placeholder: 'Add Project'
        });
        const folderListEl = createEl('div', 'folder__list');
        appendChildren(folderEl, [folderNote, accumulatorInput, folderListEl]);

        accumulatorInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                addFolderTab(e);
            }
        });
        return folderEl;
    }
    const createPrjTab = (text, i) => {
        const prjTab = createEl('div', 'folder__tab');
        const tabTitle = createEl('div', 'tab-title');
        const tabName = createEl('p', ['tab-name', 'centered'], text);
        const rowItemsHolder = createEl('div', 'row-items-holder');
        const editIconEl = createImg('img', 'tab-icon', editIcon);
        const trashIconEl = createImg('img', 'tab-icon', trashIcon);
        appendChildren(prjTab, [tabTitle, rowItemsHolder]);
        tabTitle.append(tabName);
        appendChildren(rowItemsHolder, [editIconEl, trashIconEl]);
        prjTab.addEventListener('click', DOMController.removeActiveChildNodes.bind(i));
        trashIconEl.addEventListener('click', removeFolderTab);
        return prjTab;
    }
    const createTagTab = (text, i, numOfTags) => {
        const tagTab = createEl('div', 'folder__tab');
        const tabTitle = createEl('div', 'tab-title');
        const tabName = createEl('p', ['tab-name', 'centered'], text);
        const rowItemsHolder = createEl('div', 'row-items-holder');
        const tagIconEl = createImg('img', 'tab-icon', tagIcon);
        const totalTags = createEl('div', 'total-tags', `(${numOfTags})`);
        const removeIconEl = createImg('img', 'tab-icon', closeIcon);
        appendChildren(tagTab, [tabTitle, rowItemsHolder]);
        appendChildren(tabTitle, [tagIconEl, tabName, totalTags]);
        rowItemsHolder.append(removeIconEl);
        tagTab.addEventListener('click', DOMController.toggleActive.bind(i));
        removeIconEl.addEventListener('click', removeFolderTab);
        return tagTab;
    }
    const initialize = () => {
        const sidebarEl = createEl('div', 'sidebar');
        const sidebarInnerEl = createEl('div', 'sidebar__inner');
        const organizerEl = createEl('div', 'organizer');
        appendChildren(sidebarEl, [_createLogo(), sidebarInnerEl]);
        appendChildren(sidebarInnerEl, [_createSearchbar(), _createFilters(), organizerEl]);
        appendChildren(organizerEl, [_createFolder()]);
        return sidebarEl;
    }
    return { initialize, createPrjTab, createTagTab };
})();
const Ribbon = (() => {
    const _createCollapseBtn = () => {
        const collapseBtn = createEl('div', 'collapse-wrapper');
        const collapseIcon = createImg('img', 'ribbon-icons', chevronLeft);
        collapseBtn.append(collapseIcon);
        collapseBtn.addEventListener('click', (e) => DOMController.toggleSidebar(e));
        return collapseBtn;
    }

    const _createRibbonBtns = () => {
        const ribbonFolders = createEl('div', 'ribbon-folders');
        const prjIconEl = createCustomElement('img', ['ribbon-icons', 'active'], {
            src: prjIcon,
            id: 'ribbon-project'
        });
        const tagIconEl = createCustomElement('img', 'ribbon-icons', {
            src: tagIcon,
            id: 'ribbon-tag'
        });
        [prjIconEl, tagIconEl].forEach(e => {
            e.addEventListener('click', switchFolder);
        })
        appendChildren(ribbonFolders, [prjIconEl, tagIconEl]);
        return ribbonFolders;
    }
    const _removeDatabaseBtn = () => {
        const databaseRemovalBtn = createEl('div', 'data-remove-wrapper');
        const databaseRemovalIconEl = createImg('img', 'data-remove', databaseRemovalIcon);
        databaseRemovalBtn.append(databaseRemovalIconEl);
        databaseRemovalBtn.addEventListener('click', deleteDatabase);
        return databaseRemovalBtn;
    }
    const initialize = () => {
        const ribbonEl = createEl('div', 'ribbon');
        appendChildren(ribbonEl, [_createCollapseBtn(), _createRibbonBtns(), _removeDatabaseBtn()]);
        return ribbonEl;
    }

    return { initialize };
})();

const Header = (() => {
    const initialize = () => {
        const headerEl = createEl('header', 'header');
        const projectTitle = createEl('h1', 'project__title--large', '');
        headerEl.append(projectTitle);
        return headerEl;
    }
    return { initialize };
})();
const Main = (() => {
    const _createTaskFilterSelect = () => {
        const taskFilterEl = createCustomElement('select', 'task-filter-btn', {
            name: 'task-filter',
            id: 'task-filter-btn'
        });
        const optionScheduled = createCustomElement('option', 'task-filter-options', {
            text: 'Scheduled',
            value: 'scheduled'
        })
        const optionToday = createCustomElement('option', 'task-filter-options', {
            text: 'Today',
            value: 'today'
        })
        const optionWeek = createCustomElement('option', 'task-filter-options', {
            text: 'This week',
            value: 'week'
        })
        const optionMonth = createCustomElement('option', 'task-filter-options', {
            text: 'This month',
            value: 'month'
        })
        const optionCompleted = createCustomElement('option', 'task-filter-options', {
            text: 'Completed',
            value: 'completed'
        })
        const taskOptions = [optionScheduled, optionToday, optionWeek, optionMonth, optionCompleted];
        appendChildren(taskFilterEl, taskOptions);
        return taskFilterEl;
    }
    const _createTaskHandlerOptions = () => {
        const taskHandlerOptionsEl = createEl('div', 'task-handler__options');
        const addTaskBtn = createEl('button', 'add-task-btn', 'Add task');
        appendChildren(taskHandlerOptionsEl, [addTaskBtn, _createTaskFilterSelect()]);
        return taskHandlerOptionsEl;
    }
    const emptyTaskMsg = createEl('div', 'task-handler__empty-msg', 'You don\'t have any tasks.');
    const _createTaskHandlerList = () => {
        const taskHandlerList = createEl('div', 'task-handler__list');
        return taskHandlerList;
    }
    const createTask = () => {
        const taskWrapper = createEl('div', 'task-wrapper');
        const taskBar = createEl('div', 'task-bar');
        const taskControl = createEl('div', 'task-control');
        const taskControlInput = createCustomElement('input', 'task-control-input', {
            type: 'checkbox',
            id: 'checkbox',
        });
        const taskControlLabel = createCustomElement('label', 'task-control-label', {
            for: 'checkbox',
        })
        taskControlLabel.setAttribute('for', 'checkbox');
        const taskInner = createEl('div', 'task-inner');
        const taskDetails = createEl('div', 'task__details');
        const taskInstruction = createEl('section', 'task__instruction');
        const taskTitle = createEl('h2', 'task__title', 'Finish this website');
        const taskDesc = createEl('article', 'task__desc', 'It is kinda messy, seriously.');

        const taskDueDate = createEl('dl', 'task__due-date');
        const dueDateIconWrapper = createEl('dt', 'due-date-icon');
        const dueDateIcon = createImg('img', 'due-date-icon', calendarMonth);
        const dueDate = createEl('dd', 'date', 'Due Tomorrow');

        const taskTags = createEl('div', 'task__tags');

        const taskExtraDetails = createEl('div', 'task__details--extra');
        const taskTotalChecklist = createEl('div', 'task__total-checklist');
        const taskChecklistToggler = createEl('div', 'task-checklist-toggler');
        
        const checklistWrapper = createEl('div', 'checklist-wrapper');

        appendChildren(taskWrapper, [taskBar, checklistWrapper]);
        appendChildren(taskBar, [taskControl, taskInner]);
        appendChildren(taskControl, [taskControlInput, taskControlLabel]);
        appendChildren(taskInner, [taskDetails, taskExtraDetails]);
        appendChildren(taskInstruction, [taskTitle, taskDesc, ]);
        appendChildren(taskDueDate, [dueDateIconWrapper, dueDate]);
        dueDateIconWrapper.append(dueDateIcon);
        appendChildren(taskDetails, [taskInstruction, taskTags]);
        appendChildren(taskExtraDetails, [taskDueDate, taskTotalChecklist, taskChecklistToggler]);

        return taskWrapper;
    }
    const checklistBar = (task) => {
        const taskTag = createEl('div', 'checklist-bar');
        const checklistBar = createEl('div', 'checklist-bar');
        const checklistControl = createEl('div', 'checklist-control');
        const checklistInput = createCustomElement('input', 'checklist-control-input', {
            type: 'checkbox',
            value: task.completed
        })
        const checklistTitleWrapper = createEl('div', 'task-inner');
        const checklistTitle = createEl('p', 'task__title', task.desc);

        appendChildren(checklistBar, [checklistControl, checklistTitleWrapper]);
        checklistControl.append(checklistInput);
        checklistTitleWrapper.append(checklistTitle);
        return taskTag;
    }
    const createTaskTag = (tag) => createEl('div', 'task-tag', tag);
    const initialize = () => {
        const mainEl = createEl('main', 'main');
        const taskHandlerList = _createTaskHandlerList();
        appendChildren(mainEl,
            [_createTaskHandlerOptions(),
                emptyTaskMsg,
                taskHandlerList
            ]);
            appendChildren(taskHandlerList, [createTask(), createTask()]);
        return mainEl;
    };
    return { initialize, createTask, createTaskTag, checklistBar };
})();
const Modal = (() => {
    const createActionConfirmation = (action, item) => {
        const modalConfirmation = createEl('div', 'modal__confirmation');
        const modalContainerUpper = createEl('div', 'modal-container__upper');
        const modalContainerLower = createEl('div', 'modal-container__lower');
        const txtQuestion = `Are you sure you want to ${action} ${item}`;
        const modalDialogQuestion = createEl('p', 'modal-dialog__question', txtQuestion)
        const modalDialogResponse = createEl('div', 'modal-dialog__response');
        const yesBtn = createEl('button', 'response-btn', 'Yes');
        const noBtn = createEl('button', 'response-btn', 'No');

        appendChildren(modalConfirmation, [modalContainerUpper, modalContainerLower]);
        modalContainerUpper.append(modalDialogQuestion);
        modalContainerLower.append(modalDialogResponse);
        appendChildren(modalDialogResponse, [yesBtn, noBtn]);
        return modalConfirmation;
    }
    function createModalTask() {
        const modalTask = createEl('div', 'modal__task');
        const formTask = createEl('form', 'form__task');

        const modalContainerUpper = createEl('div', 'modal-container__upper');
        const modalContainerLower = createEl('div', 'modal-container__lower');

        const modalDialogHeader = createEl('div', 'modal-dialog__header');
        const modalTaskLabel = createEl('legend', 'modal__task-label');
        modalTaskLabel.textContent = 'Task Todo';
        const modalDialogResponse = createEl('div', 'modal-dialog__response');
        const yesBtn = createEl('button', 'response-btn', 'Save');
        const noBtn = createEl('button', 'response-btn', 'Cancel');
        const fieldsetTaskDetails = createEl('fieldset', 'modal-dialog__inputs');

        const lblTitle = createEl('label', 'form__label', 'Title: ');
        const lblDesc = createEl('label', 'form__label', 'Desc: ');

        const inputTitle = createEl('input', 'form__input');
        const inputDesc = createEl('textarea', 'form__textarea');

        const fieldsetTaskMoreDetails = createEl('fieldset', 'modal-dialog__inputs');

        const lblChecklist = createEl('label', 'form__label', 'Checklist: ');
        const lblDueDate = createEl('label', 'form__label', 'Due Date: ');

        const inputChecklist = createEl('input', 'form__input');
        const inputDueDate = createEl('input', 'form__input');

        lblTitle.append(inputTitle);
        lblDesc.append(inputDesc);
        lblChecklist.append(inputChecklist);
        lblDueDate.append(inputDueDate);

        const deleteTaskBtn = createEl('button', 'modal-dialog__response', 'Delete');

        modalEl.append(modalTask);
        modalTask.append(formTask);
        appendChildren(formTask, [modalContainerUpper, modalContainerLower]);
        appendChildren(modalContainerUpper, [modalDialogHeader, fieldsetTaskDetails]);
        appendChildren(modalDialogHeader, [modalTaskLabel, modalDialogResponse]);
        appendChildren(modalDialogResponse, [yesBtn, noBtn]);
        modalContainerLower.append(fieldsetTaskMoreDetails);
        appendChildren(fieldsetTaskDetails, [lblTitle, lblDesc]);
        appendChildren(fieldsetTaskMoreDetails, [lblChecklist, lblDueDate, deleteTaskBtn]);
        return modalEl;
    }
    //function createTaskChecklists()
    //function createFieldset() {}
    const initialize = () => createEl('div', ['modal', 'hide-modal']);
    return {
        initialize,
        createActionConfirmation,
        createModalTask
    };
})();
const Footer = (() => {
    const initialize = () => {
        const footerEl = createEl('footer', ['footer', 'centered']);
        const footerContent = createCustomElement('a', 'footer-content', {
            textContent: '© B.B. Antipolo ' + new Date().getFullYear(),
            href: 'https://github.com/bvrbryn445'
        });
        footerEl.append(footerContent);
        return footerEl;
    }
    return { initialize };
})();

export { Sidebar, Ribbon, Header, Main, Footer, Modal }