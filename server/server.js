const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Inicializar express
const app = express();

// Midddlewares
app.use(cors());
app.use(express.json({ limit: '25mb' }));

const PORT = process.env.PORT;

// Rutas


// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})