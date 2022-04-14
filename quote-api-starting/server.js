const express = require('express');
const app = express();

app.use(express.static('public/index.html'))

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

// GET QUOTE BY QUERY
app.get('/api/quotes', (req, res, next) => {    
    let personQuote = [];
    const foundQuery = req.query;
    const queryLength = Object.keys(foundQuery).length;

// Find if person in query is in quotes array
    const foundPerson = quotes.findIndex((quote) => 
        quote.person === foundQuery.person
    );

// Filter all quotes written by person in query
    const filterQuotes = (quotesArr, person) => {
      personQuote = quotesArr.filter((quote) => quote.person === person);
      return personQuote;
    }
    
    //If there is no query send all Quotes
    if(!queryLength){     
        res.send({quotes: quotes});
    }

    // if there is query
    else if(queryLength){

        if(foundPerson !== -1){
            res.send({quotes: filterQuotes(quotes, foundQuery.person) });
        }
        else{
            res.send([]);
        }
    }
})

// GET RANDOM QUOTE 
app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
});

//POST QUOTE
app.post('/api/quotes', (req, res, next) => {
    const quoteQuery = req.query;
    if(quoteQuery.quote && quoteQuery.person){
        quotes.push(req.query);
        res.send({quote: req.query})
    }else{
        res.status(400).send();
    }
})

// PUT QUOTE
app.put('/api/quotes/:id', (req, res, next) => {
    const paramsId = req.params.id;
    const quoteQuery = req.query;
    const foundIndex = quotes.findIndex(quote => quote.id == paramsId);
    if(foundIndex !== -1){
        quotes[foundIndex].quote = quoteQuery.quote;
        quotes[foundIndex].person = quoteQuery.person;
        res.send({quote: quoteQuery});
    }else{
        res.status(404).send('Id not found');
    }
});

// DELETE QUOTE
app.delete('/api/quotes/:id', (req, res, next) => {
    const paramsId = req.params.id;
    const foundIndex = quotes.findIndex(quote => quote.id == paramsId);
    if(foundIndex !== -1){
        res.send({quote: quotes[foundIndex]})
        quotes.splice(foundIndex, 1);
        console.log(foundIndex)
        ;
    }else{
        res.send("Id not found")
    }
});

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
