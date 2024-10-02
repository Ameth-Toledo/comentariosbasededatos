const { Client } = require('pg');

const db = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432, // El puerto predeterminado de PostgreSQL
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos PostgreSQL');
});

module.exports = {
    query: (text, params) => db.query(text, params),
};
