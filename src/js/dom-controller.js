import chevronRight from '../assets/icons/chevron-right.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';

//These functions changes the properties of elements
//They're primarily for UI elements manipulation
const DOMController = (() => {
    let _isSidebarCollapsed = false;
    // let selectedFolder = 'prj'; //prj or tag
    //text contents
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
    const rmvActiveSiblings = (e) => {
        const className = e.target.className.split(' ');
        const siblings = document.querySelectorAll(`.${className[0]}`);
        siblings.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active')
    }
    const toggleActive = (e) => {
        e.target.classList.toggle('active');
    }
    const renderFolderTab = (note, inputPlaceholder) => {

    }

    const renderTask = () => {

    }

    const addChecklist = () => {

    }

    const renderFolderTabs = () => {

    }

    const renderTasks = () => {

    }

    const initialize = () => {

    }
    return {
        toggleSidebar,
        toggleActive,
        rmvActiveSiblings
    }
})();


export default DOMController;