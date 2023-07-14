/**
 * Ví dụ bạn cần lưu trữ thông tin của giáo viên và học sinh,
 * giáo viên và học sinh có những thuộc tính chung là 
 *      - Tên
 *      - Tuổi
 *      - Địa chỉ
 *      ...
 * các thuộc tính khác nhau như,
 *      - Giáo viên lịch họp
 *      - Học sinh số diểm thi đua
 *      ...
 * Việc của object constructor là tạo ra những điểm chung của các đối tượng,
 * để các đối tượng sử dụng lại cấu trúc đó.
 * */ 

// Các constructor thường được trình bày bằng cách viết hoa chữ đầu tiên của tên hàm
function User (name, age, address) {
    this.name = name;
    this.age = Number(age);
    this.address = address;
    this.getName = function () {
        return `hi ${this.name}, have a good day`;
    }
}

//this ở trong hàm User sẽ được nhận là User, this sẽ truy cập vào hàm chứa nó đầu tiên
//this ở trong hàm getName sẽ được nhận là this.getName, và khi gọi đối tượng student, this trong
//this.getName sẽ nhận student.getName nên this.name ở trong hàm getName sẽ được nhận là student.name

var student = new User('Dung', '18', 'Dong Hoi'); //khai báo một object mới bằng từ khóa new
var teacher = new User('Hai', '32', 'Dong Hoi'); //hai object cùng tên là User nhưng sẽ hoàn toàn
                                                 //được lưu vào 2 vùng nhớ khác nhau là student và teacher
                                                 //nên sẽ không ảnh hưởng đến dữ liệu của nhau

student.point = 8.9;
teacher.meeting = 'Mon, Thurs, Sun';

console.log(student.getName());
console.log(teacher.getName());

console.log(student);
console.log(teacher);

