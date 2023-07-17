var address = 'address';

var info = {
    name: 'Dung Hoang',
    phoneNumber: '113',
    age: 18,
    [address]: 'Dong Hoi', // thêm một key và value vào object
    getname: function () {
        alert('hi');
    },
};

info.email = 'abc@gmail.com'; // thêm một key là email có value là 'abc@gmail.com'
info.phoneNumber = '331'; // ghi đè value của key phoneNumber

delete info.name; //xóa cặp name: 'Dung Hoang' khỏi object

console.log(info.name); // 'Dung Hoang'
console.log(info['name']); // 'Dung Hoang'

console.log(info.getname); // lúc này console sẽ in ra code ở trong function vì sau get name chưa có dấu gọi hàm
console.log(info.getname()); // lúc này sẽ thực hiện hàm getname
