const a = {
    name: 'Mercedes',
};
const b = a;
const c = b;
const d = C;
b.name = 'BMW';
console.log(a.name); // Output: 'BMW'
c.name = 'Porsche';
console.log(a.name); // Output: 'Porsche'
d.name = 'Range Rover';
console.log(a.name); // Output: 'Range Rover'
