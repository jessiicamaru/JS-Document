'use strict';
const student = Object.freeze({
    fullName: 'Nguyen Van A',
});
student.fullName = 'Nguyen Van B';
// Writable => false
console.log(student); //Error message

// Hoặc

const student2 = {};
Object.defineProperty(student2, 'fullName', {
    value: 'Nguyen Van A',
    writable: false,
});
student2.fullName = 'Nguyen Van B';
// Writable => false
console.log(student); //Error message
