const express = require('express');
const app = express()
// const music = require('./models/music')

// this is to get something on the page
app.get('/', (req, res) => {
  res.send('les work!')
})

// this is to make sure all the data is showing up on the page
app.get('/music', (req, res) => {
  res.send(music)
})

// this is to make sure the exact index of datai is showing up
app.get('/music/:index', (req, res) => {
  // res.send(music[req.params.index])
  res.render('shows.ejs', {
    music: music[req.params.index]
  })
})




app.listen(3000, () => {
  console.log('This app is live');
})
