const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars_controller');

router.get('/', carsController.gethomepage);
router.get('/cars/:id', carsController.getcardetails);
router.get('/about', carsController.aboutme);

module.exports = router;