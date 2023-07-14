function User (name, age, address) {
    this.name = name;
    this.age = Number(age);
    this.address = address;
    this.getName = function () {
        return `hi ${this.name}, have a good day`;
    }
}

var student = new User('Dung', '18', 'Dong Hoi');
var teacher = new User('Hai', '32', 'Dong Hoi');

User.prototype.school = 'VNG';
User.prototype.getSchool = function () {
    return `welcome to ${this.school}`;
}

// dùng User.prototype.<tên key> = value để thêm thuộc tính vào constructor

console.log(student.getSchool());
console.log(teacher.getSchool());
