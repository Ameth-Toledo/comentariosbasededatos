const db = require('../services/dbService');

const ComentariosModel = {
    create: (nombre, comentario, callback) => {
        db.query('INSERT INTO comentarios (nombre, comentario) VALUES ($1, $2) RETURNING id', [nombre, comentario], (err, result) => {
            callback(err, result.rows[0]);
        });
    },
    getAll: (callback) => {
        db.query('SELECT * FROM comentarios', (err, result) => {
            callback(err, result.rows);
        });
    },
    update: (id, nombre, comentario, callback) => {
        db.query('UPDATE comentarios SET nombre = $1, comentario = $2 WHERE id = $3', [nombre, comentario, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM comentarios WHERE id = $1', [id], callback);
    }
};

module.exports = ComentariosModel;
