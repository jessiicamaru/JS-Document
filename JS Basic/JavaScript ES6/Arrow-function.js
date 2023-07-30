function sum(a, b) {
    return a + b;
}
// tương đương với các cách viết sau
var sum = (a, b) => a + b;

// arrow function không có context
const course = {
    name: 'Javascript basic!',
    getName: () => {
        return this.name;
    },
};
console.log(course.getName()); //undefined

// arrow function không được dùng để làm constructor
const Course = (name, price) => {
    this.name = name;
    this.price = price;
};

const jsCourse = new Course('Javascript', 1000);
console.log(jsCourse); //error
