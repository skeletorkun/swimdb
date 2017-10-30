const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const dataset = require('./data/data');
const app = express();

const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

/* GET data from file */
app.get('/data', function(req, res, next) {
  res.json(dataset);
});

var count = dataset.length;
app.post('/add', function(req, res, next) {
  console.log('would normall add this to the db ' + req);
  res.json({
    "id":  ++count,
    "competition": "Mariestad",
    "distance": 2700,
    "date": "16-Jun-2018",
    "location": "Shanshi",
    "link": "http://ifeng.com/ridiculus/mus/vivamus/vestibulum/sagittis/sapien.xml?commodo=vestibulum&placerat=eget&praesent=vulputate&blandit=ut&nam=ultrices&nulla=vel&integer=augue",
    "longitude": 13.8508024,
    "latidute": 58.6701908
  });
  // db.collection('quotes').save(req.body, (err, result) => {
  //   if (err) return console.log(err)

  //   console.log('saved to database')
  //   res.redirect('/')
  // })
});

