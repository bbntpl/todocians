function _addClassNames(el, classes) {
    Array.isArray(className) ? el.classList.add(...classes) : el.classList.add(classes);
}

function appendChildren(parent, children) {
    return children.forEach(child => parent.append(child));
};

function createEl(tag, className, txt = null) {
    const el = document.createElement(tag);

    //add classnames to the element
    _addClassNames(el, className);

    //set text content equal to passed text
    el.textContent = txt ? txt : '';
    return el;
}

function childrenMatches(elem, callback) {
    return Array.from(elem.children).filter(callback);
}

function autoExpand(field) {
    // reset field height
    field.style.height = 'inherit';

    // get the computed styles for the element
    let computed = window.getComputedStyle(field);

    // calculate the height
    let height =
        parseFloat(computed.paddingTop) +
        field.scrollHeight +
        parseFloat(computed.paddingBottom);

    field.style.height = height + 'px';
}

const currentYear = new Date().getFullYear();
const uniqueID = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
export { appendChildren, autoExpand, childrenMatches, createEl, currentYear, uniqueID }