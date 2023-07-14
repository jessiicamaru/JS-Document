/**
 * Giả sử cho đoạn Code như sau
 * <input type="text">
    <input type="checkbox">
    <select>
        <option value="value1">1</option>
        <option value="value2">2</option>
        <option value="value3">3</option>
    </select>
 */

var inputElement = document.querySelector('input[type="text"]');

inputElement.onchange = function(event) {
    console.log(event.target.value); 
}
// từ mouse event (biến event) truyền vào target để lấy chính thẻ chứa nó tức là thẻ input, sau đó truyền vào value để lấy ra giá trị của người dùng nhập vào input
// sự kiên onchange chỉ thực thi khi giá trị nhập vào khác giá trị lúc đầu, và con trỏ chuột được bỏ ra ngoài

inputElement.oninput = function(event) {
    console.log(event.target.value); 
}
// sự kiện oninput thực thi lúc bắt đầu nhập vào, nhập tới đâu lấy giá trị tới đó
    