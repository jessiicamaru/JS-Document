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

var inputElement = document.querySelector('select');

inputElement.onchange = function (event) {
    console.log(event.target.value);
};
// tab console sẽ in ra giá trị của attribute value, chứ không phải là giá trị text node của thẻ option
