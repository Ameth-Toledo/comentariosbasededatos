// controllers/comentariosController.js
const ComentariosModel = require('../models/comentariosModel');

const ComentariosController = {
    create: (req, res) => {
        const { nombre, comentario } = req.body;
        ComentariosModel.create(nombre, comentario, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: result.insertId, nombre, comentario });
        });
    },
    getAll: (req, res) => {
        ComentariosModel.getAll((err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    },
    update: (req, res) => {
        const { id } = req.params;
        const { nombre, comentario } = req.body;
        ComentariosModel.update(id, nombre, comentario, (err) => {
            if (err) return res.status(500).send(err);
            res.json({ id, nombre, comentario });
        });
    },
    delete: (req, res) => {
        const { id } = req.params;
        ComentariosModel.delete(id, (err) => {
            if (err) return res.status(500).send(err);
            res.sendStatus(204);
        });
    }
};

module.exports = ComentariosController;
