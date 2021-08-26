// type 1
const add = function add(num1,num2){
    return num1 * num2;
}
console.log(add(5,2));

// type 2
const add2 = function (num1,num2){
    return num1 * num2;
}
console.log(add2(5,2));

// arrow function
//  1
const add3 = (num1,num2) => num1 + num2;
console.log(add3(5,4));

// 2
const multipy = num => num * 5;
console.log(multipy(5));

// 3
const string = () => 'mahfujur rahman';
console.log(string());

// 4
const doMath = (x,y) => {
    const sum = x + y;
    const mul = sum * y;

    return mul;
}
console.log(doMath(2,4));