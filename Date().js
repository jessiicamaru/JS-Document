const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const timezone = -date.getTimezoneOffset() / 60;

console.log(year);     // Năm hiện tại
console.log(month);    // Tháng hiện tại (giá trị từ 0 - 11, 0 là tháng 1)
console.log(day);      // Ngày hiện tại trong tháng (1 - 31)
console.log(hours);    // Giờ hiện tại (0 - 23)
console.log(minutes);  // Phút hiện tại (0 - 59)
console.log(seconds);  // Giây hiện tại (0 - 59)
console.log(`GMT +${timezone}`); //GMT +7


console.log(date);
