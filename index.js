const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs'))
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('index');
});

app.all('*', (req, res) => {
    res.status(404).render('404')
});

app.listen(1000, () => {
    console.log("running at http://localhost:1000!");
});