var array = ['Javascript', 'PHP', 'Ruby'];

var [a, ...b] = array;
console.log(a); //Javascript
console.log(b); //['PHP', 'Ruby']

var [a, c, ...b] = array;
console.log(a); //Javascript
console.log(c); //PHP
console.log(b); //['Ruby']

//----------------------------------------------------------------//
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
};

var { name, ...rest } = course;
console.log(name); //Javascript
console.log(rest); //{price: 1000, image: 'image-address'}

//----------------------------------------------------------------//
function logger(...params) {
    console.log(params); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function logger(a, ...params) {
    console.log(a); //1
    console.log(params); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
}
logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
