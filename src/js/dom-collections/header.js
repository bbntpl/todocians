import { createEl } from '../../helpers';

const Header = (() => {
    const initialize = () => {
        const headerEl = createEl('header', 'header');
        const projectTitle = createEl('h1', 'project__title--large', '');
        headerEl.append(projectTitle);
        return headerEl;
    }
    return { initialize };
})();
export { Header };

