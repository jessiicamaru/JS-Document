// truyền giá trị mặc định được xuất ra từ file logger-function.js
// truyền các export con từ type-logger.js bằng destructuring
import tabLog from './logger-function.js';
import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './type-logger.js';

// Hàm loggerFunction có thể được dùng trực tiếp
tabLog(123, TYPE_WARN);
