const express = require('express');
const app = express();
const Music = require('../models/music');
 const bodyParser = require('body-parser')
 const methodOverride = require('method-override')

 app.use(bodyParser.urlencoded({extended: false}));

 app.get('/', (req,res) => {
   console.log('clicked');
   res.send('It is Aliveeeeeee');
})

app.get('/music/:index', (req, res) => {
  res.render('index.ejs', {
    music: Music
  });
})

app.listen(3000, () => {
  console.log('App is alive');
})
