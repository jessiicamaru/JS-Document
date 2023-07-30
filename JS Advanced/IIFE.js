//ỨNG DỤNG CỦA IIFE

// Giả sử có một phần mềm quản lí tên ô tô như sau

const app = {
    cars: [],
    add(car) {
        this.cars.push(car);
    },
    edit(index, car) {
        this.cars[index] = car;
    },
    delete(index) {
        this.cars.splice(index, 1);
    },
};

/**
 * giả sử có trường hợp vô tình app.cars = null
 * thì những hàm app.add() app.edit app.delete sẽ không thực thi được
 * => mất đi tính toàn vẹn dữ liệu của một project
 */

// CÁCH KHẮC PHỤC
const app1 = (function () {
    const cars = [];
    return {
        logData() {
            console.log(cars);
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        },
    };
})();

/**
 * Hàm IIFE sẽ trả về các function đã được khai báo ở trong return
 * khi đó app1.cars sẽ không được truy xuất, nếu muốn truy xuất phải tạo thêm một phương thức truy xuất mới trong return như sau app1.logData()
 * => như vậy tính toàn vẹn dữ liệu sẽ được đảm bảo
 */
