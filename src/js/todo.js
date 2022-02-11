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

    const deleteTask = (taskId) => {
        const prjIndex = getFilteredPrjIndex(getProjectId());
        const taskIndex = getFilteredTaskIndex(taskId);
        _data.projects[prjIndex]._tasks.splice(taskIndex, 1);
        updateLocalStorage('projects', _data.projects);
    }

    const findIndexOfObj = (arr, prop, val) => {
        return arr.findIndex(v => v[prop] === val);
    }

    const getAllTasks = () => {
        const projects = getFilteredProjects();
        return projects.reduce((tasks, prj) => tasks.concat(prj._tasks), []);
    }

    const getFilteredProjects = (filterName) => {
        const projects = [..._data.projects];
        if (!filterName) return projects;
        if (filterName.includes('__az')) {
            return sortByAscending(projects);
        } else if (filterName.includes('__size')) {
            return sortPrjsBySize(projects);
        } else if (filterName.includes('__inactive')) {
            return sortPrjsByInactivity();
        } else {
            return projects;
        }
    }

    const getFilteredTags = (filterName) => {
        const tags = [..._data.tags];
        if (!filterName) return tags;
        if (filterName.includes('__az')) {
            return sortByAscending(tags);
        } else if (filterName.includes('__size')) {
            return tags.sort((a, b) => {
                return a._tasks.length > b._tasks.length ? 1 : -1;
            })
        } else if (filterName.includes('__inactive')) {
            return tags;
        } else {
            return tags;
        }
    }

    const getFilteredTasks = () => {
        const tags = [..._data.tags];
        if (!filterName) return tags;
        if (filterName.includes('__az')) {
            return sortByAscending(tags);
        } else if (filterName.includes('__size')) {
            return tags.sort((a, b) => {
                return a._tasks.length > b._tasks.length ? 1 : -1;
            })
        } else if (filterName.includes('__inactive')) {
            return tags;
        } else {
            return tags;
        }
    }

    const sortByAscending = (arr) => {
        return arr.sort((a, b) => {
            return a._name.toLowerCase() > b._name.toLowerCase() ? 1 : -1;
        });
    }

    const sortPrjsBySize = () => {
        return [..._data.projects].sort((a, b) => {
            return a._tasks.length < b._tasks.length ? 1 : -1;
        });
    }
    const sortPrjsByInactivity = () => {
        return [..._data.projects].filter(prj => prj._tasks.length && prj._tasks.every(task => task._completed));
    }
    const sortTagsBySize = () => {

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

    const sumContainedTagOnTasks = (tagId) => {
        return []
    }

    const setTask = (id, props) => {
        const { title, desc, checklist, dueDate, tags } = props;
        const newChecklist = setChecklist(checklist);
        const prjIndex = findIndexOfObj(_data.projects, '_id', id);
        const currentProjectTasks = _data.projects[prjIndex]._tasks;
        const newTask = new Task(title, desc, newChecklist, dueDate, tags);
        currentProjectTasks.push(newTask);
        updateLocalStorage('projects', _data.projects);
    }

    const setChecklist = (checklist) => {
        return checklist.reduce((arr, obj) => {
            const checklistItem = new Checklist(obj.desc, obj.completed);
            arr.push(checklistItem);
            return arr;
        }, [])
    }

    const editTask = (taskId, props) => {
        const { title, desc, checklist, dueDate, tags } = props;
        const prjId = getProjectId();
        const { prjIndex, taskIndex }
            = getFilteredPrjAndTaskIndexes({ prjId, taskId });

        //update the task with the new received inputs
        _data.projects[prjIndex]._tasks[taskIndex]._title = title;
        _data.projects[prjIndex]._tasks[taskIndex]._desc = desc;
        _data.projects[prjIndex]._tasks[taskIndex]._dueDate = dueDate;
        _data.projects[prjIndex]._tasks[taskIndex]._tags = tags;
        const cList = _data.projects[prjIndex]._tasks[taskIndex]._checklist;
        cList.map((c) =>{
            c.desc = checklist.desc;
            c.completed = checklist.completed;
        })
        updateLocalStorage('projects', _data.projects);
    }

    const toggleTaskCompletion = (toggleBox, taskId) => {
        const prjIndex = getFilteredPrjIndex(getProjectId());
        const taskIndex = getFilteredTaskIndex(taskId);
        _data.projects[prjIndex]._tasks[taskIndex]._completed = toggleBox;
        updateLocalStorage('projects', _data.projects);
    }

    const toggleChecklistCompletion = (toggleBox, ids) => {
        const prjIndex = getFilteredPrjIndex(getProjectId());
        const taskIndex = getFilteredTaskIndex(ids.taskId);
        const checklistIndex = getFilteredChecklistIndex(ids);
        _data.projects[prjIndex]._tasks[taskIndex]._checklist[checklistIndex]._completed = toggleBox;
        updateLocalStorage('projects', _data.projects);
    }

    const getFilteredPrjIndex = (prjId) => {
        return findIndexOfObj(_data.projects, '_id', prjId);
    }
    
    const getFilteredTaskIndex = (taskId) => {
        const prjIndex = getFilteredPrjIndex(getProjectId());
        return findIndexOfObj(_data.projects[prjIndex]._tasks, '_id', taskId);
    }

    const getFilteredChecklistIndex = ({taskId, checklistId}) => {
        const prjIndex = getFilteredPrjIndex(getProjectId());
        const tskIndex = getFilteredTaskIndex(taskId);
        const checklistPath = _data.projects[prjIndex]._tasks[tskIndex]._checklist;
        return findIndexOfObj(checklistPath, '_id', checklistId);
    }

    const getFilteredPrjAndTaskIndexes = (ids) => {
        const { prjId, taskId } = ids;
        return {
            prjIndex: getFilteredPrjIndex(prjId),
            taskIndex: getFilteredTaskIndex(taskId)
        }
    }

    const showAddTodoTexts = () => {
        return {
            legend: 'Add todo',
            title: '',
            desc: '',
            checklist: [],
            dueDate: ''
        }
    }

    const showEditTodoTexts = (props) => {
        const { title, desc, checklist, dueDate } = props;
        return {
            legend: 'Edit todo',
            title: title,
            desc: desc,
            checklist: checklist,
            dueDate: dueDate
        }
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
        deleteTask,
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
        showAddTodoTexts,
        showEditTodoTexts,
        toggleTaskCompletion,
        toggleChecklistCompletion
    };
})();

export default Todo;