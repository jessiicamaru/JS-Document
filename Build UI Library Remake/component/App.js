import { connect } from '../store.js';
import html from '../core.js';

const connector = connect();

function App({ cars }) {
    return html`
        <ul>
            ${cars.map((car) => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Toyota', 'Kia')">ADD</button>
    `;
}

export default connector(App);
