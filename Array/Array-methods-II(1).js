var students = [
    { name: 'John',born: 2005 },
    { name: 'Jack',born: 2002 },
    { name: 'Nick',born: 1997 },
    { name: 'Max',born: 2005 },
    { name: 'John',born: 2004 }
]
//Các thuộc tính dưới đây được truyền vào tham số là một function(value, index)
//các thuộc tính luôn trả về 2 giá trị là value(các phần tử), index(thứ tự phần tử)
//Ở method map() có tham số thứ 3 là originArray là mảng gốc

//function truyền vào return về cái gì thì newStudents nén vào mảng cái đó
//mảng có độ dài bằng với mảng gốc
var newStudents = students.map(function(value, index, originArray){
    return {
        name: value.name + ' Doherty',
        born: value.born,
        order: index,
        getName: `hi, have a nice day ${value.name + ' Doherty'}`,
    };
})

console.log(newStudents);