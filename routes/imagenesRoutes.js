// routes/imagenesRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const ImagenesController = require('../controllers/imagenesController');

// Configuración de Multer para subir imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Agrega la extensión del archivo
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('imagen'), ImagenesController.create);
router.get('/', ImagenesController.getAll);
router.delete('/:id', ImagenesController.delete);

module.exports = router;
