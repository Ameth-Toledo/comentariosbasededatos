// controllers/imagenesController.js
const ImagenesModel = require('../models/imagenesModel');

const ImagenesController = {
    create: (req, res) => {
        const { descripcion } = req.body;
        const url = `http://localhost:3000/uploads/${req.file.filename}`;
        ImagenesModel.create(url, descripcion, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: result.insertId, url, descripcion });
        });
    },
    getAll: (req, res) => {
        ImagenesModel.getAll((err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    },
    delete: (req, res) => {
        const { id } = req.params;
        ImagenesModel.delete(id, (err) => {
            if (err) return res.status(500).send(err);
            res.sendStatus(204);
        });
    }
};

module.exports = ImagenesController;
