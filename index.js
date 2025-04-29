
const generateQuoteBtn = document.getElementById("generateQuoteBtn");
const display = document.getElementById("display");
const quoteDisplay = document.getElementById("quoteDisplay");
const authorDisplay = document.getElementById("authorDisplay");

generateQuoteBtn.addEventListener("click", (event) => {
    generateQuote();
})



function generateQuote(){
    fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        const quote = data.content;
        const author = data.author;
        quoteDisplay.textContent = quote;
        authorDisplay.textContent = author;
    })
    .catch(error => {
        console.error(error);
        quoteDisplay.textContent = "Oops! Couldn't fetch a quote. Please try again later.";
        authorDisplay.textContent = "";
    })


}



