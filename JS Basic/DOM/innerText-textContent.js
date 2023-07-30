/**
 * Cho file HTML có code như sau
 * 
    <h1 class="heading">

        <span>Heading</span>
        <span>Text</span>
      
        <div>
            Hi
        </div>
        
    </h1>
 */

var headingElement = document.querySelector('.heading');

//innerText in ra những gì thấy ở trên trình duyệt
//textContent in ra những gì có trong element, kể cả dấu cách, xuống dòng, kể cả bị ẩn đi, ngoại trừ thẻ tag
console.log(headingElement.innerText); //Heading Text
console.log(headingElement.textContent);
//
//      Heading
//      Text
//
//
//      Hi
//
//

/**
 * innerText và textContent không được dùng để truyền thêm element vào
 */
headingElement.innerText = '<i>Heading Text</i>'; // <i>Heading Text</i>
headingElement.textContent = '<i>Heading Text</i>'; // <i>Heading Text</i>

headingElement.innerText = `

Heading

`; // khi in ra sẽ được xuống dòng bằng thẻ <br>
headingElement.textContent = `

Heading

`; // khi in ra sẽ được xuống dòng bằng khoảng cách trắng
