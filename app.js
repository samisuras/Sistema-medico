const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

//Server configurations
app.set('port',3000);
app.use(express.static(path.join(__dirname, 'public')));

//Midlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Ruts API REST
app.use('/', routes);

//Server
app.listen((process.env.PORT || app.get('port')), ()=>{
    console.log('Server on port: ', app.get('port'));
});