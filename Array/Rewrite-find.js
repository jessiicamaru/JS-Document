// forEach()
// every()
// some()
// find()
// filter()
// map()
// reduce()

var courses = [
    'Java',
    'Php',
    'Gotlin',
    'C++'
]

//find2 (trả về phần tử)
Array.prototype.find2 = function(callbackfunciton) {
    var arrayLength = this.length;

    for(var i=0; i<arrayLength; i++){
        if (callbackfunciton(this[i], i) === true) {
            return this[i];
        }
    }
    return undefined;
}

var result = courses.find(function(value, index){
    return value === 'C++';
})

console.log(result);
