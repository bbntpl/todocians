import {
    createCustomElement,
    createEl,
    createImg,
    appendChildren,
} from '../../helpers';

import {
    minAndMaxDates,
    addTaskToSelectedPrj,
    updateTaskHandlerView,
    matchLinkedTagsToTask,
    editTaskToSelectedPrj
} from '../controller';
import Todo from '../todo';
import DOMController from '../dom-controller';

import trashIcon from '../../assets/icons/trash.svg';

const TaskForm = (() => {
    const _createTitleInput = (title) => {
        const lblTitle = createEl('label', 'form__label', 'Title: ');
        const inputTitle = createCustomElement('input', 'form__input', {
            id: 'task-input-title',
            value: title
        });
        inputTitle.setAttribute('required', true);
        lblTitle.append(inputTitle);
        return lblTitle;
    }
    const _createDescTextarea = (desc) => {
        const lblDesc = createEl('label', 'form__label', 'Desc: ');
        const inputDesc = createCustomElement('textarea', 'form__textarea', {
            resize: 'none',
            id: 'task-input-desc',
            value: desc
        });

        lblDesc.append(inputDesc);
        return lblDesc;
    }

    const _createChecklist = (checklists = '') => {
        const lblChecklist = createEl('label', 'form__label', 'Checklist: ');
        const checklistWrapper = createEl('div', 'task-checklist-wrapper');
        const inputChecklist = createCustomElement('input', ['form__input', 'add-checklist-input'], {
            placeholder: 'Add new checklist'
        });
        const checklistList = createEl('ul', 'task-checklist');

        lblChecklist.append(checklistWrapper);
        appendChildren(checklistWrapper, [inputChecklist, checklistList]);

        if (checklists.length) {
            checklists.forEach((checklist) => {
                checklistList.append(createChecklistItem(checklist));
            });
        }

        inputChecklist.addEventListener('keypress', e => {
            if (e.key === 'Enter' && e.target.value) {
                const checklistObj = {
                    completed: false,
                    desc: e.target.value
                }
                checklistList.append(createChecklistItem(checklistObj));
                e.target.value = '';
                return false;
            }
        });
        return lblChecklist;
    }

    const createChecklistItem = (checklist) => {
        const { completed, desc } = checklist;
        const checklistItem = createEl('li', 'task-checklist-item');
        const minitaskCheckbox = createCustomElement('input', 'task-checklist-completed', {
            type: 'checkbox',
            value: completed
        })
        const minitaskName = createCustomElement('input', 'task-checklist-name', {
            value: desc
        });
        const minitaskDeleteBtn = createImg('img', 'checklist-delete-btn', trashIcon);

        minitaskDeleteBtn.addEventListener('click', e => {
            e.parentElement.remove();
        })
        appendChildren(checklistItem, [minitaskCheckbox, minitaskName, minitaskDeleteBtn]);

        return checklistItem;
    }

    const _createDueDateInput = (value) => {
        const lblDueDate = createEl('label', 'form__label', 'Due Date: ');
        const inputDueDate = createCustomElement('input', 'form__input', {
            type: 'date',
            min: minAndMaxDates('yyyy-MM-dd').min,
            max: minAndMaxDates('yyyy-MM-dd').max,
            id: 'task-input-duedate',
            value: value
        });
        lblDueDate.append(inputDueDate);
        return lblDueDate;
    }

    const _createTagWrapper = (taskTags) => {
        const lblDueDate = createEl('label', 'form__label', 'Tags: ');
        const checklistWrapper = createEl('div', 'task-tags-wrapper');

        lblDueDate.append(checklistWrapper);

        Todo.getTags().forEach((tag) => {
            checklistWrapper.append(_createTag(tag, taskTags));
        })

        return lblDueDate;
    }

    const _createTag = (tag, taskTags) => {
        const tagDiv = createEl('div', 'ck-btn');
        const tagLabel = createEl('label', 'ck-lbl');
        const tagCheckbox = createCustomElement('input', 'ck-input', {
            type: 'checkbox',
            checked: matchLinkedTagsToTask(tag, taskTags)
        })
        const tagName = createEl('span', 'ck-name', tag._name);

        tagDiv.append(tagLabel);
        appendChildren(tagLabel, [tagCheckbox, tagName]);

        return tagDiv;
    }

    function createModalTask(props = '') {
        const modalTask = createEl('div', 'modal__task');
        const formTask = createEl('form', 'form__task');

        const modalContainerUpper = createEl('div', 'modal-container__upper');
        const modalContainerLower = createEl('div', 'modal-container__lower');

        const modalDialogHeader = createEl('div', 'modal-dialog__header');
        const modalTaskLabel = createCustomElement('legend', 'modal__task-label', {
            textContent: props.legend || 'Add todo'
        });
        const modalDialogResponse = createEl('div', 'modal-dialog__response');
        const saveBtn = createCustomElement('button', 'response-btn', {
            textContent: 'Save',
            type: 'submit'
        });
        const cancelBtn = createEl('button', 'response-btn', 'Cancel');

        const fieldsetPrimaryDetails = createEl('fieldset', 'modal-dialog__inputs');
        const fieldsetSecondaryDetails = createEl('fieldset', 'modal-dialog__inputs');

        const deleteBtnClassNames = props.length
            ? ['delete-task-btn']
            : ['delete-task-btn', 'hide'];

        const deleteTaskBtn = createEl('button', deleteBtnClassNames, 'Delete');

        const primaryInputs = [
            _createTitleInput(props.title || ''),
            _createDescTextarea(props.desc || '')
        ];
        const secondaryInputs = [
            _createChecklist(props.checklist || []),
            _createDueDateInput(props.dueDate || ''),
            _createTagWrapper(props.tags || []),
            deleteTaskBtn
        ];

        modalTask.append(formTask);
        appendChildren(formTask, [modalContainerUpper, modalContainerLower]);
        appendChildren(modalContainerUpper, [modalDialogHeader, fieldsetPrimaryDetails]);
        appendChildren(modalDialogHeader, [modalTaskLabel, modalDialogResponse]);
        appendChildren(modalDialogResponse, [saveBtn, cancelBtn]);
        modalContainerLower.append(fieldsetSecondaryDetails);
        appendChildren(fieldsetPrimaryDetails, primaryInputs);
        appendChildren(fieldsetSecondaryDetails, secondaryInputs);

        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(props.id);
            if (props.id) {
                editTaskToSelectedPrj(props.id);
            } else {
                addTaskToSelectedPrj();
            }
            updateTaskHandlerView();
        })
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            DOMController.hideTaskForm();
        });
        return modalTask;
    }
    const initialize = () => {
        const modalEl = createEl('div', ['modal-overlay', 'hide']);

        modalEl.addEventListener('click', (e) => {
            if (e.currentTarget !== e.target) return;
            e.stopPropagation();
            DOMController.hideTaskForm();
        });

        return modalEl;
    };
    return {
        initialize,
        createModalTask,
        createChecklistItem
    };
})();

export { TaskForm };