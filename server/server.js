const express = require('express');
const cors = require('cors');
require('dotenv').config();
const validarJWT = require('./middlewares/validar-jwt');

// Inicializar express
const app = express();

// Midddlewares
app.use(cors());
app.use(express.json({ limit: '25mb' }));

const PORT = process.env.PORT;

// Rutas
app.use('/api/superAdmin', validarJWT, require('./routes/superadmin.routes'));
app.use('/api/usuarios',   validarJWT, require('./routes/usuarios.routes'));
app.use('/api/auth',                   require('./routes/auth.routes'));
app.use('/api/clientes',   validarJWT, require('./routes/clientes.routes'));
// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})