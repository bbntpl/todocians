import {
    createCustomElement,
    createEl,
    createImg,
    appendChildren,
} from '../../helpers';

import chevronLeftIcon from '../../assets/icons/chevron-left.svg';
import prjIcon from '../../assets/icons/project.svg';
import tagIcon from '../../assets/icons/tag.svg';
import databaseRemovalIcon from '../../assets/icons/database-remove-outline.svg'

import {
    alertDatabaseRemovalAction,
    switchFolder,
} from '../controller';

import DOMController from '../dom-controller';

const Ribbon = (() => {
    const _createCollapseBtn = () => {
        const collapseBtn = createEl('div', 'collapse-wrapper');
        const collapseIcon = createImg('img', 'ribbon-icons', chevronLeftIcon);
        collapseBtn.append(collapseIcon);
        collapseBtn.addEventListener('click', DOMController.toggleSidebar);
        return collapseBtn;
    }

    const _createRibbonBtns = () => {
        const ribbonFolders = createEl('div', 'ribbon-folders');
        const prjIconEl = createCustomElement('img', ['ribbon-icons', 'active'], {
            src: prjIcon,
            id: 'ribbon-project'
        });
        const tagIconEl = createCustomElement('img', 'ribbon-icons', {
            src: tagIcon,
            id: 'ribbon-tag'
        });

        appendChildren(ribbonFolders, [prjIconEl, tagIconEl]);

        [prjIconEl, tagIconEl].forEach(folderIcon => {
            folderIcon.addEventListener('click', switchFolder);
        })

        return ribbonFolders;
    }

    const _removeDatabaseBtn = () => {
        const databaseRemovalBtn = createEl('div', 'data-remove-wrapper');
        const databaseRemovalIconEl = createImg('img', 'data-remove', databaseRemovalIcon);

        databaseRemovalBtn.append(databaseRemovalIconEl);

        databaseRemovalBtn.addEventListener('click', alertDatabaseRemovalAction);
        return databaseRemovalBtn;
    }
    const initialize = () => {
        const ribbonEl = createEl('div', 'ribbon');
        const ribbonChildren = [
            _createCollapseBtn(),
            _createRibbonBtns(),
            _removeDatabaseBtn()
        ]

        appendChildren(ribbonEl, ribbonChildren);
        return ribbonEl;
    }

    return { initialize };
})();

export { Ribbon };