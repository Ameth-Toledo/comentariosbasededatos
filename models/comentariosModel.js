// models/comentariosModel.js
const db = require('../services/dbService');

const ComentariosModel = {
    create: (nombre, comentario, callback) => {
        db.query('INSERT INTO comentarios (nombre, comentario) VALUES (?, ?)', [nombre, comentario], callback);
    },
    getAll: (callback) => {
        db.query('SELECT * FROM comentarios', callback);
    },
    update: (id, nombre, comentario, callback) => {
        db.query('UPDATE comentarios SET nombre = ?, comentario = ? WHERE id = ?', [nombre, comentario, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM comentarios WHERE id = ?', [id], callback);
    }
};

module.exports = ComentariosModel;
