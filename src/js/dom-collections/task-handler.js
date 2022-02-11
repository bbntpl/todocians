import {
    createCustomElement,
    createEl,
    createImg,
    appendChildren,
} from '../../helpers';

import {
    showTaskFormIfProjectIsActive,
} from '../controller';
import Todo from '../todo';
import DOMController from '../dom-controller';
import calendarMonth from '../../assets/icons/calendar-month.svg';
import chevronDown from '../../assets/icons/chevron-down.svg';

const TaskHandler = (() => {
    const _filterSelectors = () => {
        const taskFilterEl = createCustomElement('select', 'task-filter-btn', {
            name: 'task-filter',
            id: 'task-filter-btn'
        });
        const optionScheduled = createCustomElement('option', 'task-filter-options', {
            text: 'All tasks',
            value: 'all'
        })
        const optionToday = createCustomElement('option', 'task-filter-options', {
            text: 'Today',
            value: 'today'
        })
        const optionWeek = createCustomElement('option', 'task-filter-options', {
            text: 'This week',
            value: 'week'
        })
        const optionMonth = createCustomElement('option', 'task-filter-options', {
            text: 'This month',
            value: 'month'
        })
        const optionCompleted = createCustomElement('option', 'task-filter-options', {
            text: 'Active',
            value: 'active'
        })

        const taskOptions = [
            optionScheduled,
            optionToday,
            optionWeek,
            optionMonth,
            optionCompleted
        ];

        appendChildren(taskFilterEl, taskOptions);
        return taskFilterEl;
    }
    const _createOptions = () => {
        const taskHandlerOptionsEl = createEl('div', 'task-handler__options');
        const addTaskBtn = createEl('button', 'add-task-btn', 'Add task');

        appendChildren(taskHandlerOptionsEl, [addTaskBtn, _filterSelectors()]);

        addTaskBtn.addEventListener('click', showTaskFormIfProjectIsActive);
        return taskHandlerOptionsEl;
    }
    const emptyTaskMsg = createEl('div', 'task-handler__empty-msg', 'You don\'t have any tasks.');
    const _createTaskContainer = () => {
        const taskHandlerList = createEl('div', 'task-handler__list');
        return taskHandlerList;
    }

    const createTask = (i, props) => {
        const { id, title, desc, checklist, dueDate, completed, tags } = props;
        const taskWrapper = createEl('div', 'task-wrapper');
        const taskBar = createEl('div', 'task-bar');
        const taskControl = createEl('div', 'task-control');
        const taskControlInput = createCustomElement('input', `task-control-input${i + 1}`, {
            type: 'checkbox',
            id: `task-checkbox${i + 1}`,
            checked: completed
        });
        const taskControlLabel = createCustomElement('label', 'task-control-label');
        taskControlLabel.setAttribute('for', `task-checkbox${i + 1}`);

        const taskInner = createEl('div', 'task-inner');
        const taskDetails = createEl('div', 'task__details');
        const taskInstruction = createEl('section', 'task__instruction');
        const taskTitle = createEl('h2', 'task__title', title);
        const taskDesc = createEl('article', 'task__desc', desc);

        const taskDueDate = createEl('dl', 'task__due-date');
        const dueDateIconWrapper = createEl('dt', 'due-date-icon');
        const dueDateIcon = createImg('img', 'due-date-icon', calendarMonth);
        const dueDateEl = createEl('dd', 'date', dueDate.length ? dueDate : 'not set');

        const taskTags = createEl('div', 'task__tags');

        const taskExtraDetails = createEl('div', 'task__details--extra');

        const taskChecklistToggler = createEl('div', 'task-checklist-toggler');
        const taskChecklistToggleIndicator = createImg('img', 'task-checklist-indicator', chevronDown);

        const checklistWrapper = createEl('div', [`checklist-wrapper${i+1}`, 'hide']);


        appendChildren(taskWrapper, [taskBar, checklistWrapper]);
        appendChildren(taskBar, [taskControl, taskInner]);
        appendChildren(taskControl, [taskControlInput, taskControlLabel]);
        appendChildren(taskInner, [taskDetails, taskExtraDetails]);
        appendChildren(taskInstruction, [taskTitle, taskDesc]);
        appendChildren(taskDueDate, [dueDateIconWrapper, dueDateEl]);
        dueDateIconWrapper.append(dueDateIcon);
        appendChildren(taskDetails, [taskInstruction, taskTags]);
        appendChildren(taskExtraDetails, [taskDueDate, taskChecklistToggler]);
        taskChecklistToggler.append(taskChecklistToggleIndicator);

        if (tags.length) {
            tags.forEach((item) => {
                const taskTag = createTaskTag(item._name);
                taskTags.append(taskTag);
            })
        }

        if (checklist.length) {
            checklist.forEach((c, i) => {
                const props = { 
                    completed: c._completed, 
                    desc: c._desc,
                    id: c._id
                }
                const checklist = checklistBar(id, props, i+1);
                checklistWrapper.append(checklist);
            })
        }

        taskControlInput.addEventListener('click', (e) => {
            Todo.toggleTaskCompletion(e.target.checked, id)
        });

        taskInner.addEventListener('click', () => {
            showTaskFormIfProjectIsActive(props);
        });

        taskChecklistToggleIndicator.addEventListener('click', (e) => {
            e.stopPropagation();
            DOMController.toggleTaskChecklist(e, i+1);
        })

        return taskWrapper;
    }
    const checklistBar = (taskId, props, index) => {
        const { completed, desc, id } = props;
        const checklistBar = createEl('div', 'checklist-bar');
        const checklistControl = createEl('div', 'checklist-control');
        const checklistInput = createCustomElement('input', 'checklist-control-input', {
            id: `checklist-box${id}.${index}`,
            type: 'checkbox',
            checked: completed
        })
        const taskControlLabel = createCustomElement('label', 'checklist-control-label');
        taskControlLabel.setAttribute('for', `checklist-box${id}.${index}`);
        const checklistTitleWrapper = createEl('section', 'task__instruction');
        const checklistTitle = createEl('p', 'task__title', desc);

        appendChildren(checklistBar, [checklistControl, checklistTitleWrapper]);
        appendChildren(checklistControl, [checklistInput, taskControlLabel]);
        checklistTitleWrapper.append(checklistTitle);

        checklistInput.addEventListener('click', (e) => {
            const ids = { taskId: taskId, checklistId: id };
            Todo.toggleChecklistCompletion(e.target.checked, ids);
        })
        return checklistBar;
    }
    const createTaskTag = (tag) => createEl('div', 'task-tag', tag);
    const initialize = () => {
        const mainEl = createEl('main', 'main');
        const taskContainer = _createTaskContainer();

        const mainElementChildren = [
            _createOptions(),
            emptyTaskMsg,
            taskContainer
        ]

        appendChildren(mainEl, mainElementChildren);
        return mainEl;
    };
    return { initialize, createTask, createTaskTag, checklistBar };
})();

export { TaskHandler };