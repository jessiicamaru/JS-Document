// forEach()
// every()
// some()
// find()
// filter()
// map()
// reduce()

var numbers = [4, 5, 6, 8, 2, 10]

//every2
Array.prototype.every2 = function(callbackfunciton) {
    // var result = true;
    var arrayLength = this.length;
    for (var i=0; i<arrayLength; i++){
        if (callbackfunciton(this[i], i) === false) {
            return false;
        } 
    }
    return true;
}

var result = numbers.every2(function(number, index){
    return number < 10;
})

console.log(result);
