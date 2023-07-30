function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}
function Chicken(name, weight, legs) {
    Animal.call(this, name, weight);
    this.legs = legs;
}
const sonDang = new Chicken('Sơn Đặng', 66, 2);
console.log(sonDang);

/**
 * Ở đây this ở trong call được trỏ tới biến sonDang
 * call được dùng để gọi tới constructor function Animal, nhằm thừa hưởng lại các tuộc tính name, weight đã có sẵn trong Animal
 */
