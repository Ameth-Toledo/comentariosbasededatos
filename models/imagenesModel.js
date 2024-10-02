const db = require('../services/dbService');

const ImagenesModel = {
    create: (url, descripcion, callback) => {
        db.query('INSERT INTO imagenes (url, descripcion) VALUES ($1, $2) RETURNING id', [url, descripcion], (err, result) => {
            callback(err, result.rows[0]);
        });
    },
    getAll: (callback) => {
        db.query('SELECT * FROM imagenes', (err, result) => {
            callback(err, result.rows);
        });
    },
    delete: (id, callback) => {
        db.query('DELETE FROM imagenes WHERE id = $1', [id], callback);
    }
};

module.exports = ImagenesModel;
