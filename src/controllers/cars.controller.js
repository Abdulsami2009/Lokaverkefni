const carService = require('../lib/cars.service');

const index = (req, res) => {
    const cars = carService.getCars();
    res.render('index', { title: 'Cars', cars });
};

const info = (req, res) => {
    const { id } = req.params;
    const car = carService.getCarId(id);


    if (!car) {
        return res.status(404).render('404', { title: 'Car Not Found' });
    }

    res.render('car-details', { title: car.title, car });
};

module.exports = {
    index,
    info
};