const { Router } = require('express');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');

const { setCliente, updateCliente} = require('../controllers/clientes.controller');

const router = Router();

router.post('/agregar', 
    [
        check('nombre', 'Debes de agregar el nombre del cliente').notEmpty(),
        check('registrado_por', 'Debes de mandar el nombre de quién lo registró').notEmpty(),
        validarCampos
    ], setCliente);

router.put('/editar/:idUsuario', 
    [
        check('nombre', 'Debes de agregar el nombre del cliente').notEmpty(),
        check('actualizado_por', 'Debes de mandar el nombre de quién actualizó los datos del cliente').notEmpty(),
        validarCampos
    ], updateCliente);


module.exports = router;