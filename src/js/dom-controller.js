import { Sidebar, Modal } from './dom-collections';

import chevronRight from '../assets/icons/chevron-right.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';
import { appendChildren } from '../helpers';

//These functions changes the properties of elements
//They're primarily for UI elements manipulation
const DOMController = (() => {
    let _isSidebarCollapsed = false;
    let _selectedFolder = 'prj'; //prj or tag
    const _projectNote = 'Note: Simply \‘enter\’ on input to add a new project only if the characters are alphabet.';
    const _tagNote = 'Note: You can select multiple tags to display the tasks that are associated with them.';

    const toggleSidebar = (e) => {
        _isSidebarCollapsed = !_isSidebarCollapsed;
        if (_isSidebarCollapsed) {
            e.target.src = chevronRight;
            document.documentElement.style.setProperty('--sidebar-width', '0px');
        } else {
            e.target.src = chevronLeft;
            document.documentElement.style.setProperty('--sidebar-width', '280px');
        }
    }
    const removeActiveChildNodes = (e) => {
        const className = e.target.className.split(' ');
        const siblings = document.querySelectorAll(`.${className[0]}`);
        siblings.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active')
    }
    const toggleActive = (e) => {
        e.target.classList.toggle('active');
    }
    const emptyInput = (e) => {
        e.target.value = '';
        e.target.focus = true;
    }
    const _renderFolder = (note, placeholder) => {
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
            _renderFolder(_projectNote, 'Add Project');
        } else {
            _selectedFolder = 'tag';
            _renderFolder(_tagNote, 'Add Tag')
        }
    }
    const getSelectedFolder = () => _selectedFolder;
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
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    const displayCurrentProject = (name) => {
        const projectName = document.querySelector('.project__title--large');
        projectName.textContent = name;
    }
    const hideModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('show-modal');
        modal.classList.add('hide-modal');
    }
    const showModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.add('show-modal');
        modal.classList.remove('hide-modal');
    }
    const displayActionConfirmation = (action, item) => {
        const modal = document.querySelector('.modal');
        modal.append(Modal.createActionConfirmation(action, item));
    }
    const getProjectNote = () => _projectNote;
    const renderTask = () => {

    }

    const addChecklist = () => {

    }

    const renderFolderTabs = () => {

    }

    const renderTasks = () => {

    }
    return {
        displayActionConfirmation,
        displayCurrentProject,
        emptyInput,
        getProjectNote,
        getSelectedFolder,
        hideModal,
        renderProjects,
        renderTags,
        removeAllChildNodes,
        removeActiveChildNodes,
        showModal,
        switchFolder,
        toggleActive,
        toggleSidebar,
    }
})();

export default DOMController;