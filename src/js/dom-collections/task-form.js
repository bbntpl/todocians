import {
    createCustomElement,
    createEl,
    createImg,
    appendChildren,
} from '../../helpers';

import {
    minAndMaxDates,
    addTaskToSelectedPrj,
    updateTaskHandlerView
} from '../controller';
import Todo from '../todo';
import DOMController from '../dom-controller';

import trashIcon from '../../assets/icons/trash.svg';

const TaskForm = (() => {
    const _createTitleInput = (title) => {
        const lblTitle = createEl('label', 'form__label', 'Title: ');
        const inputTitle = createCustomElement('input', 'form__input', {
            required: true,
            id: 'task-input-title',
            value: title
        });
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

    const _createChecklist = (checklists) => {
        const checklistArray = [];

        const lblChecklist = createEl('label', 'form__label', 'Checklist: ');
        const checklistWrapper = createEl('div', 'task-checklist-wrapper');
        const inputChecklist = createEl('input', 'form__input');
        const checklistList = createEl('ul', 'task-checklist');

        lblChecklist.append(checklistWrapper);
        appendChildren(checklistWrapper, [inputChecklist, checklistList]);

        return lblChecklist;
    }

    const createChecklistItem = () => {
        const checklistItem = createEl('li', 'task-checklist-item');
        const minitaskCheckbox = createCustomElement('input', 'task-checklist-completed', {
            type: 'checkbox',
        })
        const minitaskName = createEl('input', 'task-checklist-name', {
            placeholder: 'Add new checklist'
        });
        const minitaskDeleteBtn = createImg('img', 'checklist-delete-btn', trashIcon);

        appendChildren(checklistItem, [minitaskCheckbox, minitaskName, minitaskDeleteBtn]);

        return checklistItem;
    }

    const _createDueDateInput = (value) => {
        const lblDueDate = createEl('label', 'form__label', 'Due Date: ');
        const inputDueDate = createCustomElement('input', 'form__input', {
            type: 'date',
            min: minAndMaxDates('yyyy-MM-dd').min,
            max: minAndMaxDates('yyyy-MM-dd').max,
            id: 'task-input-duedate'
        });
        lblDueDate.append(inputDueDate);
        return lblDueDate;
    }

    const _createTagWrapper = (taskTag) => {
        const lblDueDate = createEl('label', 'form__label', 'Tags: ');
        const checklistWrapper = createEl('div', 'task-tags-wrapper');

        lblDueDate.append(checklistWrapper);

        Todo.getTags().forEach((tag) => {
            checklistWrapper.append(_createTag(tag, taskTag));
        })

        return lblDueDate;
    }

    const _createTag = (tag, taskTag) => {
        const tagDiv = createEl('div', 'ck-btn');
        const tagLabel = createEl('label', 'ck-lbl');
        const tagCheckbox = createCustomElement('input', 'ck-input', {
            type: 'checkbox',
            value: taskTag.includes(tag)

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
        const deleteTaskBtn = createEl('button', 'modal-dialog__response', 'Delete');

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
            if (props.length) {

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