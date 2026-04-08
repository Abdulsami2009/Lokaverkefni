const db = require('./db');

const getallcars = async () => {
    const result = await db.query('SELECT * FROM cars ORDER BY id ASC');
    return result.rows;
};

const getcarbyid = async(id) => {
    const result = await db.query('SELECT * FROM cars WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];
    
};

const createcar = async (title, description, image_url) => {
    const sql = `
    INSERT INTO cars (title, description, image_url)
    VALUES ($1, $2, $3)
    RETURNING *;
    `;

    const values = [title, description, image_url];
    const result = await db.query(sql, values);

    return result.rows[0];
};

module.exports = {
    getallcars,
    getcarbyid,
    createcar
};