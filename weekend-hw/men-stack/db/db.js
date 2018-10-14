const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/food';

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose is disconnected`);
});

mongoose.connectoin.on('error', (err) => {
  console.log(err, 'mongoose error');
});
