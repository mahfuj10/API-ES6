const bottle = {
        color:'red',
        price:'100',
        hold:'water',
        isCleaned: true
};

const keys = Object.keys(bottle);

for(const prop of keys){
    console.log(prop, bottle[prop]);
}

// ------------------

const entries = Object.entries(bottle);

/* const [key,value] = entries;
console.log(key,value) */

for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}