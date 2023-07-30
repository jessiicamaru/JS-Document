/**
 * <div class="box"></div>
 */

//innerHTML và outerHTML có tác ghi đè tất cả các element
// innerHTML ghi đè những element bên trong
// outerHTML ghi đè các element tính từ element được gọi

//innerHTML thêm element, attribute
var box = document.querySelector('.box');
box.innerHTML = 'Hello world!'; // thêm chữ vào .box
box.innerHTML = '<h1 class = "heading">Hello world!</h1>'; // thêm thẻ h1 vào .box
console.log(box.innerHTML); // <h1 class = "heading">Hello world!</h1>

//outerHTML
console.log(box.outerHTML); 
//<div class="box">
//      <h1 class = "heading">Hello world!</h1>
//</div>


