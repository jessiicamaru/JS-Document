/**
 * Cho file HTML có code như sau
 * 
    <div class="heading"></div>
 */

var headingElement = document.querySelector('div');

headingElement.classList.add('red'); //Thêm class red vào thẻ div
headingElement.classList.remove('red'); //Xóa bỏ class red vào thẻ div
headingElement.classList.contains('heading'); //Kiểm tra trong thẻ div có class heading hay không
headingElement.classList.toggle('heading'); //Nếu đã có class heading thì xóa bỏ
//Nếu chưa có class heading thì thêm vào
