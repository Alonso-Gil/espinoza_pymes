const { Router } = require('express');
const { check } = require('express-validator');
const { getAviso, modifyAviso } = require('../controllers/avisos.controller');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getAviso);

router.put('/editar', 
    [
        check('titulo', 'El aviso no puede quedar sin un título').notEmpty(),
        check('contenido', 'El contenido no puede quedar vacío').notEmpty(),
        check('idTipo', 'Solo recursos humanos puede editar avisos').notEmpty().isNumeric().equals("8"),
        validarCampos
    ], modifyAviso);

module.exports = router;