function highlight(...rest) {
    console.log(rest);
}
var brand = 'F8';
var course = 'Javascript';
highlight`Học lập trình ${course} tại ${brand}!`;
/**
 * => [
 *      ['Học lập trình', 'tại', '!'],
 *      'F8',
 *      'Javascript'
 * ]
 * Cách viết này trả về cho ta một mảng gồm:
 * -    Mảng con gồm các giá trị được có sẵn
 * -    Các giá trị nội suy
 */

//Giả sử để phục vụ cho CSS ở frontend ta phải in ra như sau
//=> Học lập trình <span>Javascript</span> tại <span>F8</span>!
function highlight([first, ...strings], ...values) {
    /**
     * first: 'Học lập trình'
     * strings: [' tại ', '!']
     * values: ['Javascript', 'F8']
     */
    // dùng một hàm reduce với accumulator là first, lặp qua các phần tử của values, cứ mỗi 1 phần tử của values, lại cộng 1 phần tử của string vào biến result, và xóa đi phần tử vừa thêm vào biến result đó

    var result = values.reduce(
        (accumulator, value, index) => [...accumulator, `<span>${value}</span>`, strings.shift()],
        [first]
    );
    console.log(result.join(''));
    // sử dụng ...accumulator để sau mỗi lần lặp, mảng lại được spread ra thêm 1 lần nữa
    /**
     * lần 1: accumulator = ['Học lập trình']
     *        sau đó return về ['Học lập trình', '<span>Javascript</span>', ' tại ']
     * lần 2: accumulator = ['Học lập trình', '<span>Javascript</span>', ' tại ']
     *        sau đó return về ['Học lập trình <span>Javascript</span> tại ', '<span>F8</span>', '!']
     *
     * => result = ['Học lập trình <span>Javascript</span> tại ', '<span>F8</span>', '!']
     * => result.join('') = Học lập trình <span>Javascript</span> tại <span>F8</span>!
     */
}
var brand = 'F8';
var course = 'Javascript';
highlight`Học lập trình ${course} tại ${brand}!`;
