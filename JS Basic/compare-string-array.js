var languages = ['Javascript', 'PHP', 'Ruby'];
var myString = 'world Hello world world';

// .split cắt một chuỗi thành 1 array qua điểm chung
console.log(myString.split(' ')); // array 4 phần tử ['world', 'Hello', 'world', 'world'] điểm chung là ' '
console.log(myString.split('')); // array 23 phần tử là tất cả các kí tự trong chuỗi

//Xóa
var languages = ['Javascript', 'PHP', 'Ruby'];
languages.splice(1, 2); // xóa 2 phần tử tính từ vị trí 1
console.log(languages); // mảng mới là ['Javascript']

//Chèn
var languages = ['Javascript', 'PHP', 'Ruby'];
languages.splice(1, 0, 'C++'); // không xóa phần tử nào, chèn 'C++' vào vị trí 1
console.log(languages); // mảng mới là ['Javascript', 'C++', 'PHP', 'Ruby']

//Thay thế
var languages = ['Javascript', 'PHP', 'Ruby'];
languages.splice(1, 2, 'C++', 'Pascal'); // xóa 2 phần tử tính từ vị trí 1, rồi chèn 'C++' và 'Pascal' vào vị trí 1
console.log(languages); // mảng mới là ['Javascript', 'C++', 'Pascal']
