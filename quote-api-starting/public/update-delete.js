//update quote


const updateButton = document.getElementById('update-button');
const updateQuoteContainer = document.getElementById('new-update-quote')

updateButton.addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const quote = document.getElementById('quote').value;
    const person = document.getElementById('person').value;

    fetch(`/api/quotes/+${id}?quote=${quote}&person=${person}`, {
        method: 'PUT',
    })
    .then((response) => response.json())
    .then(({quote}) => {
        console.log(quote)
        const updatedQuote = document.createElement('div')
        updatedQuote.innerHTML = `
        <h3>Congrats, Quote with ID: ${quote.id} was updated</h3>
        <div class="quote-text">${quote.quote}</div>
        <div class="attribution">- ${quote.person}</div>
        <p>Go to the <a href="index.html">home page</a> to request and view update.</p>
        `
        updateQuoteContainer.appendChild(updatedQuote);
    });
});


//delete quote
const deleteButton = document.getElementById('delete-button');
const deletedQuoteContainer = document.getElementById('deleted-quote')

deleteButton.addEventListener('click', () => {
    const id = document.getElementById('id').value;

    fetch(`/api/quotes/` + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(({quote}) => {
        const deletedQuote = document.createElement('div');
        deletedQuote.innerHTML = `
        <h3>Congrats, Quote with ID: ${quote.id} was deleted</h3>
        <div class="quote-text">${quote.quote}</div>
        <div class="attribution">- ${quote.person}</div>
        <p>Go to the <a href="index.html">home page</a> to request and view quote.</p>
        `
        deletedQuoteContainer.appendChild(deletedQuote)
    });
});