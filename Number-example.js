Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false 

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238 vì ở đây dấu phẩy không được cho phép là 1 dấu thập phân nên từ ,21 bị loại bỏ
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34 vì khoảng trắng ở giữa 2 số không hợp lệ cho 1 số nên từ 56 bị loại bỏ
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238 vì ở đây dấu phẩy không được cho phép là 1 dấu thập phân nên từ ,21 bị loại bỏ
Number.parseInt('237.22') // 237 tự động loại bỏ số thập phân vì đây là Number.parseInt()
Number.parseInt('34 56 78') // 34 vì khoảng trắng ở giữa 2 số không hợp lệ cho 1 số nên từ 56 bị loại bỏ
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235' làm tròn đến phần đơn vị
numberObject.toFixed(1); // '1234.6' làm tròn đến 1 chữ số tp
numberObject.toFixed(6); // '1234.567890' làm tròn đến 6 chữ số tp

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'