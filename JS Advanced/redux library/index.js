import { createStore } from 'https://cdn.skypack.dev/redux';

let initState = 0;
const $ = document.querySelector.bind(document);

const output = $('#output');
const disposit = $('#disposit');
const withdraw = $('#withdraw');

function reducer(state = initState, action) {
    switch (action.type) {
        case 'DESPOSITE':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}

let store = createStore(reducer);

function createAction(type) {
    return {
        type: type,
        payload: 10,
    };
}

disposit.onclick = function () {
    store.dispatch(createAction('DESPOSITE'));
    render();
};

withdraw.onclick = function () {
    store.dispatch(createAction('WITHDRAW'));
    render();
};

function render() {
    output.innerText = store.getState();
}

store.subscribe(() => {
    console.log(store.getState());
});

render();
