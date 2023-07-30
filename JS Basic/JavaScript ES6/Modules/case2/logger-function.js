export var TYPE_LOG = 'log';
export var TYPE_WARN = 'warn';
export var TYPE_ERROR = 'error';

function loggerFunction(a, type = TYPE_LOG) {
    console[type](a);
}

export default loggerFunction;
// xuất hàm loggerFunction ra ngoài
