const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const authorsController = require('./controllers/authors');

require('./db/db');

const usersController = require('./controllers/user');


// make sure to require this before our controller
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// setting up the middleware for our controller
// where every route will start with /authors
app.use('/users', usersController);


app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.listen(3000, () => {
  console.log('We are Running');
})
