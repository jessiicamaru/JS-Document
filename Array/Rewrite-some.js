// forEach()
// every()
// some()
// find()
// filter()
// map()
// reduce()

var numbers = [4, 5, 6, 8, 2, 10]

//some2
Array.prototype.some2 = function(callbackfunciton) {
    // var result = false;
    var arrayLength = this.length;

    for(var i=0; i<arrayLength; i++){
        if (callbackfunciton(this[i], i) === true) {
            return true;
        }
    }
    return false;
}

var result = numbers.some2(function(number, index){
    return number === 7;
})

console.log(result);
