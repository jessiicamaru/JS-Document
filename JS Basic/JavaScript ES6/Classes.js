// là một cách viết khác của constructor function

function Course(name, price) {
    this.name = name;
    this.price = price;
}
const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('JS', 1200);

// Tương đương với
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
