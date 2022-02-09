import {
    createCustomElement,
    createEl,
    createImg,
    appendChildren,
} from '../helpers';

import {
    alertDatabaseRemovalAction,
    removeFolderTab,
    switchFolder,
    switchFilterTab,
    getInputValueOnEnter,
    selectProjectTab,
    removeProjectTabAndView,
    toggleTagTabSelection,
    toggleEditInput,
    editProjectTab,
    customAlert,
    showTaskFormIfProjectIsActive,
    minAndMaxDates,
    addTaskToSelectedPrj,
    updateTaskHandlerView
} from './controller';
import Todo from './todo';
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
        const filterSize = createCustomElement('div', 'filter', {
            textContent: 'Size',
            id: 'folder-filter__size'
        });
        const filterFinished = createCustomElement('div', 'filter', {
            textContent: 'Inactive',
            id: 'folder-filter__inactive'
        });

        const filterTabs = [filterAll, filterAZ, filterSize, filterFinished];

        appendChildren(organizerFilters, filterTabs);

        filterTabs.forEach(e => e.addEventListener('click', switchFilterTab));

        return organizerFilters;
    }
    const _createFolder = () => {
        const folderEl = createEl('div', 'folder');
        const folderNote = createEl('p', 'folder__note', DOMController.getProjectNote());
        const accumulatorInput = createCustomElement('input', 'accumulator', {
            id: 'prj-accumulator',
            placeholder: 'Add Project'
        });
        const folderListEl = createEl('div', 'folder__list');

        appendChildren(folderEl, [folderNote, accumulatorInput, folderListEl]);

        accumulatorInput.addEventListener('keypress', getInputValueOnEnter);

        return folderEl;
    }
    const createPrjTab = ({ name, index, id }) => {
        const prjTabClass = Todo.isProjectActive(id)
            ? ['folder__tab', 'active'] : 'folder__tab';

        const prjTab = createEl('div', prjTabClass);
        const tabTitle = createEl('div', 'tab-title');
        const tabName = createEl('p', ['tab-name', 'centered'], name);
        const tabInput = createCustomElement('input', ['edit-input', 'hide'], {
            type: 'text',
            autofocus: true
        });
        const rowItemsHolder = createEl('div', 'row-items-holder');
        const editIconEl = createImg('img', 'tab-icon', editIcon);
        const trashIconEl = createImg('img', 'tab-icon', trashIcon);

        appendChildren(prjTab, [tabTitle, tabInput, rowItemsHolder]);
        appendChildren(tabTitle, [tabName]);
        appendChildren(rowItemsHolder, [editIconEl, trashIconEl]);
        tabInput.addEventListener('keypress', function (e) {
            editProjectTab(e, { id: id, inputEl: e.target, nameEl: tabName });
        });
        prjTab.addEventListener('click', function (e) {
            if (e.target !== e.currentTarget) return;
            selectProjectTab(e, id);
        });
        editIconEl.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleEditInput(tabInput, tabName);
        });
        trashIconEl.addEventListener('click', function (e) {
            e.stopPropagation();
            const action = 'delete';
            const item = name;
            const customAlertArgs = { action, item, id };
            customAlert(customAlertArgs, removeProjectTabAndView);
        });

        return prjTab;
    }
    const createTagTab = ({ name, index, id, numOfTags }) => {
        const tagTabClass = Todo.isTagActive(id)
            ? ['folder__tab', 'active'] : 'folder__tab';

        const tagTab = createEl('div', tagTabClass);
        const tabTitle = createEl('div', 'tab-title');
        const tabName = createEl('p', ['tab-name', 'centered'], name);
        const rowItemsHolder = createEl('div', 'row-items-holder');
        const tagIconEl = createImg('img', 'tab-icon', tagIcon);
        const totalTags = createEl('div', 'total-tags', `(${numOfTags})`);
        const removeIconEl = createImg('img', 'tab-icon', closeIcon);
        appendChildren(tagTab, [tabTitle, rowItemsHolder]);
        appendChildren(tabTitle, [tagIconEl, tabName, totalTags]);
        rowItemsHolder.append(removeIconEl);

        tagTab.addEventListener('click', (e) => {
            toggleTagTabSelection(e, id);
        });

        removeIconEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = 'delete';
            const item = name;
            const customAlertArgs = { action, item, id };
            customAlert(customAlertArgs, removeFolderTab);
        });

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
        collapseBtn.addEventListener('click', DOMController.toggleSidebar);
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

        appendChildren(ribbonFolders, [prjIconEl, tagIconEl]);

        [prjIconEl, tagIconEl].forEach(folderIcon => {
            folderIcon.addEventListener('click', switchFolder);
        })

        return ribbonFolders;
    }

    const _removeDatabaseBtn = () => {
        const databaseRemovalBtn = createEl('div', 'data-remove-wrapper');
        const databaseRemovalIconEl = createImg('img', 'data-remove', databaseRemovalIcon);

        databaseRemovalBtn.append(databaseRemovalIconEl);

        databaseRemovalBtn.addEventListener('click', alertDatabaseRemovalAction);
        return databaseRemovalBtn;
    }
    const initialize = () => {
        const ribbonEl = createEl('div', 'ribbon');
        const ribbonChildren = [
            _createCollapseBtn(),
            _createRibbonBtns(),
            _removeDatabaseBtn()
        ]

        appendChildren(ribbonEl, ribbonChildren);
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

        const taskOptions = [
            optionScheduled,
            optionToday,
            optionWeek,
            optionMonth,
            optionCompleted
        ];

        appendChildren(taskFilterEl, taskOptions);
        return taskFilterEl;
    }
    const _createTaskHandlerOptions = () => {
        const taskHandlerOptionsEl = createEl('div', 'task-handler__options');
        const addTaskBtn = createEl('button', 'add-task-btn', 'Add task');

        appendChildren(taskHandlerOptionsEl, [addTaskBtn, _createTaskFilterSelect()]);

        addTaskBtn.addEventListener('click', showTaskFormIfProjectIsActive);
        return taskHandlerOptionsEl;
    }
    const emptyTaskMsg = createEl('div', 'task-handler__empty-msg', 'You don\'t have any tasks.');
    const _createTaskHandlerList = () => {
        const taskHandlerList = createEl('div', 'task-handler__list');
        return taskHandlerList;
    }

    const createTask = (props) => {
        const { title, desc, checklist, dueDate, completed, tags } = props;

        const taskWrapper = createEl('div', 'task-wrapper');
        const taskBar = createEl('div', 'task-bar');
        const taskControl = createEl('div', 'task-control');
        const taskControlInput = createCustomElement('input', 'task-control-input', {
            type: 'checkbox',
            id: 'checkbox',
            value: completed
        });
        const taskControlLabel = createCustomElement('label', 'task-control-label', {
            for: 'checkbox',
        })
        const taskInner = createEl('div', 'task-inner');
        const taskDetails = createEl('div', 'task__details');
        const taskInstruction = createEl('section', 'task__instruction');
        const taskTitle = createEl('h2', 'task__title', title);
        const taskDesc = createEl('article', 'task__desc', desc);

        const taskDueDate = createEl('dl', 'task__due-date');
        const dueDateIconWrapper = createEl('dt', 'due-date-icon');
        const dueDateIcon = createImg('img', 'due-date-icon', calendarMonth);
        const dueDateEl = createEl('dd', 'date', dueDate.length ? dueDate : 'not set');

        const taskTags = createEl('div', 'task__tags');

        const taskExtraDetails = createEl('div', 'task__details--extra');
        const taskTotalChecklist = createEl('div', 'task__total-checklist');
        const taskChecklistToggler = createEl('div', 'task-checklist-toggler');

        const checklistWrapper = createEl('div', 'checklist-wrapper');

        taskControlLabel.setAttribute('for', 'checkbox');

        appendChildren(taskWrapper, [taskBar, checklistWrapper]);
        appendChildren(taskBar, [taskControl, taskInner]);
        appendChildren(taskControl, [taskControlInput, taskControlLabel]);
        appendChildren(taskInner, [taskDetails, taskExtraDetails]);
        appendChildren(taskInstruction, [taskTitle, taskDesc,]);
        appendChildren(taskDueDate, [dueDateIconWrapper, dueDateEl]);
        dueDateIconWrapper.append(dueDateIcon);
        appendChildren(taskDetails, [taskInstruction, taskTags]);
        appendChildren(taskExtraDetails, [taskDueDate, taskTotalChecklist, taskChecklistToggler]);

        if (tags.length) {
            tags.forEach((item) => {
                const taskTag = createTaskTag(item._desc);
                taskTags.append(taskTag);
            })
        }

        if (checklist.length) {
            checklist.forEach((c) => {
                const props = { completed: c.completed, desc: c.desc }
                const checklist = checklistBar(props);
                checklistWrapper.append(checklist);
            })
        }

        return taskWrapper;
    }
    const checklistBar = (props) => {
        const { completed, desc } = props;
        const taskTag = createEl('div', 'checklist-bar');
        const checklistBar = createEl('div', 'checklist-bar');
        const checklistControl = createEl('div', 'checklist-control');
        const checklistInput = createCustomElement('input', 'checklist-control-input', {
            type: 'checkbox',
            value: completed
        })
        const checklistTitleWrapper = createEl('div', 'task-inner');
        const checklistTitle = createEl('p', 'task__title', desc);

        appendChildren(checklistBar, [checklistControl, checklistTitleWrapper]);
        checklistControl.append(checklistInput);
        checklistTitleWrapper.append(checklistTitle);
        return taskTag;
    }
    const createTaskTag = (tag) => createEl('div', 'task-tag', tag);
    const initialize = () => {
        const mainEl = createEl('main', 'main');
        const taskHandlerList = _createTaskHandlerList();

        const mainElementChildren = [
            _createTaskHandlerOptions(),
            emptyTaskMsg,
            taskHandlerList
        ]

        appendChildren(mainEl, mainElementChildren);
        return mainEl;
    };
    return { initialize, createTask, createTaskTag, checklistBar };
})();
const Modal = (() => {
    const _createTitleInput = (title) => {
        const lblTitle = createEl('label', 'form__label', 'Title: ');
        const inputTitle = createCustomElement('input', 'form__input', {
            required: true,
            id: 'task-input-title',
            value: title
        });
        lblTitle.append(inputTitle);
        return lblTitle;
    }
    const _createDescTextarea = (desc) => {
        const lblDesc = createEl('label', 'form__label', 'Desc: ');
        const inputDesc = createCustomElement('textarea', 'form__textarea', {
            resize: 'none',
            id: 'task-input-desc',
            value: desc
        });

        lblDesc.append(inputDesc);
        return lblDesc;
    }

    const _createChecklist = (checklists) => {
        const checklistArray = [];

        const lblChecklist = createEl('label', 'form__label', 'Checklist: ');
        const checklistWrapper = createEl('div', 'task-checklist-wrapper');
        const inputChecklist = createEl('input', 'form__input');
        const checklistList = createEl('ul', 'task-checklist');

        lblChecklist.append(checklistWrapper);
        appendChildren(checklistWrapper, [inputChecklist, checklistList]);

        return lblChecklist;
    }

    const createChecklistItem = () => {
        const checklistItem = createEl('li', 'task-checklist-item');
        const minitaskCheckbox = createCustomElement('input', 'task-checklist-completed', {
            type: 'checkbox',
        })
        const minitaskName = createEl('input', 'task-checklist-name', {
            placeholder: 'Add new checklist'
        });
        const minitaskDeleteBtn = createImg('img', 'checklist-delete-btn', trashIcon);

        appendChildren(checklistItem, [minitaskCheckbox, minitaskName, minitaskDeleteBtn]);

        return checklistItem;
    }

    const _createDueDateInput = (value) => {
        const lblDueDate = createEl('label', 'form__label', 'Due Date: ');
        const inputDueDate = createCustomElement('input', 'form__input', {
            type: 'date',
            min: minAndMaxDates('yyyy-MM-dd').min,
            max: minAndMaxDates('yyyy-MM-dd').max,
            id: 'task-input-duedate'
        });
        lblDueDate.append(inputDueDate);
        return lblDueDate;
    }

    const _createTagWrapper = (taskTag) => {
        const lblDueDate = createEl('label', 'form__label', 'Tags: ');
        const checklistWrapper = createEl('div', 'task-tags-wrapper');

        lblDueDate.append(checklistWrapper);

        Todo.getTags().forEach((tag) => {
            checklistWrapper.append(_createTag(tag, taskTag));
        })

        return lblDueDate;
    }

    const _createTag = (tag, taskTag) => {
        const tagDiv = createEl('div', 'ck-btn');
        const tagLabel = createEl('label', 'ck-lbl');
        const tagCheckbox = createCustomElement('input', 'ck-input', {
            type: 'checkbox',
            value: taskTag.includes(tag)

        })
        const tagName = createEl('span', 'ck-name', tag._name);

        tagDiv.append(tagLabel);
        appendChildren(tagLabel, [tagCheckbox, tagName]);

        return tagDiv;  
    }

    function createModalTask(props = '') {
        const modalTask = createEl('div', 'modal__task');
        const formTask = createEl('form', 'form__task');

        const modalContainerUpper = createEl('div', 'modal-container__upper');
        const modalContainerLower = createEl('div', 'modal-container__lower');

        const modalDialogHeader = createEl('div', 'modal-dialog__header');
        const modalTaskLabel = createCustomElement('legend', 'modal__task-label', {
            textContent: props.legend || 'Add todo'
        });
        const modalDialogResponse = createEl('div', 'modal-dialog__response');
        const saveBtn = createCustomElement('button', 'response-btn', {
            textContent: 'Save',
            type: 'submit'
        });
        const cancelBtn = createEl('button', 'response-btn', 'Cancel');

        const fieldsetPrimaryDetails = createEl('fieldset', 'modal-dialog__inputs');
        const fieldsetSecondaryDetails = createEl('fieldset', 'modal-dialog__inputs');
        const deleteTaskBtn = createEl('button', 'modal-dialog__response', 'Delete');

        const primaryInputs = [
            _createTitleInput(props.title || ''),
            _createDescTextarea(props.desc || '')
        ];
        const secondaryInputs = [
            _createChecklist(props.checklist || []),
            _createDueDateInput(props.dueDate || ''),
            _createTagWrapper(props.tags || []),
            deleteTaskBtn
        ];

        modalTask.append(formTask);
        appendChildren(formTask, [modalContainerUpper, modalContainerLower]);
        appendChildren(modalContainerUpper, [modalDialogHeader, fieldsetPrimaryDetails]);
        appendChildren(modalDialogHeader, [modalTaskLabel, modalDialogResponse]);
        appendChildren(modalDialogResponse, [saveBtn, cancelBtn]);
        modalContainerLower.append(fieldsetSecondaryDetails);
        appendChildren(fieldsetPrimaryDetails, primaryInputs);
        appendChildren(fieldsetSecondaryDetails, secondaryInputs);

        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (props.length) {

            } else {
                addTaskToSelectedPrj();
            }
            updateTaskHandlerView();
        })
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            DOMController.hideTaskForm();
        });
        return modalTask;
    }
    const initialize = () => {
        const modalEl = createEl('div', ['modal-overlay', 'hide']);

        modalEl.addEventListener('click', (e) => {
            if (e.currentTarget !== e.target) return;
            e.stopPropagation();
            DOMController.hideTaskForm();
        });

        return modalEl;
    };
    return {
        initialize,
        createModalTask,
        createChecklistItem
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