// truyền giá trị mặc định được xuất ra từ file logger-function.js
// Nếu không muốn truyền destructuring ta có thể truyền các export con dưới dạng một object
import tabLog from './logger-function.js';
import * as type_logger from './type-logger.js';

//trả về object có tên Module có các key là các biến được export bên phía type-logger.js
console.log(type_logger);
// Hàm loggerFunction có thể được dùng trực tiếp
tabLog(123, type_logger.TYPE_WARN);
