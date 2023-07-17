// forEach()
// every()
// some()
// find()
// filter()
// map()
// reduce()
var students = [
    { name: 'John', born: 2005 },
    { name: 'Jack', born: 2002 },
    { name: 'Nick', born: 1997 },
    { name: 'Max', born: 2005 },
    { name: 'John', born: 2004 },
];

//map2 (trả về phần tử)
Array.prototype.map2 = function (callbackfunciton) {
    var arrayLength = this.length;
    var outputArray = [];

    for (var i = 0; i < arrayLength; i++) {
        outputArray.push(
            callbackfunciton(this[i], i, this),
        );
    }
    return outputArray;
};

var newStudents = students.map2(function (
    value,
    index,
    originArray,
) {
    return {
        name: value.name + ' Doherty',
        born: value.born,
        order: index,
        getName: `hi, have a nice day ${
            value.name + ' Doherty'
        }`,
    };
});

console.log(newStudents);
