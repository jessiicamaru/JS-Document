/**
 *  1. Promise.resolve
    2. Promise.reject
    3. Promise.all
 */

var promise = Promise.reject('Error!'); // luôn truyền vào .catch
var promise = Promise.resolve('Error!'); // luôn truyền vào .then

promise
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function (err) {
        console.log('err: ', err);
    });


    
// Promise.all dùng để chạy 2 promise cùng 1 lúc, 2 promise không liên quan tới nhau
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([1]);
    }, 2000);
});

var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([2, 3]);
    }, 4000);
});

// tổng thời gian của 2 promise là 6s nhưng Promise.all sẽ chạy cùng lúc nên còn 4s
// kết quả của cả 2 promise được truyền vào result, phần ở dưới để làm phẳng mảng result
// nếu 1 trong 2 promise bị reject thì .catch sẽ được thực thi

Promise.all([promise1, promise2])
    .then(function (result) {
        // console.log('result: ', result); // [1, [2,3]]
        var newArray = result.reduce(
            function (accumulator, value, index, originArray) {
            return accumulator.concat(value);
        });
        console.log('newArray: ', newArray);
    })
    .catch(function () {
        console.log('Err');
    });
