
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))

function getUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => getValue(json))
}

function getValue(json){
    const ul = document.getElementById('users');

for(const user of json){
    const li  = document.createElement('li');
    li.innerText =  `name : ${user.name}    email: ${user.email} `;
    ul.appendChild(li)
}
} 

 */

 

function placeholder(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postApi(data))
}

function postApi(api){

    for(const ap of api){
    const dataContainer = document.getElementById('datas');
    const div = document.createElement('div');
    div.classList.add('style');
    div.innerHTML = `<h3> ${ap.title} </h3>
                          <p> ${ap.body} </p>`

       dataContainer.appendChild(div);
    }
  
}
 

/* function comment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(com => com.json())
    .then(data => console.log(data))
}
comment() */ 