// truyền giá trị mặc định và các export nhỏ từ logger-function.js
// giá trị mặc định phải được nằm ở đầu tiên, kế tiếp mới là các destructuring
// khi truyền một biến thuần tabLog, thì chương trình sẽ hiểu là tabLog sẽ nhận giá trị được export default
import tabLog, { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './logger-function.js';

// Hàm loggerFunction có thể được dùng trực tiếp
tabLog(123, TYPE_ERROR);
