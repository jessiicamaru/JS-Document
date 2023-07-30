import { createStore } from './core.js';
import reducer from './reducer.js';

const { attach, connect, dispatch } = createStore(reducer);

// Vì ở mọi nơi đều cần sử dụng dispatch nên ta gán dispatch bằng một hàm global phạm vi window để có thể chạy dispatch ở bất kì file nào
window.dispatch = dispatch;

export { attach, connect };
