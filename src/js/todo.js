import { Sidebar } from "./dom-collections";

const Todo = (() => {
    const initialize = () => {
        document.querySelector('.folder__list').append(Sidebar.createPrjTab('P1'));
    }

    return { initialize} ;
})();


export default Todo;