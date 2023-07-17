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

var inputElement = document.querySelector('input[type="checkbox"]');

inputElement.onchange = function (event) {
    console.log(event.target.checked);
};
//Trả về true khi người dùng đã tick vào check box, false là ngược lại
