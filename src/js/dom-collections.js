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
const Sidebar = (() => {
    const sidebarEl = createEl('div', 'sidebar');

    //children of sidebar element
    const logoEl = createImg('img', 'logo', logoImg);
    const sidebarInnerEl = createEl('div', 'sidebar__inner');

    //children of sidebar inner element
    const searchbarEl = createEl('div', 'searchbar');
    const organizerEl = createEl('div', 'organizer');

    //children of searchbar element
    const magnifyIconEl = createImg('img', 'searchbar-icon', magnifyIcon);
    const searchbarInput = createEl('input', 'searchbar-input');

    //children of organizer element
    const organizerFilters = createEl('div', 'organizer__filter');
    const filterActive = createEl('div', ['filter', 'active'], 'Active');
    const filterAZ = createEl('div', 'filter', 'A-Z');
    const filterCompleted = createEl('div', 'filter', 'Completed');

    const folderEl = createEl('div', 'folder');

    //children of folder element
    const folderNote = createEl('p', 'folder__note', 'Note: Simply \‘enter\’ on input to add a new project if it is not empty.');
    const accumulatorInput = createEl('input', 'accumulator');
    const folderListEl = createEl('div', 'folder__list');

    searchbarInput.id = 'prj-search';
    accumulatorInput.id = 'prj-accumulator';
    accumulatorInput.placeholder = 'Add project';
    appendChildren(sidebarEl, [logoEl, sidebarInnerEl]);
    appendChildren(sidebarInnerEl, [searchbarEl, organizerFilters, organizerEl]);
    appendChildren(searchbarEl, [magnifyIconEl, searchbarInput]);
    appendChildren(organizerEl, [folderEl]);
    appendChildren(organizerFilters, [filterActive, filterAZ, filterCompleted]);
    appendChildren(folderEl, [folderNote, accumulatorInput, folderListEl]);

    return sidebarEl;
})();
const Ribbon = (() => {
    const ribbonEl = createEl('div', 'ribbon');
    const collapseBtn = createEl('div', 'collapse-wrapper');
    const ribbonFolders = createEl('div', 'ribbon-folders');

    //image elements
    const collapseIcon = createImg('img', 'ribbon-icons', chevronRight);
    const prjIconEl = createImg('img', 'ribbon-icons', prjIcon);
    const tagIconEl = createImg('img', 'ribbon-icons', tagIcon);

    collapseBtn.append(collapseIcon);
    appendChildren(ribbonFolders, [prjIconEl, tagIconEl]);
    appendChildren(ribbonEl, [collapseBtn, ribbonFolders]);

    return ribbonEl;
})();

const Header = (() => {
    const headerEl = createEl('header', 'header');
    const projectTitle = createEl('h1', 'project__title--large', 'Project 01');
    headerEl.append(projectTitle);
    return headerEl;
})();
const Main = (() => {
    const mainEl = createEl('main', 'main');
    return mainEl;
})();
const Modal = (() => {
    const modalEl = createEl('div', 'modal');

    //- function later
    const modalConfirmation = createEl('div', 'modal__confirmation');
    const modalContainerUpper = createrEl('div', 'modal-container__upper');
    const modalContainerLower = createrEl('div', 'modal-container__lower');

    appendChildren()
    
    return modalEl;
})();
const Footer = (() => {
    const footerEl = createEl('footer', ['footer', 'centered']);
    const footerContent = createEl('a', 'footer-content');
    const currentYear = new Date().getFullYear();
    footerContent.textContent = '© B.B. Antipolo ' + currentYear;
    footerEl.append(footerContent);
    footerContent.href ='https://github.com/bvrbryn445';
    return footerEl;
})();
export { Sidebar, Ribbon, Header, Main, Footer, Modal }