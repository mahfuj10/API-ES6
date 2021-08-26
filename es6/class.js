class Support {
    name;
    destination = 'support web dev';
    address;
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const mahim = new Support('mahfuj','bd');
console.log(mahim)

const a = mahim.startSession();
console.log(a)