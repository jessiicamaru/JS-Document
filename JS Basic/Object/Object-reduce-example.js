function arrToObj(arr) {
    var newObj = arr.reduce(function (accumulator, value, index, originArray) {
        accumulator[value[0]] = value[1];
        return accumulator;
    }, {});
    return newObj;
}

// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

/*-----------------------------------------------------------------------------*/

var depthArray = [1, 2, [3, 4], 5, [6, 7, 8]];

var newArray = depthArray.reduce(function (accumulator, value, index, originArray) {
    return accumulator.concat(value);
}, []);

console.log(newArray);
