function createCar(obj) {
    obj.name = 'Mercedes';
    return obj;
}
const car = {
    name: 'BMW',
};
var newCar = createCar(car);
console.log(car); // { name: 'Mercedes'}
console.log(newCar); // { name: 'Mercedes'}

//Cách khắc phụ nếu object chỉ có một cấp
function createCar2(obj) {
    obj = { ...obj }; //Toán tử spread dùng để rải các key value của obj ra một vùng nhớ mới (tạo lại)
    obj.name = 'Mercedes';
    return obj;
}
const car2 = {
    name: 'BMW',
};
var newCar2 = createCar2(car);
console.log(car2); // { name: 'BMW'}
console.log(newCar2); // { name: 'Mercedes'}

//Cách khắc phụ nếu object có nhiều cấp bậc
function createCar3(obj) {
    obj = JSON.parse(JSON.stringify(obj)); //Dùng Json để nén và giải mã ngược (tạo lại)
    obj.name = 'Mercedes';
    return obj;
}
const car3 = {
    name: 'BMW',
};
var newCar3 = createCar3(car);
console.log(car3); // { name: 'BMW'}
console.log(newCar3); // { name: 'Mercedes'}
