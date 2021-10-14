const bcrypt = require('bcrypt');
const db = require('../database/connection');



const modifyUser = async (req, res) => {
    const { idUsuario } = req.params;
    let { Nombre, Correo, contra } = req.body;

    try {
        // Encriptar contraseña si contra no es null
        if (contra) {
            salt = bcrypt.genSaltSync();
            contra = bcrypt.hashSync(contra, salt);
        }

        const [results] = await db.query('CALL USupdate(?, ?, ?, ?)', [idUsuario , Nombre, Correo, contra]);

        // Si no se modificó ninguna fila, significa que el usuario no existe
        if (results.affectedRows === 0) {
            return res.status(400).json({
                msg: 'El usuario a modificar no existe'
            });
        }

        res.status(201).json({
            msg: 'Usuario modificado correctamente',
        })

    } catch (error) {
        // Si el Correo ya existe, se manda el error
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({
                errors: [{
                    msg: `El correo: ${correo}, ya está registrado`
                }]
            });
        }

        console.error(error);
        return res.status(500).json({
            errors: [{
                msg: 'Error con la base de datos o el servidor'
            }],
            query: error.sql,
            sqlMessage: error.sqlMessage
        });
    }
}




module.exports = {

    modifyUser,

}