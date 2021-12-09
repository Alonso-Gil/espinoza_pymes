const express = require('express');
const cors = require('cors');
const validarJWT = require('./middlewares/validar-jwt'); 
const fileUpload = require('express-fileupload');
require('dotenv').config();

// Inicializar express
const app = express();

// Midddlewares
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(fileUpload({ //Carga de archivos
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const PORT = process.env.PORT;

// Rutas
app.use('/api/auth',                    require('./routes/auth.routes'));
app.use('/api/superAdmin',  validarJWT, require('./routes/superadmin.routes'));
app.use('/api/usuarios',    validarJWT, require('./routes/usuarios.routes'));
app.use('/api/clientes',    validarJWT, require('./routes/clientes.routes'));
app.use('/api/avisos',      validarJWT, require('./routes/avisos.routes'));
app.use('/api/solicitudes',             require('./routes/solicitudes.routes'));
// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})