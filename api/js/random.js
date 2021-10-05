const randomUser = () => {

    fetch(`https://randomuser.me/api/?password=CHARSETS,MIN_LENGTH-MAX_LENGTH`)
    .then(res => res.json())
    .then(data => displayUser(data.results))
}
randomUser()
const displayUser = users => {
   
for(const user of users){
    console.log(user)
    const clients = document.getElementById('clients')
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `<div>
                    <img class="rounded-circle mb-3 ms-3" src="${user.picture.large}">
                    <p class="mb-0">My name is :</p>
                    <h5>${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <p class="mb-0">gender: ${user.gender}</p>
                    <p class="mb-0">phone: ${user.phone}</p>
                    <p class="mb-0">email: ${user.email}</p>
                    </div>`
    clients.appendChild(div);
    div.style.width = "350px"
    div.style.padding = "30px"
}
}