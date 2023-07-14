var x = document.getElementById('b'); // lấy ra element có id là b gán vào x
var x = document.getElementsByClassName('b'); // lấy ra tất cả element có class là b gán vào x
var x = document.getElementsByTagName('p'); // lấy ra tất cả thẻ <p> gán vào x
var x = document.querySelector('html .b .c'); // lấy ra thẻ đầu tiên có Selector như bên rồi gán vào x
var x = document.querySelectorAll('html .b .c'); // lấy ra tất cả thẻ có Selector như bên rồi gán vào x
var x = document.forms; // lấy ra tất cả các thẻ form
var x = document.anchors; // lấy ra tất cả các thẻ a có attribute name
var x = document.images; // lấy ra tất cả các thẻ img

//Giả sử có 2 cần dùng công việc dùng đến container
//và 2 công việc độc lập nhau, ta có thể làm như sau
var container = document.querySelector('.container');
var x = container.querySelectorAll('li');
var y = container.querySelectorAll('p');