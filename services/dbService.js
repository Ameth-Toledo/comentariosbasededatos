const { Pool } = require('pg');

const db = new Pool({
    host: 'dpg-cruaq25umphs73ekdht0-a.oregon-postgres.render.com', // Host externo proporcionado por Render
    user: 'comentarios_imagenes_user', // Nombre de usuario proporcionado por Render
    password: 'a3HTYy4dqMAXTWL2CvZuEONtF70e3LTY', // Contraseña proporcionada por Render
    database: 'comentarios_imagenes', // Nombre de la base de datos
    port: 5432,
    ssl: {
        rejectUnauthorized: false // Esta opción es importante para conectar a Render
    }
});

module.exports = db;
