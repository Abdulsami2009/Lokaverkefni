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

const getaddcarform = (req, res) => {
    res.render('add-car', {
        title: 'Add New Car'
    });
};

const createnewcar = async (req, res) => {
    try {
        const { title, price, year, description, image_url } = req.body;

        if (!title) {
            return res.status(400).send(
                'Title is required'
            );
        }

        if (!price) {
            return res.status(400).send(
                'Price is required'
            );
        }

        if (!year) {
            return res.status(400).send(
                'Year is required'
            );
        }

        if (!description) {
            return res.status(400).send(
                'Description is required'
            );
        }

        if (!image_url) {
            return res.status(400).send(
                'Image URL is required'
            );
        }

        const newCar = await carService.createcar(title, price, year, description, image_url);

        res.redirect(`/cars/${newCar.id}`);
    } catch (error) {
        console.error('Error adding new car:', error);
        res.status(500).send(
            'Internal Server Error: ' + error.message
        );
    }
  
};

module.exports = {
    getcardetails,
    gethomepage,
    aboutme,
    createnewcar,
    getaddcarform
};