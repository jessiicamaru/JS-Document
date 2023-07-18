//Optional-chaining (?.) dấu hỏi chấm và dấu chấm liền nhau
//Dùng để kiểm tra một gái trị mà không chắc chắn nó tồn tại hay không

var parentObj = {
    name: 'John',
    children1: {
        name: 'Nick',
        children2: {
            name: 'Nick2',
            // children3: {
            //     name: 'Nick3',
            // },
        },
    },
};

console.log(parentObj.children1.children2.children3.name); //Error
console.log(parentObj?.children1?.children2?.children3?.name); //Không báo lỗi
