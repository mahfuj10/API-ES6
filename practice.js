/* onst fetchedData = async (url) => {
  const response = await fetch(url);

  const data = await response.json();
  
  return data;
}; */

// const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());
// function number = () => return 89
// const number = () => 89;
// console.log(number());
/* const number = num1 => num1 / 7;
const num = number(58);
console.log(num) */
/* const sum = (num1,num2) => {
    const first = num1 + num2;
    return first / 2;
}
console.log(sum(10,15)); */
/* const numbers = (num1,num2) => {
    const first = num1 + 7; 
    const second = num2 + 7;
    const total = first+ second;
    return total; 
}
console.log(numbers(5,10)) */

// const array = [5,10,4,6,2,1,4,7,8,87,12];
// array.map(arr => console(arr / 7))

/* const friend = {
    name:'mahfujur rahman',
    class:10,
    id:5,
    group:'science',
}
const{ id,group} = friend
console.log(group) */

fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(res => res.json())
.then(data => displayPhoto(data))

const displayPhoto = data => {
    const parent = document.getElementById('container');
    data.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${photo.url}" onclick = details('${photo.id}')>`
        parent.appendChild(div);

    
    })
}

const details = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res => res.json())
    .then(data => xyz(data))
}
const xyz = (aaa) => {
    const secondParent = document.getElementById('display');
    const div = document.createElement('div');
    console.log(aaa)
    div.innerHTML = `<h1>${aaa.title}</h1>`
    secondParent.appendChild(div)
}