import {
    createCustomElement,
    createEl,
    createImg,
    appendChildren,
} from '../../helpers';

import {
    removeFolderTab,
    switchFilterTab,
    getInputValueOnEnter,
    selectProjectTab,
    removeActiveProjectView,
    toggleTagTabSelection,
    toggleEditInput,
    editProjectTab,
    customAlert,
} from '../controller';
import Todo from '../todo';
import DOMController from '../dom-controller';

import tagIcon from '../../assets/icons/tag.svg';
import magnifyIcon from '../../assets/icons/magnify.svg';
import logoImg from '../../assets/images/logo.svg';
import editIcon from '../../assets/icons/edit.svg';
import closeIcon from '../../assets/icons/close.svg';
import trashIcon from '../../assets/icons/trash.svg';

const Sidebar = (() => {
    const _createLogo = () => createImg('img', 'logo', logoImg);
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
            textContent: 'Completed',
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
            customAlert(customAlertArgs, removeActiveProjectView);
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
        appendChildren(sidebarInnerEl, [_createFilters(), organizerEl]);
        appendChildren(organizerEl, [_createFolder()]);

        return sidebarEl;
    }
    return { initialize, createPrjTab, createTagTab };
})();

export { Sidebar };