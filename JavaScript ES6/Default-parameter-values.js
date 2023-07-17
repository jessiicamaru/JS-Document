//Giá trị mặc định của tham số
function sum(a = 2, b) {
    return a + b;
}

console.log(sum(undefined, 1)); //3
console.log(sum(3, 1)); //5
// khi không truyền tham số vào a, hoặc truyền undefined a sẽ tự động nhận giá trị mặc định là 2
