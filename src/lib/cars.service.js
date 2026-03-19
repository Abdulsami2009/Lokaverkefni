const db = require('../lib/db');

const getallcars = async () => {
    const result = await db.query('SELECT * FROM cars ORDER BY id ASC');
    return result.rows;
};

module.exports = {
    getallcars
};