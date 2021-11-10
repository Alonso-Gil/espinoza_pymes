const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const validarJWT = require('./middlewares/validar-jwt'); 
//TODO: FALTA AGREGAR VALIDARJWT A TODAS LAS RUTAS A EXCEPCIÓN DE AUTH HASTA QUE ESTÉ LA AUTORIZACIÓN CON AXIOS

// Inicializar express
const app = express();

// Midddlewares
app.use(cors());
app.use(express.json({ limit: '25mb' }));

const PORT = process.env.PORT;

// Rutas
app.use('/api/auth',        require('./routes/auth.routes'));
app.use('/api/superAdmin', require('./routes/superadmin.routes'));
app.use('/api/usuarios',   require('./routes/usuarios.routes'));
app.use('/api/clientes',   require('./routes/clientes.routes'));
app.use('/api/avisos',      require('./routes/avisos.routes'));
// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})