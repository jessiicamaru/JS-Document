function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }
    return increase;
}
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3

/**
 * Giải thích
 * - Hàm createCounter trả về hàm increase và được gán vào biến counter1
 * - Khi chạy counter1 tức chúng ta đang chạy hàm increase
 * - Khi chạy 3 lần hàm increase luôn ghi nhớ được phạm vi của nó là trong hàm creatCounter nên hàm increase sẽ được chạy 3 lần trong phạm vi của createCounter
 * - Khi tham chiếu đến biến counter, vì biến counter luôn được tăng lên 1 đơn vị ở lần chạy trước đó, nên khi chạy hàm counter1 3 lần thì biến counter được in 3 lần
 * - Nếu có một biến counter 2 được thực hiện tương tự thì hàm creatCounter sẽ được thực thi lại, và biến counter lại được trả về 0 với cú pháp let counter = 0
 */
