
const numbers = [4, 6, 8, 10];
const output = numbers.map(x => x * 2);
// console.log(output);


const sqare = [4, 6, 8, 10];
const output2 = numbers.forEach(x => x * x);
console.log(output2);

// more map

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const length = friends.map(friend => friend.length);
console.log(length);
            

const products = [
            { name: 'water bottle', price: 50, color: 'yellow' },
            { name: 'mobile phone', price: 15000, color: 'black' },
            { name: 'smart watch', price: 3000, color: 'black' },
            { name: 'sticky note', price: 30, color: 'pink' },
            { name: 'water glass', price: 3, color: 'white' }
];          

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productName);
console.log(productPrice);