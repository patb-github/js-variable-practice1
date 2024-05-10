// let variable
// Block Scope 1 - let inside of block
{
    let x = 1;
    console.log(x);
}
// console.log(x); // Error: x is not defined

// Block Scope 2 - reassignment of global variable through block scope
let y = 2;
{
    y = 3;
    console.log(y);   // logs 3
}
console.log(y);       // logs 3

// Block Scope 3 - 'z' declared in block shadows global variable in block scope 
let z = 8;
{
    let z = 10;
    console.log(z);   // logs 10
}
console.log(z);       // logs 8

// Function Scope
function my_stock() {
    let my_stock = 0;       // shadows my_stock function
    console.log(my_stock);  // logs 0
}

console.log(my_stock);      // logs [Function: my_stock]


