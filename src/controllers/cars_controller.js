const carService = require('../lib/cars_service');

const gethomepage = async (req, res) => {
    try {
        const cars = await carService.getallcars();
        console.log('Cars fetched successfully:', cars);
        res.render('index', {
            title: 'Car Showroom',
            cars: cars
        });
    } catch (error) {
        console.error('Error fetching cars - Message:', error.message);
        console.error('Stack:', error.stack);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
};
const getcardetails = async (req, res) => { 
    try {
        const id = req.params.id;
        const car = await carService.getcarbyid(id);

        if (!car) {
            return res.status(404).send('Car not found');
        }

        res.render('cardetails', {
            title: 'Car Details',
            car: car
        });
    } catch (error) {
        console.error('Error fetching car details:', error);
        res.status(500).send('Internal Server Error');
    }
};

const aboutme = (req, res) => {
    try {
        res.render('aboutme', {
            title: 'about me'
        });
    } catch (error) {
        console.error('Error fetching about me page:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getcardetails,
    gethomepage,
    aboutme
};