const DOMController = (() => {
    let _isSidebarCollapsed = true;

    //text contents
    const toggleSidebar = () => {
        _isSidebarCollapsed = !_isSidebarCollapsed;
        if(_isSidebarCollapsed){
            document.documentElement.style.setProperty('--sidebar-width', '0px');
        } else {
            document.documentElement.style.setProperty('--sidebar-width', '280px');
        }
    }
    const renderFolderTab = () => {

    }

    const renderTask = () => {

    }

    const addChecklist = () => {

    }

    const renderFolderTabs = () => {

    }

    const renderTasks = () => {

    }

    //mock up elements
    const initialize
    return {
        toggleSidebar
    }
})();


export default DOMController;