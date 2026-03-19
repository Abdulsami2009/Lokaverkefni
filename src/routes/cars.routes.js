const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars.controller');

router.get('/', carsController.getallcars);

module.exports = router;