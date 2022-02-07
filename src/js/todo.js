import { Project } from "./project";
import {
    updateLocalStorage,
    getItemFromLocal,
    deleteLocalStorage
} from "./storage";

const Todo = (() => {
    const _data = {
        currentProject: '',
        currentFolderFilter: '',
        currentTaskFilter: '',
        filteredProjects: function(callback) {
            return this.projects.filter(callback);
        },
        filteredTags: function(callback) {
            return this.tags.filter(callback);
        },
        projects: getItemFromLocal('projects') || [],
        tags: getItemFromLocal('tags') || [],
    }
    const addProject = (prjName) => {
        _data.projects.push(new Project(prjName));
        updateLocalStorage('projects', _data.projects);
    }
    const addTag = (tagName) => {
        _data.tags.push(tagName);
        console.log(_data.filteredProjects);
        updateLocalStorage('tags', _data.tags);
    }
    const deleteProject = (i) => {
        _data.projects.splice(i, 1); 
        updateLocalStorage('projects', _data.projects);
    }
    const deleteTag = (i) => {
        _data.tag.splice(i, 1); 
        updateLocalStorage('tags', _data.tags);
    }
    const deleteData = () => {
        _data.projects = [];
        _data.tags = [];
        deleteLocalStorage('projects');
        deleteLocalStorage('tags');
    }
    const filterByAll = () => {
        
    }
    const setCurrentProject = (id) => _data.currentProject = id;
    const getProjects = () => _data.projects;
    const getTags = () => _data.tags;
    return {
        addProject,
        addTag,
        deleteData,
        deleteProject,
        deleteTag,
        getProjects,
        getTags,
        setCurrentProject,
    };
})();


export default Todo;