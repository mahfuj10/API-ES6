
const fish = {id: 25, name:"king hilsa", price:500, phone : "012421525454",address:'chadpur',dress:'silver'};

// const phone = fish.phone;
// console.log(phone)

const { phona, id, name, price } = fish;
console.log(phone,id,price);

const company = {
    name: 'GP',
    ceo: {id:1 , name: 'ajmol', food: 'fuchka'},
    web: {
        work:'wbsite-devolopment',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
}; 

const {work,framework} = company.web;
const {food} = company.ceo;
const {second,third} = company.web.tech;
console.log(work,third,food);