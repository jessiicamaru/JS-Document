/**
 * Enhanced object literals dùng để làm các việc sau
 * -    Định nghĩa value cho object
 * -    Định nghĩa method cho object
 * -    Định nghĩa key cho object dưới dạng biến
 */

var name = 'Javascript';
var price = 1000;

var course = {
    name,
    price,
    getName() {
        return this.name;
    },
};

// tương đương với
var course = {
    name: name,
    price: price,
    getName: function () {
        return this.name;
    },
};

console.log(course.getName());
