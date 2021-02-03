const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:


// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/beers.hbs', (req, res) => {
 
  punkAPI
  .getBeers()
  .then(beersFromApi => res.render('beers.hbs', {beersFromApi}))
  .catch(error => console.log(error));

})

app.get('/randombeer.hbs', (req, res) => {

  punkAPI
  .getRandom()
  .then(beersFromApi => {
    res.render('randombeer.hbs', {beersFromApi})
  })
  .catch(error => console.log(error));

})


app.listen(3000, () => console.log('🏃‍ on port 3000'));
