import './assets/styles/reset.css';
import './assets/styles/main.css';

import { appendChildren } from './helpers';
import { initialMount } from './js/controller';
console.log('before element render');
import('./js/dom-collections')
    .then((domCollections) => {
        console.log('elements are now being added');
        const layoutEls = [
            domCollections.Sidebar.initialize(),
            domCollections.Ribbon.initialize(),
            domCollections.Header.initialize(),
            domCollections.Main.initialize(),
            domCollections.Footer.initialize(),
            domCollections.Modal.initialize()
        ];
        appendChildren(document.body, layoutEls);
        initialMount();
    });