import { appendChildren } from "../helpers";
import { Sidebar } from "./dom-collections";
import { Project } from "./project";

const Todo = (() => {
    const _projects = [];
    const initialize = () => {
        appendChildren(document.querySelector('.folder__list'), [Sidebar.createPrjTab('P1'), Sidebar.createPrjTab('P2'), Sidebar.createPrjTab('P3')]);
    }
    const addProject = (prjName) => {
        _projects.push(new Project(prjName));
    }
    return { initialize, addProject };
})();


export default Todo;