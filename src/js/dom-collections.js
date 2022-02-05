import {
    createEl,
    createImg,
    appendChildren
} from '../helpers';

import chevronRight from '../assets/icons/chevron-left.svg';
import prjIcon from '../assets/icons/project.svg';
import tagIcon from '../assets/icons/tag.svg';
import magnifyIcon from '../assets/icons/magnify.svg';
import logoImg from '../assets/images/logo.svg';
import editIcon from '../assets/icons/edit.svg';
import closeIcon from '../assets/icons/close.svg';
import trashIcon from '../assets/icons/trash.svg';

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
        const filterActive = createEl('div', ['filter', 'active'], 'Active');
        const filterAZ = createEl('div', 'filter', 'A-Z');
        const filterCompleted = createEl('div', 'filter', 'Completed');

        appendChildren(organizerFilters, [filterActive, filterAZ, filterCompleted]);

        return organizerFilters;
    }
    const _createFolder = () => {
        const folderEl = createEl('div', 'folder');
        const folderNote = createEl('p', 'folder__note', 'Note: Simply \‘enter\’ on input to add a new project if it is not empty.');
        const accumulatorInput = createEl('input', 'accumulator');
        const folderListEl = createEl('div', 'folder__list');
        accumulatorInput.id = 'prj-accumulator';
        accumulatorInput.placeholder = 'Add Project';
        appendChildren(folderEl, [folderNote, accumulatorInput, folderListEl]);
        return folderEl;
    }
    const createPrjTab = (text) => {
        const prjTab = createEl('div', 'folder__tab');
        const tabTitle = createEl('div', 'tab-title');
        const tabName = createEl('p', 'tab-name', text);
        const rowItemsHolder = createEl('div', 'row-items-holder');
        const editIconEl = createImg('img', 'tab-icon', editIcon);
        const trashIconEl = createImg('img', 'tab-icon', trashIcon);
        appendChildren(prjTab, [tabTitle, rowItemsHolder]);
        tabTitle.append(tabName);
        appendChildren(rowItemsHolder, [editIconEl, trashIconEl]);
        return prjTab;
    }
    const createTagTab = (text, numOfTags) => {
        const tagTab = createEl('div', 'folder__tab');
        const tabTitle = createEl('div', 'tab-title');
        const tabName = createEl('p', 'tab-name', text);
        const rowItemsHolder = createEl('div', 'row-items-holder');
        const tagIconEl = createImg('img', 'tab-icon', tagIcon);
        const totalTags = createEl('div', 'total-tags', numOfTags);
        const removeIconEl = createImg('img', 'tab-icon', closeIcon);
        appendChildren(tagTab, [tabTitle, rowItemsHolder]);
        appendChildren(tabName, [tagIconEl, tabName, totalTags]);
        rowItemsHolder.append(removeIconEl);
        return tagTab;
    }
    const initialize = () => {
        const sidebarEl = createEl('div', 'sidebar');
        const sidebarInnerEl = createEl('div', 'sidebar__inner');
        const organizerEl = createEl('div', 'organizer');
        appendChildren(sidebarEl, [_createLogo(), sidebarInnerEl]);
        appendChildren(sidebarInnerEl, [_createSearchbar(), _createFilters(), organizerEl]);
        appendChildren(organizerEl, [_createFolder()]);

        /* TEST */
        // const folderList = document.querySelector('.folder__list');
        // console.log(document.querySelector('.sidebar__inner'));
        // appendChildren(folderList, [createPrjTab('Project 01'), createPrjTab('Project 01')]);
        return sidebarEl;
    }
    return { initialize, createPrjTab, createTagTab };
})();
const Ribbon = (() => {
    const _createCollapseBtn = () => {
        const collapseBtn = createEl('div', 'collapse-wrapper');
        const collapseIcon = createImg('img', 'ribbon-icons', chevronRight);
        collapseBtn.append(collapseIcon);
        return collapseBtn;
    }

    const _createRibbonBtns = () => {
        const ribbonFolders = createEl('div', 'ribbon-folders');
        const prjIconEl = createImg('img', 'ribbon-icons', prjIcon);
        const tagIconEl = createImg('img', 'ribbon-icons', tagIcon);
        appendChildren(ribbonFolders, [prjIconEl, tagIconEl]);
        return ribbonFolders;
    }

    const initialize = () => {
        const ribbonEl = createEl('div', 'ribbon');
        appendChildren(ribbonEl, [_createCollapseBtn(), _createRibbonBtns()]);
        return ribbonEl;
    }

    return { initialize };
})();

const Header = (() => {
    const initialize = () => {
        const headerEl = createEl('header', 'header');
        const projectTitle = createEl('h1', 'project__title--large', 'Project 01');
        headerEl.append(projectTitle);
        return headerEl;
    }
    return { initialize };
})();
const Main = (() => {
    const initialize = () => createEl('main', 'main');
    return { initialize };
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

        modalEl.append(modalConfirmation);
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
    const initialize = () => createEl('div', 'modal');
    return {
        initialize,
        createActionConfirmation,
        createModalTask
    };
})();
const Footer = (() => {
    const initialize = () => {
        const footerEl = createEl('footer', ['footer', 'centered']);
        const footerContent = createEl('a', 'footer-content');
        const currentYear = new Date().getFullYear();
        footerContent.textContent = '© B.B. Antipolo ' + currentYear;
        footerEl.append(footerContent);
        footerContent.href = 'https://github.com/bvrbryn445';
        return footerEl;
    }
    return { initialize };
})();

export { Sidebar, Ribbon, Header, Main, Footer, Modal }