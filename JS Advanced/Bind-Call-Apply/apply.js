function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}
function Chicken(name, weight, legs) {
    Animal.apply(this, [name, weight]);
    // Hoặc có thể dùng như sau Animal.apply(this, arguments);
    this.legs = legs;
}
const sonDang = new Chicken('Sơn Đặng', 66, 2);
console.log(sonDang);

/**
 * apply có tính chất tương tự như call chỉ khác là truyền vào một mảng, hoặc ta có thể dùng arguments
 */
