
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = data => {

    for(const country of data){
        const parent = document.getElementById('countries');
        const div = document.createElement('div');
        div.innerHTML = ` <h3>${country.name}</h3>
                          <p>${country.capital}</p>
                          <button onclick = "loadCountryByName('${country.name}')">Details</button>`
        div.classList.add('country')
        parent.appendChild(div);
    }


}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {

const countryDiv = document.getElementById('country-detail');
countryDiv.innerHTML =` <h3>${country.name}</h3>
                        <p>${country.population}</p> 
                <img width="300px" src="${country.flag}"> `
}