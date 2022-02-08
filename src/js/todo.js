import { Project } from "./project";
import { Tag } from "./tag";
import {
    updateLocalStorage,
    getItemFromLocal,
    deleteLocalStorage
} from "./storage";

const Todo = (() => {
    const _data = {
        active: {
            project: '',
            tag: []
        },
        filter: {
            task: '',
            folder: ''
        },
        filteredProjects: function(filterName) {
            const projects = [...this.projects];
            if(!filterName) return projects;
            if (filterName.includes('__az')) {
                return projects.sort((a, b) => {
                    return a._name > b._name ? 1 : -1;
                })
            } else if (filterName.includes('__size')) {
                return projects.sort((a, b) => {
                    return a._tasks.length > b._tasks.length ? 1 : -1;
                })
            } else if (filterName.includes('__inactive')) {
                return projects;
            } else {
                return projects;
            }
        },
        filteredTags: function(filterName) {
            const tags = [...this.tags];
            if(!filterName) return tags;
            if (filterName.includes('__az')) {
                return tags.sort((a, b) => {
                    return a._name > b._name ? 1 : -1;
                })
            } else if (filterName.includes('__size')) {
                return tags.sort((a, b) => {
                    return a._tasks.length > b._tasks.length ? 1 : -1;
                })
            } else if (filterName.includes('__inactive')) {
                return tags;
            } else {
                return tags;
            }
        },
        projects: getItemFromLocal('projects') || [],
        tags: getItemFromLocal('tags') || [],
    }
    const addProject = (prjName) => {
        _data.projects.push(new Project(prjName));
        updateLocalStorage('projects', _data.projects);
    }
    const addTag = (tagName) => {
        _data.tags.push(new Tag(tagName));
        updateLocalStorage('tags', _data.tags);
    }
    // const deleteProject = (i) => {
    //     _data.projects.splice(i, 1);
    //     updateLocalStorage('projects', _data.projects);
    // }
    // const deleteTag = (i) => {
    //     _data.tags.splice(i, 1);
    //     updateLocalStorage('tags', _data.tags);
    // }
    const deleteData = () => {
        _data.projects = [];
        _data.tags = [];
        deleteLocalStorage('projects');
        deleteLocalStorage('tags');
    }
    const deleteProject = (id) => {
        const projects = _data.projects;
        const index = projects.findIndex(prj => prj._id === id);
        projects.splice(index, 1);
        updateLocalStorage('projects', _data.projects);
    }
    const deleteTag = (id) => {
        const tags = _data.tags;
        const index = tags.findIndex(tag => tag._id === id);
        tags.splice(index, 1);
        updateLocalStorage('tags', _data.tags);
    }
    const getAllTasks = () => {
        const projects = getFilteredProjects();
        return projects.reduce((prev, val) => val.concat(prev), []);
    }
    const getFilteredProjects = (filterName) => {
        return _data.filteredProjects(filterName);
    };
    const getFilteredTags = (filterName) => {
        return _data.filteredTags(filterName);
    };
    const getFolderFilter = () => _data.filter.folder;
    const setCurrentProject = (id) => _data.currentPrj = id;
    const pushActiveTags = (id) => _data.active.tags.push(id);
    const deselectTag = (id) => _data.active.tags.push(id);
    const setFolderFilter = (id) => _data.filter.folder = id;
    const setTaskFilter = (id) => _data.filter.task = id;
    return {
        addProject,
        addTag,
        deleteData,
        deleteProject,
        deleteTag,
        deselectTag,
        getFilteredProjects,
        getFilteredTags,
        getFolderFilter,
        pushActiveTags,
        setFolderFilter,
        setTaskFilter,
        setCurrentProject,
    };
})();


export default Todo;