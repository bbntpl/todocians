import './assets/styles/reset.css';
import './assets/styles/main.css';

import { appendChildren } from './helpers';
import Todo from './js/todo';
import {
    Sidebar,
    Ribbon,
    Header,
    Main,
    Footer,
    Modal
} from './js/dom-collections';

const layoutEls = [
    Sidebar.initialize(),
    Ribbon.initialize(),
    Header.initialize(),
    Main.initialize(),
    Footer.initialize(),
    Modal.initialize()
];
appendChildren(document.body, layoutEls);
Todo.initialize();
