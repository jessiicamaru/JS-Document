var students = [
    { name: 'John',born: 2005 },
    { name: 'Jack',born: 2002 },
    { name: 'Nick',born: 1997 },
    { name: 'Max',born: 2005 },
    { name: 'John',born: 2004 }
]
//Các thuộc tính dưới đây được truyền vào tham số là một function(value, index)
//các thuộc tính luôn trả về 2 giá trị là value(các phần tử), index(thứ tự phần tử)

//forEach() duyệt các phần tử của mảng trả về value
students.forEach(function (student, index) {
    console.log(index, student);
});

//every() kiểm tra tất cả các phần tử phải thỏa mãn một điều kiện (giống toán tử &&)
var isYoung = students.every(function (student, index) {
    return student.born > 1995; //kiểm tra tất cả các học sinh có năm sinh lớn hơn 1995 hay không
});
console.log(isYoung); //True

//some() kiểm tra 1 trong các phần tử thỏa mãn một điều kiện (giống toán tử ||)
var is2002 = students.some(function (student, index) {
    return student.born === 2002; //kiểm tra có học sinh nào sinh năm 2002 không
});
console.log(isYoung); //True

//find() tìm ra 1 phần tử đầu tiên thỏa mãn một điều kiện 
var findJohn = students.find(function (student, index) {
    return student.name === 'John';
});
console.log(findJohn); //{ name: 'John',born: 2005 }

//filter() tìm ra tất cả các phần tử thỏa mãn một điều kiện rồi nén vào 1 mảng
var findJohn = students.filter(function (student, index) {
    return student.name === 'John';
});
console.log(findJohn); //[{...}, {...}]
