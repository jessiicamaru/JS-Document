// trong String và Array có một thuộc tính có sẵn là includes
// dùng để kiểm tra 1 giá trị có thuộc mảng hoặc chuỗi hay không

var names = ['John', 'Nick', 'Maxwell'];
var string = '22 jump street';

console.log(names.includes('Nick')); //true
console.log(names.includes('Nick', 2)); //false (tìm từ vị trí 2)

console.log(string.includes('22')); //true
console.log(string.includes('22', 1)); //false (tìm từ vị trí 1)
