import {
    createCustomElement,
    createEl,
} from '../../helpers';

const Footer = (() => {
    const initialize = () => {
        const footerEl = createEl('footer', ['footer', 'centered']);
        const footerContent = createCustomElement('a', 'footer-content', {
            textContent: '© B.B. Antipolo ' + new Date().getFullYear(),
            href: 'https://github.com/bvrbryn445'
        });

        footerEl.append(footerContent);

        return footerEl;
    }
    return { initialize };
})();

export { Footer }