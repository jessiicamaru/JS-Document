export default function html([first, ...strings], ...values) {
    return values
        .reduce((accumulator, value) => accumulator.concat(value, strings.shift()), [first])
        .filter((x) => (x && x !== true) || x === 0)
        .join('');
}

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }

    return {
        // attach: gán
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        // connect (đẩy dữ liệu từ store vào view)
        // selector (chọn dữ liệu cụ thể trong store (mặc định trả về tất cả các state))
        connect(selector = (state) => state) {
            //props (dữ liệu để truyền vào các component sau này)
            //argument (đối số)
            return (component) =>
                (props, ...args) =>
                    component(Object.assign({}, props, selector(state), ...args));
            /**
             * function connect(selector = (state) => state) {
             *      return function (component) {
             *          return function (props, ...args) {
             *              return component(Object.assign({}, props, selector(state), ...args));
             *          }
             *      }
             * }
             */

            // Object.assign dùng để tạo ra một object mới, dùng để đẩy tất cả ác dối số vào đối số của component
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        },
    };
}
