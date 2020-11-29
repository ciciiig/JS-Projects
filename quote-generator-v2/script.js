function showNewQuote() {
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    console.log(quote)
}

// On Load
showNewQuote()