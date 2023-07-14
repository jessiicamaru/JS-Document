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

courses.length = 100;

//forEach2
Array.prototype.forEach2 = function(callbackfunciton){
    coursesLength = this.length;
    for (var i in this){
        if (this.hasOwnProperty(i)){
            callbackfunciton(this[i], i, this);
        }
    }
}

var newArray = courses.forEach2(function(course, index, originArray){
    console.log(index, course);
})

