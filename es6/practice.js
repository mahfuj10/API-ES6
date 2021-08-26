/* const numbers = [45, 12, 36, 84];
numbers.unshift(25);
// console.log(numbers)

function getSum(a, b=9){
    return a+b;
} 
// console.log(getSum(2, 7))

const y = x => x*x; 
const x = y(5); 
console.log(x);

console.log(`${2+3}`);

const myFunc = () => console.log('nayok');
myFunc();

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const arary2 = [...nayikas];
console.log(arary2)

const cars=['toyota', 'honda','mercedes'];
 const newCars= [...cars , 'ferrari'];
 console.log(newCars) */


/*   function min(nums) {  
    
    return Math.min(nums)
    
}

  console.log(min( [1,3,2 ]))  */
/*   const cube=x=> x*x*x; console.log(cube(2))
const [a, b] = [1,2,3,4,45,5]; console.log(a+b); */

/* const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y) */

/* const nums = [1,2,3,4,5]; 

let output = nums.filter(n => n % 2);

console.log(output); 



const product = { name: 'Laptop', model:'Yoga 3', price: 49000, dusk: '512SSD'}

const {price} = product;

console.log(price)  */

/* let x = 25; 
x = 30;
console.log(x)
const x = 25; 
x = 30;
console.log(x) */

/* const name = 'mahfuj';
const hobby = 'car';
const text = `my name is ${name}. My hobby is ${hobby}`
console.log(text); */

// একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

/* const devide = num => num / 5 ;
console.log(devide(45)); */
/* 
const math = (num1,num2) => {

  const x = num1 + 2;
  const y = num2 + 2;
  const multipy = x * y;
  return multipy;
}
const z = math(5,2);
console.log(z); */

/* const multipy = (num1,num2,num3) => { const x =  num1 * num2 * num3;
return x; };
console.log(multipy(2,2,5)) */

/* const number = (num1,num2) => {
    const sum1 = num1 + 2
    const sum2 = num2 + 2
    const multipy = sum1 * sum2;
    return multipy;
}
console.log(number(4,4));
 */

/* 
const array = [2,4,3,1,5,6,7,8,9,45,64,15,14,12,34,31,17];
const multipy = array.map(x => x  * 2 );
console.log(multipy); */
/* 

const array = [2,4,3,1,5,6,7,8,9,45,64,15,14,12,34,31,17];
const filter = array.filter(n => n % 2);
console.log(filter); */

/* 
const products = [
{name:'samsung', price:'5100',made:'china'},
{name:'oneplus', price:'5000',made:'china'},
{name:'nokia', price:'4100',made:'china'},
{name:'nokia', price:'4100',made:'china'},
{name:'nokia', price:'4100',made:'china'},
{name:'nokia', price:'4100',made:'china'},
]
const find = products.find(product => product.price == '5000');
console.log(find); */

/* const product = ['s','v','proggram'];
const [ made ] = product.reverse()
console.log(made); */

/* const products = [
  {name:'samsung', price:'5100',made:'china'},
  {name:'oneplus', price:'5000',made:'china'},
  {name:'nokia', price:'4100',made:'china'},
  {name:'nokia', price:'4100',made:'china'},
  {name:'nokia', price:'4100',made:'china'},
  {name:'nokia', price:'4100',made:'china'},
  ]
  
const [samsung,oneplus,nokia] = products;
console.log(oneplus) */

/* function numbers(num1,num2,num3 = 7){
  return num1 + num2 + num3;
}
console.log(numbers(5,5,5)) */

/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

/* const student = {

name: 'mahim',
id: '25',
std : {name2:'rahim',roll:'32',class:'8'}

}

console.log(student.std?.name2?.id) */

const numbers = [4, 6, 8, 10];
const output = numbers.map();
console.log(output);