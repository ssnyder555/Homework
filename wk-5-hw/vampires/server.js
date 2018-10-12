const express = require('express');
const app = express();
const Objects = require('./models/objects');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));

app.get('/', (request, response) => {
  response.send('people are objects')
})

app.get('/objects', (req, res) => {
  res.render('index.ejs', {
    classmates: Objects
  });
});

app.delete('/objects/:index', (req, res) => {
  Objects.splice(req.params.index, 1)
  res.redirect('/objects');
})
 // app.post('/', (req, res) => {
 //   console.log(req.body, "this is where info lives");
 //
 //   Objects.push(req.body);
 //  res.redirect('/objects'
 // })

 app.get('/:id/edit', (req, res) => {
   res.render('edit.ejs', {
     classmates: Objects[req.params.id],
     id: req.params.id
   });
 });

app.listen(3000, () => {
  console.log("I am listening")
});
