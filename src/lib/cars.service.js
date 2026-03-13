const fs = require('fs');
const path = require('path');

const loadData = () => {
    const filePath = path.join(__dirname, '../data/cars.json');
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

const getCars = () => {
    const cars = loadData();
    return cars;
};

const getCarId = (id) => {
    const cars = loadData();
    return cars.find((c) => c.id === id);
};

module.exports = {
    getCars,
    getCarId
};