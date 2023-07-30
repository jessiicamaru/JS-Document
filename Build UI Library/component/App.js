import html from '../core.js';
import { connect } from '../store.js';

/**
 * const connector = connect((state) => ({
    cars: state.cars,
    // chỉ lấy dữ liệu của mảng cars (hàm callback trong connect chính là hàm selector ở core.js)
}));
 */
const connector = connect();

// dùng destructuring để lấy ra key là cars trong component được đẩy vào
function App({ cars }) {
    return html`
        <ul>
            ${cars.map((car) => `<li>${car}</li>`)}
        </ul>

        <button onclick="dispatch('ADD', 'Mercedes', 'Honda')">Add car</button>
    `;
}

export default connector(App);
