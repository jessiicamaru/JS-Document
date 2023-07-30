//Destructuring (phân rã), dùng để lấy các phần tử của mảng, object
var array = ['Javascript', 'PHP', 'Ruby'];

var [a, b, c] = array;
console.log(a, b, c); //Javascript PHP Ruby

var [a, , c] = array;
console.log(a, c); //Javascript Ruby

//----------------------------------------------------------------//
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'PHP',
    },
};

var { name, price, image, a } = course;
console.log(name, price, image, a);
// mỗi key truyền vào phải là 1 key chính xác và có trong object nếu không sẽ trả về undefined

// để lấy ra name của object con children ta làm như sau
var {
    name,
    children: { name },
} = course;
// nếu có 2 biến trùng nhau ta có thể đổi tên trực tiếp bằng cách sau
var {
    name: name1,
    children: { name: name2 },
} = course;
console.log(name2); //PHP

// nếu lấy ra một key không có trong object mà không trả về undefined ta có thể dùng giá trị mặc định
var { name, description = 'Miêu tả' } = course;
console.log(description); //Miêu tả

//----------------------------------------------------------------//
function logger({ name, price, ...rest }) {
    console.log(name); //Javascript
    console.log(price); //1000
    console.log(rest); //{description: 'Description content'}
}
logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description content',
});

//----------------------------------------------------------------//
function logger([a, b, ...rest]) {
    console.log(a); //2
    console.log(b); //6
    console.log(rest); //[12, 3, 4, 4]
}
logger([2, 6, 12, 3, 4, 4]);
