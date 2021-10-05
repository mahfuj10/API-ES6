const first = {a:1, b:2};
const second = {a:1, b:2};


function compareObject(obj1,obj2){

    if(Object.keys(obj1).length !== Object.keys(obj2).length){
       return 'click';
    }
    for(const prop in obj1){

        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}

const isEqal = compareObject(first,second);
console.log(isEqal);