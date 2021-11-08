const { Router } = require('express');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');

const { modifyUser, createUser, deleteUser, listUsers, listClientes } = require('../controllers/superadmin.controller');

const router = Router();

router.post('/nuevoUsuario',  // TODO: Tipo checar que sea númerico para agregar el id y no el nombre del tipo de usuario
    [
        check('nombre', 'El usuario debe de tener un nombre').notEmpty(),
        check('correo', 'El usuario debe de tener un correo asociado').notEmpty().isEmail(),
        check('contra', 'No puedes agregar un usuario sin contraseña').notEmpty(),
        check('tipo',   'El usuario debe de tener un rol').notEmpty(),
        validarCampos
    ], createUser);

router.put('/editarUsuario/:idUsuario',
    [
        check('tipo', 'El usuario no puede quedar sin un rol').notEmpty(),
        validarCampos
    ], modifyUser);

router.delete('/eliminarUsuario/:idUsuario', deleteUser);

router.get('/usuarios', listUsers);

router.get('/clientes', listClientes);


module.exports = router;
