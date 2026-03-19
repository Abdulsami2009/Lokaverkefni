const carService = require('../lib/cars.service');

const getallcars = async (req, res) => {
    try {
        const cars = await carService.getallcars();

        res.render('index', {
            title: 'Cars',
            cars: cars
        });
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).send('my fault - Internal Server Error' );
    }
};

module.exports = {
    getallcars
};