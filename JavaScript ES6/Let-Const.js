//Hosting:  -Chỉ có cú pháp var mới được hosting, let và const thì không
//Scope:    -let và const chỉ dùng được trong một block code
{
    let a = 10;
}
console.log(a); //error

// const khi khai báo ở 2 block code khác nhau, trùng biến, vẫn không báo lỗi, và giá trị của biến ưu tiên giá trị const được khai báo gần nhất
{
    const a = 10;
    {
        const a = 20;
        console.log(a); //20
    }
}

// một biến khai báo bằng const chỉ không được overwrite bằng toán tử gán thứ 2
const obj = { name: 'JS' };
obj = { name: 'JSON' }; //error

obj.name = 'JSON'; //success
