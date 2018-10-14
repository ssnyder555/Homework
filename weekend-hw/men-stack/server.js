const express = require('express');
const app = express();
const Music = require('./models/music');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// require database
require('./db/db'); 

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// index route
app.get('/music', (req, res) => {

  music.find{}, (err, allMusic) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index.ejs', {
        music: allMusic
      });
    }
  })
});

// post route
app.post('/music', (req, res) => {
  console.log(req.body, 'this is info home')
  if (req.body.goodWithBass === 'on') {
    req.body.goodWithBass = true;
  } else {
    req.body.goodWithBass = false;
  }
  Music.create(req.body, (err, createdMusic) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdMusic);
      res.redirect('/music');
    }
  });
})

// show route
app.get('/food/:index', (req, res) => {
  Music.findById(req.params.index, (err, foundMusic) => {
    res.render('show.ejs', {
      music: foundMusic
    })
  })
});



app.listen(3000, () => {
  console.log('App is alive');
});
