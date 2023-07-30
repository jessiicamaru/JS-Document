var languages = ['Javascript', 'PHP', 'Ruby'];

// .toString chuyển 1 mảng sang 1 chuỗi
console.log(languages.toString()); //Javascript,PHP,Ruby

// .join chuyển 1 mảng sang 1 chuỗi, nhưng định dạng được khoảng cách giữa các elements
console.log(languages.join('-+')); //Javascript-+PHP-+Ruby

/**
 * .pop và .push: thực hiện ở CUỐI MẢNG
 * .shift và .unshift: thực hiện ở ĐẦU MẢNG
 * .push và .unshift: THÊM vào mảng và trả về ĐỘ DÀI của mảng mới
 * .pop và .shift: XÓA mảng và trả về GIÁ TRỊ vừa được xóa
 *
 * Khi xóa hết tất cả các phần tử nhưng vẫn thực hiện xóa sẽ trả về undefined
 */

// .pop XÓA 1 element (cuối mảng)
console.log(languages.pop()); //Ruby và mảng mới là ['Javascript', 'PHP']

// .push THÊM 1 hoặc nhiều element (cuối mảng)
console.log(languages.push('Dart', 'C++')); //4 bởi vì ở dòng 18 độ dài giảm xuống còn 2

// .shift XÓA 1 element (đầu mảng)
console.log(languages.shift()); //Javascript và mảng mới là ['PHP', 'Dart', 'C++']

// .unshift THÊM 1 element (đầu mảng)
console.log(languages.unshift('Pascal', 'C#')); //5 và mảng mới là ['Pascal', 'C#', 'PHP', 'Dart', 'C++']

/**
 * .splice có thể xóa, chèn, cắt
 * language.splice(start, quantity, value1, value2,...);
 * start: Vị trí con trỏ bắt đầu
 * quantity: Số lượng phần tử bị xóa khỏi mảng tính từ start
 * value1 trở về sau: Các giá trị được truyền vào mảng tính từ start
 */

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

// .concat nối 2 mảng
var languages = ['Javascript', 'PHP', 'Ruby'];
var languages2 = ['Pascal', 'C++', 'C#'];
console.log(languages.concat(languages2)); //phân tử mảng languages đứng trước rồi tới phân tử mảng languages2
console.log(languages2.concat(languages)); //phân tử mảng languages2 đứng trước rồi tới phân tử mảng languages

// .slice cắt mảng
var languages = ['Javascript', 'PHP', 'Ruby'];
console.log(languages.slice(1, 2)); //['PHP'] cắt từ vị trí 1 đên vị trí 2
console.log(languages.slice(0)); //phương thức copy mảng
console.log(languages.slice(1)); //['PHP', 'Ruby'] cắt từ vị trí 1 tới hết
console.log(languages.slice(-3, -2)); //['Javascript'] cắt từ vị trí -3 đên vị trí -2
