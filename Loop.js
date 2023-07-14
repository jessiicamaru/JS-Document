var info = {
    name: 'Dung Hoang',
    phoneNumber: '113',
    age: 18,
}

//Object.keys(info) trả về cho ta 1 mảng gồm các keys của info
for (var value of Object.keys(info)) {
    console.log(info[value]);
}

//Object.values(info) trả về cho ta 1 mảng gồm các value của info
for (var value of Object.values(info)) {
    console.log(value);
}

