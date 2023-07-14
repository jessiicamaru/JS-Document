// forEach()
// every()
// some()
// find()
// filter()
// map()
// reduce()

var numbers = [4, 5, 6, 8, 2, 10]


//filter2 (trả về phần tử)
Array.prototype.filter2 = function(callbackfunciton) {
    var arrayLength = this.length;
    var outputArray = []

    for(var i=0; i<arrayLength; i++){
        if (callbackfunciton(this[i], i) === true){
            outputArray.push(this[i]);
        }
    }
    return outputArray; 
}

var result = numbers.filter2(function(value, index){
    return value > 5;
})

console.log(result);
