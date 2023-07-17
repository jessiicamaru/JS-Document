// Toán tử giải, giải các phần tử của mảng, object ra các phần riêng lẻ
var array1 = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array2, ...array1];
console.log(array3); //['ReactJS', 'Dart', 'Javascript', 'Ruby', 'PHP']

var array3 = [...array1, ...array2];
console.log(array3); //['Javascript', 'Ruby', 'PHP', 'ReactJS', 'Dart']

//----------------------------------------------------------------//
var object1 = {
    name: 'Javascript',
};
var object2 = {
    name: 'Ruby',
    price: 1000,
};
var object3 = {
    ...object1,
    ...object2,
};
console.log(object3); //{name: 'Ruby', price: 1000}
//Nếu 2 object có cùng 1 key thì ưu tiên value của key đứng sau
