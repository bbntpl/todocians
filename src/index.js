import './assets/styles/reset.css';
import './assets/styles/main.css';

import { appendChildren } from './helpers';
import * as DC from './js/dom-collections';

appendChildren(document.body, [DC.Sidebar, DC.Ribbon, DC.Header, DC.Main, DC.Footer, DC.Modal]);
