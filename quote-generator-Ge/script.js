const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const fbBtn = document.getElementById('fb-button')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

function showLoading() {
    quoteContainer.hidden = true
    loader.hidden = false
}

function hideLoading() {
    quoteContainer.hidden = false
    loader.hidden = true
}

function showNewQuote() {
    showLoading()
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    quoteText.textContent = quote.text
    // Check quote length to determine styling
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    hideLoading()
}

// Event listener
newQuoteBtn.addEventListener('click', showNewQuote)

// On Load
showNewQuote()