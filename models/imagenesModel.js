// models/imagenesModel.js
const db = require('../services/dbService');

const ImagenesModel = {
    create: (url, descripcion, callback) => {
        db.query('INSERT INTO imagenes (url, descripcion) VALUES (?, ?)', [url, descripcion], callback);
    },
    getAll: (callback) => {
        db.query('SELECT * FROM imagenes', callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM imagenes WHERE id = ?', [id], callback);
    }
};

module.exports = ImagenesModel;
