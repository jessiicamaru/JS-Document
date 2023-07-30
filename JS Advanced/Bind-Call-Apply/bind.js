const person = {
    name: 'John',
    sayHello: function () {
        console.log('Hello, my name is ' + this.name);
    },
};

const person2 = {
    name: 'Jane',
};

const boundFunction = person.sayHello.bind(person2);
boundFunction(); // Khi gọi hàm, this sẽ tham chiếu tới đối tượng person2, và kết quả sẽ là "Hello, my name is Jane".
