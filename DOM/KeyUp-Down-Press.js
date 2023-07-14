/**
 * keyup event: Sự kiện này xảy ra khi một phím được thả ra sau khi đã được nhấn xuống. Nó chỉ được kích hoạt một lần khi phím được thả ra.
 * keydown event: Sự kiện này xảy ra khi một phím được nhấn xuống (trước khi được thả ra). Nó được kích hoạt liên tục trong quá trình giữ phím.
 * keypress xảy ra khi một ký tự được nhấn xuống và tạo ra một giá trị Unicode. Nó tương đương với việc kết hợp cả keydown và keyup events, nhưng chỉ được kích hoạt khi nhấn phím tạo ra một ký tự có thể hiển thị.
*/

/**
 * Giả sử cho đoạn Code như sau
 * <input type="text">
 */

var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeydown = function(event) {
    console.log(event.target.value);
    console.log(event.which); //In ra mã ASCII của phím
}



