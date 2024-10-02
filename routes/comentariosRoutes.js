// routes/comentariosRoutes.js
const express = require('express');
const router = express.Router();
const ComentariosController = require('../controllers/comentariosController');

router.post('/', ComentariosController.create);
router.get('/', ComentariosController.getAll);
router.put('/:id', ComentariosController.update);
router.delete('/:id', ComentariosController.delete);

module.exports = router;
