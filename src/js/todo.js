import { Project } from "./project";
import { Tag } from "./tag";
import {
    updateLocalStorage,
    getItemFromLocal,
    deleteLocalStorage
} from "./storage";
import { Task } from "./task";
import { Checklist } from "./checklist";

//DATABASE OF THE TODO APP
const TODO_DATA = {
    active: {
        projectId: '',
        tagIds: []
    },
    filter: {
        task: '',
        folder: 'scheduled'
    },
    filteredProjects: function (filterName) {
        const projects = [...this.projects];
        if (!filterName) return projects;
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
    filteredTags: function (filterName) {
        const tags = [...this.tags];
        if (!filterName) return tags;
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

//TODO MODULE PATTERN
const Todo = (() => {
    const _data = TODO_DATA;

    const addProject = (prjName) => {
        _data.projects.push(new Project(prjName));
        updateLocalStorage('projects', _data.projects);
    }

    const addTag = (tagName) => {
        _data.tags.push(new Tag(tagName));
        updateLocalStorage('tags', _data.tags);
    }

    const alphabetRegex = (str) => /^[a-zA-Z](.|\s)*$/.test(str);

    const deleteData = () => {
        _data.projects = [];
        _data.tags = [];
        deleteLocalStorage('projects');
        deleteLocalStorage('tags');
    }

    const deleteProject = (id) => {
        const index = findIndexOfObj(_data.projects, '_id', id);
        _data.projects.splice(index, 1);
        updateLocalStorage('projects', _data.projects);
    }

    const deleteTag = (id) => {
        const index = findIndexOfObj(_data.tags, '_id', id);
        _data.tags.splice(index, 1);
        updateLocalStorage('tags', _data.tags);
    }

    const findIndexOfObj = (arr, prop, val) => {
        return arr.findIndex(v => v[prop] === val);
    }

    // const getObjOfArray = (args) => {
    //     const { id, array } = args;
    //     findIndexOfObj()
    // }

    const getAllTasks = () => {
        const projects = getFilteredProjects();
        return projects.reduce((tasks, task) => tasks.concat(task), []);
    }

    const getFilteredProjects = (filterName) => {
        return _data.filteredProjects(filterName);
    }

    const getFilteredTags = (filterName) => {
        return _data.filteredTags(filterName);
    }

    const getTasks = () => {
        const project = _data.projects;
        const projectId = _data.active.projectId;
        const prjIndex = findIndexOfObj(_data.projects, '_id', projectId);
        return project[prjIndex]._tasks;
    }

    const setProjectNameById = (e, id) => {
        const newName = e.target.value;
        const index = findIndexOfObj(_data.projects, '_id', id);
        _data.projects[index]._name = newName;
        updateLocalStorage('projects', _data.projects);
    }

    const setTask = (id, props) => {
        const { title, desc, checklist, dueDate, tags } = props;
        const { name, completed } = setChecklist(checklist);
        const prjIndex = findIndexOfObj(_data.projects, '_id', id);
        const currentProjectTasks = _data.projects[prjIndex]._tasks;
        const newChecklist = new Checklist(name, completed);
        const newTask = new Task(title, desc, newChecklist, dueDate, tags);
        currentProjectTasks.push(newTask);
        
        updateLocalStorage('projects', _data.projects);
    }

    const setChecklist = (checklist) => {
        return checklist.reduce((arr, obj) => {
            const checklistItem = {
                name: obj.desc,
                completed: obj.completed
            }
            arr.push(checklistItem);
        }, [])
    }

    const editTask = (ids, props) => {
        const { prjId, tskId } = ids;
        const { title, desc, checklist, dueDate } = props;
        const prjIndex = findIndexOfObj(_data.projects, '_id', prjId);
        const tskIndex = findIndexOfObj(_data.projects[prjIndex], '_id', tskId);
        
        //update the task with the new received inputs
        _data.projects[prjIndex].tasks[tskIndex]
        .title(title)
        .desc(desc)
        .checklist(checklist)
        .dueDate(dueDate)

        updateLocalStorage('projects', _data.projects);
    }

    const isProjectActive = (id) => {
        return _data.active.projectId == id;
    }

    const isTagActive = (id) => {
        return _data.active.tagIds.find(v => v == id);
    }

    const getTags = () => _data.tags;

    const getFolderFilter = () => _data.filter.folder;

    const getProjectId = () => _data.active.projectId;

    const setProjectId = (id) => _data.active.projectId = id;

    const pushActiveTags = (id) => _data.active.tagIds.push(id);

    const deselectTag = (id) => {
        const tagIds = _data.active.tagIds;
        const index = tagIds.indexOf(id);
        if (index > -1) {
            tagIds.splice(index, 1);
        }
    };

    const getTagIds = () => _data.active.tagIds;

    const setFolderFilter = (id) => _data.filter.folder = id;

    const setTaskFilter = (id) => _data.filter.task = id;

    return {
        addProject,
        addTag,
        alphabetRegex,
        deleteData,
        deleteProject,
        deleteTag,
        deselectTag,
        editTask,
        findIndexOfObj,
        getAllTasks,
        getFilteredProjects,
        getFilteredTags,
        getFolderFilter,
        getProjectId,
        getTagIds,
        getTags,
        getTasks,
        isProjectActive,
        isTagActive,
        pushActiveTags,
        setFolderFilter,
        setProjectId,
        setProjectNameById,
        setTask,
        setTaskFilter,
    };
})();


export default Todo;