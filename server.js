// server.js
const express = require('express');
const cors = require('cors');
const comentariosRoutes = require('./routes/comentariosRoutes');
const imagenesRoutes = require('./routes/imagenesRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Rutas
app.use('/comentarios', comentariosRoutes);
app.use('/imagenes', imagenesRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
