
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}

loadBuddies();

const displayBuddies = data => {

const parent = document.getElementById('div');
const buddies = data.results;
console.log(data)
for(const user of buddies){
const p = document.createElement('p');
p.innerText = `${user.email}  Name:${user.name.first}`;
parent.appendChild(p)

}
}