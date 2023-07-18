//Chỉ truyền giá trị TYPE_LOG từ export con của type-logger.js
import { TYPE_LOG } from './type-logger.js';

function loggerFunction(a, type = TYPE_LOG) {
    console[type](a);
}

export default loggerFunction;
// xuất hàm loggerFunction ra ngoài
