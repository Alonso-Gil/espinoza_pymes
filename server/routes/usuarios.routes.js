const { Router } = require('express');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');

const { modifyUser, getUser } = require('../controllers/usuarios.controller');

const router = Router();

router.put('/:idUsuario', 
    [
        check('nombre', 'Debes de agregar un nombre').notEmpty(),
        check('correo', 'Debe de quedar un correo asociado').notEmpty(),
        check('contra', 'Debes de agregar una contraseña para acceder').notEmpty(),
        validarCampos
    ], modifyUser);

router.get('/', 
    [
        check('correo', 'Debes enviar el correo para buscarlo').notEmpty().isEmail(),
        validarCampos
    ], getUser);

module.exports = router;