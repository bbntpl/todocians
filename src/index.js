import './assets/styles/reset.css';
import './assets/styles/main.css';

import { appendChildren } from './helpers';
import { initialMount } from './js/controller';
import('./js/dom-collections')
    .then((domCollections) => {
        const layoutEls = [
            domCollections.Sidebar.initialize(),
            domCollections.Ribbon.initialize(),
            domCollections.Header.initialize(),
            domCollections.TaskHandler.initialize(),
            domCollections.Footer.initialize(),
            domCollections.TaskForm.initialize()
        ];
        appendChildren(document.body, layoutEls);
        initialMount();
    });