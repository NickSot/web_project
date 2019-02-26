const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

//app.set('static', __dirname + '/views/');
app.use(express.static('views'));
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.render('index');    
});

app.get('/weapon/:id', (req, res) => {
    res.render('weapon');
});

app.listen(3000);