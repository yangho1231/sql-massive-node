var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('./config.js');

var massive = massive.connectSync({connectionString: config.connectionString});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.set('db', massive);
var db = app.get('db');
var controller = require('./productCtrl.js');
// controller.Create();
// controller.GetOne();
// controller.GetAll();
// controller.Update();
// controller.Delete();
app.get('/api/products', controller.GetAll);
app.get('/api/product/:productId', controller.GetOne);
app.put('/api/product/:productId', controller.Update);
app.post('/api/product', controller.Create);
app.delete('/api/product/:productId', controller.Delete);
app.listen(3000, function() {
  console.log("Listening");
});
