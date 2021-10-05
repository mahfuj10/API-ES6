const loadQuotes = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quoteElemnt = document.getElementById('block');
    quoteElemnt.innerText = quote.quote;
}