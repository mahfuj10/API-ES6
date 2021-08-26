const numbers = [10,25,48,49,65,25,14,16];
const filter = numbers.filter(number => number > 20);
console.log(filter);


const products = [
        { name: 'water bottle', price: 50, color: 'yellow' },
        { name: 'mobile phone', price: 15000, color: 'black' },
        { name: 'smart watch', price: 3000, color: 'black' },
        { name: 'sticky note', price: 30, color: 'pink' },
        { name: 'water glass', price: 3, color: 'white' }
];      

const productPrice = products.filter(product => product.price > 100);
console.log(productPrice);

const whiteProduct = products.find(product => product.color == 'white');
console.log(whiteProduct);

