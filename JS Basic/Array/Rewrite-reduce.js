var students = [
    { name: 'John', born: 2005 },
    { name: 'Jack', born: 2002 },
    { name: 'Nick', born: 1997 },
    { name: 'Max', born: 2005 },
    { name: 'John', born: 2004 },
];

Array.prototype.reduce2 = function (
    callbackfunciton,
    initialNumber,
) {
    var arrayLength = this.length;
    var i = 0;
    if (arguments.length < 2) {
        initialNumber = this[0];
        i = 1;
    }
    for (; i < arrayLength; i++) {
        initialNumber += callbackfunciton(
            initialNumber,
            this[i],
            i,
            this,
        );
    }
    return initialNumber;
};

var totalAge = students.reduce(function (
    accumulator,
    value,
    index,
    originArray,
) {
    return accumulator + Math.abs(value.born - 2023);
});

console.log(totalAge);
