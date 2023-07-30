let a = {
    name: 'Mercedes',
};
let b = a;
a.name = 'BMW';
console.log(b); // {name: 'BMW'}
