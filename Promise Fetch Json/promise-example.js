// In ra 1 2 3 4 sau mỗi 1s

// Sau 1s in ra một số khoảng thời gian 1s gọi là sleep
function sleep(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}
// Hàm sleep bây giờ được trả về một promise như bình thường

sleep(1000)
    .then(function () {
        console.log('1');
        return sleep(1000);
    })
    .then(function () {
        console.log('2');
        return sleep(1000);
    })
    .then(function () {
        console.log('3');
        return sleep(1000);
    })
    .then(function () {
        console.log('4');
        return sleep(1000);
    });
