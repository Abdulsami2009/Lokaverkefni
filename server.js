const express = require('express');
const path = require('path');

const carsRouter = require('./src/routes/cars.routes');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', carsRouter);

app.get('/about', (req, res) => {
    res.render('aboutme', { title: 'About Me'});
});


app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Síða fannst ekki' });
});


app.listen(PORT, () => {
    console.log(`Server keyrir a http://localhost:${PORT}`);
    console.log('Stop with ctrl + C');
});