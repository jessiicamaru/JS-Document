var myString = 'world Hello world world';

// .length (độ dài)
console.log(myString.length); //23

// .indexOf và .lastIndexOf (tìm vị trí của chuỗi trong chuỗi)
console.log(myString.indexOf('world')); //0 (vị trí đầu tiên)
console.log(myString.lastIndexOf('world')); //18 (vị trí cuối cùng)
console.log(myString.indexOf('ABC')); //-1 (không tìm thấy)
console.log(myString.indexOf('world', 10)); //12 (vị trí đầu tiên kể từ vị trí 10)

// .search (tìm vị trí của chuỗi trong chuỗi)
console.log(myString.search('world')); //0 (vị trí đầu tiên)
/**
 * SỰ KHÁC NHAU GIỮA .search VÀ .indexOf
 * .search không thể truyền tham số vị trí bắt đầu
 * .search hỗ trợ tìm kiếm theo biểu thức chính quy
 */

// .slice (cắt chuỗi)
console.log(myString.slice(6, 11)); //'Hello' vị trí theo chiều trái sang phải
console.log(myString.slice(-17, -12)); //'Hello' vị trí theo chiều phải sang trái
console.log(myString.slice(4)); //'d Hello world world' cắt từ 4 đến hết
console.log(myString.slice(0)); //cắt hết

// .replace (thay thế)
console.log(myString.replace('world', 'John')); //'John Hello world world' thay thế từ world đầu tiên
console.log(myString.replace(/world/g, 'John')); //'John Hello John John' thay thế tất cả từ world
/** /world/g được gọi là một biểu thức chính quy */

// .toLowerCase và .toUpperCase (in thường và in hoa)
console.log(myString.toUpperCase()); //WORLD HELLO WORLD WORLD
console.log(myString.toLowerCase()); //world hello world world

// .trim (xóa khoảng trắng ở đầu và cuối)
var myString1 = '   ' + myString + '    '; //'   world Hello world world    '
console.log(myString1.trim()); //'world Hello world world'

// .split cắt một chuỗi thành 1 array qua điểm chung
console.log(myString.split(' ')); // array 4 phần tử ['world', 'Hello', 'world', 'world'] điểm chung là ' '
console.log(myString.split('')); // array 23 phần tử là tất cả các kí tự trong chuỗi

// .charArt
console.log(myString.charAt(6)); // 'H' lấy phần tử thứ 6 có typeof là string
console.log(myString.charAt(500)); // '' lấy phần tử thứ 500 có typeof là string
console.log(myString[6]); // 'H' lấy phần tử thứ 6 có typeof là object
console.log(myString[500]); // undefined lấy phần tử thứ 500 có typeof là undefined
