const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (request, response) => {
  response.send('This is Pokemon')
})


app.get('/pokemon/:index', (req, res) => {
  res.render('index.ejs', {
    list: Pokemon[req.params.index]
   });
}); 

app.get('/pokemon', (req, res) => {
   res.send(Pokemon)
 })


app.listen(3000, () => {
  console.log('I am listening');
});
