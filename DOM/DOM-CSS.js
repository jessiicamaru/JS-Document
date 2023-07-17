/**
 * Cho file HTML có code như sau
 * 
    <div class="heading"></div>
 */

var headingElement = document.querySelector('.heading');

headingElement.style.width = '100px'; //CSS cho thẻ heading chiều rộng 100px
headingElement.style.height = '200px'; //CSS cho thẻ heading chiều dài 200px
headingElement.style.backgroundColor = 'red'; //CSS cho thẻ heading background màu đỏ

//Viết ngắn gọn
Object.assign(headingElement, {
    width: '100px',
    height: '200px',
    backgroundColor: 'red',
});
