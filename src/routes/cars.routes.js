const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars.controller');

router.get('/', carsController.index);

router.get('/car/:id', carsController.info);

module.exports = router;