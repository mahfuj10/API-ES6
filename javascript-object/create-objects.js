// 1. using object literal 
const student = {name:"Mahim",id:"5",group:"science"};
console.log(student)


//2. constructor
const human = new Object();
console.log(human);


//3.
const animal = Object.create(null);
console.log(animal);


// 4. class
class students {
        
    constructor(name,id){
    this.name = name;
    this.id = id;
        }
}
const student1 = new students ('mahi','12');
console.log(student1);


// 5. function
function cars(brand,model){
    this.brand = brand;
    this.model = model;
}
const car = new cars('toyota','premio');
console.log(car);