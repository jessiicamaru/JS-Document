/**
 * Promise được truyền vào một function (excuter function), excuter function sẽ được gọi trước khi cả biến promise truyền vào
 * excuter function trả về 2 hàm callback resolve và reject
 * resolve được gọi khi logic code thành công
 * reject được gọi khi logic code thất bại
 * Nếu cả 2 hàm resolve và reject không được gọi sẽ sinh ra hiện tượng memory leak (rò rỉ bộ nhớ)
 */
var a = 2;
var promise = new Promise(function (resolve, reject) {
    if (a === 2) {
        resolve(a);
    } else if (a === 1) {
        reject(a);
    }
});

/**
 * Promise trả về 3 phương thức .then, .catch, .finally
 * Khi resolve được gọi thì .then được gọi
 * Khi reject được gọi thì .catch được gọi
 * Khi resolve hoặc reject được gọi thì .finally đều được gọi
 * .finally có thể có hoặc không
 * Có thể có nhiều .then, .catch, .finally
 * Kết quả của .then phía trước chính là tham số đầu vào của .then phía sau
 */
promise
    .then(function (a) {
        console.log(`a = ${a} thỏa mãn`); // a = 2 thỏa mãn
        return a + 1;
    })
    .then(function (a) {
        console.log(`a = ${a} thỏa mãn`); // a = 3 thỏa mãn
    })
    .catch(function (a) {
        console.log(`a = ${a} không thỏa mãn thỏa mãn`);
    })
    .finally(function () {
        console.log('done');
    });

/**
 * Chúng tương tự như những promises trong cuộc sống thực
 * Giả sử bạn promise sẽ mua cho tôi một chiếc bánh vào ngày sinh nhật của tôi vào ngày mai. Promise của bạn có thể có ba trạng thái:
 * -   Pending: Tôi không biết liệu bạn có thực sự mua một chiếc bánh hay không. Tôi chỉ biết điều đó vào ngày mai khi bạn xuất hiện trong bữa tiệc sinh nhật.
 * -   Fulfilled: Bạn đã xuất hiện với chiếc bánh, vì vậy tôi nói rằng bạn có resolved or hoàn thành bạn promise
 * -   Rejected: Bạn đã xuất hiện mà không có bánh, vì vậy bạn đã không thực hiện được promise của mình. Trong trường hợp này,chúng tôi nói promise is rejected.
 */
