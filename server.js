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

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.post('/register', (req, res) => {
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    res.redirect('/');
});

app.listen(3000);