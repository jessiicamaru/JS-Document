/**
 * Bài toán hãy kiểm tra nếu là link của f8 thì cho phép chuyển trang.
 * <a href="https://f8.edu.vn">
        Học lập trình
    </a>

    <br />

    <a href="https://google.com.vn">
        Tìm kiếm
    </a>

 */

var aElement = document.links; // tương đương câu lệnh document.querySelector('a');

for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function (event) {
        if (!event.target.href.startsWith('https://f8.edu.vn')) {
            event.preventDefault();
        }
    };
}

//event.target.href.startsWith('https://f8.edu.vn') dùng để kiểm tra xem href có chứa url được truyền vào hay không, nếu không phải thì event.preventDefault() sẽ xóa bỏ đi hành vi mặc định chuyển trang của thẻ a

//-------------------------------------------------------------------------------------------------------------

/**
 * và có CSS như sau
 * ul {
        display: none;
    }
    input: focus ~ ul {
        display: block; I
    }
 * Đoạn CSS trên thể hiện khi focus vào thẻ input thì list ul hiện ra, và khi con trỏ chuột được đưa ra ngoài, ul biến mất.
    
    BÀI TOÁN: Khi click vào thẻ li nào hãy in ra thẻ li đó.

 * <input placeholder="Tìm kiếm" />
    <ul>
        <li>Javascript</li>
        <li>PHP</li>
        <li>Golang</li>
    </ul>
 */

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function (event) {
    event.preventDefault();
};

ulElement.onclick = function (event) {
    console.log(event.target);
};

/** GIẢI THÍCH
 * - Ở phần này khi click ra khỏi thẻ input thì ul trở về display none, vậy tức là ta phải ngăn chặn hành vi của trình duyệt ngay từ lúc cú click chưa được nhấc lên, nên ta sử dụng thuộc tính onmousedown (vào lúc chuột nhấn xuống).
 * - onmouseup onmousedown là thành phần cấu tạo nên onclick:
 *      + Khi chuột được nhấn xuống => onmousedown
 *      + Khi chuột được thả ra => onmouseup
 *      + Khi cú click được hoàn thành => onclick
 */
