const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  artiest: {type: String, required: true},
  genre: {type: String},
  goodWithBass: {type: Boolean},
  image: {type: String}
});

const music = [{
  artiest: 'Mac Miller',
  genre: 'Hip Hop',
  goodWithBass: true,
  image: 'https://pixel.nymag.com/imgs/daily/vulture/2018/09/05/mac-miller/04-mac-miller-6.w1200.h630.jpg'
};
  {
    artiest: 'Beetoven',
    genre: 'Classical',
    goodWithBass: 'false',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/220px-Beethoven.jpg'
  };
  {
    artiest: 'Bassnectar',
    genre: 'Dub Step',
    goodWithBass: true,
    image: 'https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTUzMjA4MDExMjYxNzQ4MjMx/bassnectar.jpg'
  };
]

module.exports = mongoose.model('Music', musicSchema);
