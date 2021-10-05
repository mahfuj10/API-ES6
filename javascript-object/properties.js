const bottle = {
    color:'red',
    price:'100',
    hold:'water',
    isCleaned: true
};

// get all properties
const keys = Object.keys(bottle);
console.log(keys);

// get all value
const value = Object.values(bottle);
// console.log(value);

const pairs = Object.entries(bottle);
// console.log(pairs);


Object.seal(bottle)
// Object.freeze(bottle)
// delete bottle.isCleaned;
bottle.height = 16;

// console.log(bottle);
