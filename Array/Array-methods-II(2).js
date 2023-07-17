var students = [
    { name: 'John', born: 2005 },
    { name: 'Jack', born: 2002 },
    { name: 'Nick', born: 1997 },
    { name: 'Max', born: 2005 },
    { name: 'John', born: 2004 },
];
//Các thuộc tính dưới đây được truyền vào tham số là một function(value, index)
//các thuộc tính luôn trả về 2 giá trị là value(các phần tử), index(thứ tự phần tử)

//Ở method reduce() có 4 tham số
//.reduce(function (accumulator, value, index, originArray),initialValue);
//accumulator(giá trị tích lũy) nhận giá trị initialValue(giá trị khỏi tạo) ở lần lặp đầu tiên
//bắt đầu từ lần thứ 2 function truyền vào return về giá trị gì thì accumulator nhận giá trị đó

//Tính tuổi các học sinh tính tới 2023
var totalAge = students.reduce(function (
    accumulator,
    value,
    index,
    originArray,
) {
    return accumulator + Math.abs(value.born - 2023);
},
0);

console.log(totalAge);
