const { Router } = require('express');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');

const { setAgentUser, listSolicitudes, deleteSolicitud, 
        createSolicitud, listManagerUsers} = require('../controllers/solicitudes.controller');
const router = Router();

router.get('/listar', validarJWT ,listSolicitudes);

router.get('/manager', validarJWT ,listManagerUsers);

router.post('/agregar', 
    [
       check('nombre', 'El registro debe de contener un nombre').notEmpty(),
       check('celular', 'El registro debe tener un número personal al cuál comunicarse').notEmpty(), 
       check('email', 'El registro debe contener un correo para mandar instrucciones').notEmpty(),
       validarCampos
    ], createSolicitud);

router.delete('/eliminar/:idSolicitud', deleteSolicitud);

router.post('/agregarUsuario/:idSolicitud', 
    [
        check('nombre', 'El usuario debe de tener un nombre').notEmpty(),
        check('email', 'El usuario debe tener un email para registrarlo').notEmpty(),
        check('contra', 'El usuario debe de tener una contraseña establecida').notEmpty(),
        validarCampos
    ], validarJWT ,setAgentUser);

module.exports = router;