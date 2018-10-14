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

// new route
app.get('/music/new', (req, res) => {
  res.render('new.ejs')
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

// delete route
app.delete('/music/:index', (req, res) => {
  Music.findByIdAndRemove(req.params.index, (err, foundMusic) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/music');
    }
  });
});

// edit that route
app.get('/music/:index/edit', (req, res) => {
  Music.findById(req.params.index, (err, foundMusic) => {
    res.render('edit.ejs', {
      music: foundMusic
    });
  });
});

// update thy route
app.put('/music/:index', (req, res) => {
  if (req.body.goodWithBass === 'on') {
    req.body.goodWithBass = true;
  } else {
    req.body.goodWithBass = false;
  }
  Music.findByIdAndUpdate(req.params.index, req.body, (err, updatedModel) => {
    res.redirect('/music');
  })
})



app.listen(3000, () => {
  console.log('App is alive');
});
