const bcrypt = require('bcrypt');
const db = require('../database/connection');

const createUser = async (req, res) => {
    let { nombre, correo, contra, idTipo  } = req.body;

    try {
        // Encriptar contraseña
        salt = bcrypt.genSaltSync();
        contra = bcrypt.hashSync(contra, salt);

        // Insertar usuario a la DB
        await db.query('CALL SA_setUser(?, ?, ?, ?)', [nombre, correo, contra, idTipo]);
        res.status(201).json({
            msg: 'Usuario creado correctamente',
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

const deleteUser = async (req, res) => {
    const { idUsuario } = req.params;

    try {
        const [results] = await db.query('CALL SA_deleteUser(?)', [idUsuario]);

        // Si no se modificó ninguna fila, significa que el usuario no existe
        if (results.affectedRows === 0) {
            return res.status(400).json({
                msg: 'El usuario a eliminar no existe'
            });
        }

        res.status(202).json({
            msg: 'Usuario eliminado correctamente'
        })
    } catch (error) {
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

const modifyUser = async(req, res) => {

    const { idUsuario } = req.params;
    let { contra = '', IdTipo } = req.body;

    try {
        
        // Encriptar contraseña solo si la enviaron, si no la envía se queda la misma
        if (contra != '') {
            salt = bcrypt.genSaltSync();
            contra = bcrypt.hashSync(contra, salt);
        }

        const [results] = await db.query('CALL SA_updateUser(?, ?, ?)', [idUsuario, contra, IdTipo]);

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
                    msg: 'El Correo ya está registrado'
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

const listUsers = async(req, res) => {
     
    try {
        
        const [result] = await db.query('CALL SA_ListUsers()');
        const [users] = result.slice(0, result.length);
        const contra ='';

        users.forEach( ( user, i ) => { //Agregamos vacio la contra para evitar futuros warnings
            user.contra=contra;
        });

        res.status(201).json({
            users
        });

    } catch (error) {
        
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

const listClientes = async(req, res) => {

    try {
        
        const [results] = await db.query('CALL SA_ListClientes()');
        const [clientes] = results.slice(0, results.length);
        res.status(201).json(clientes);

    } catch (error) {
        
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

const deleteCliente = async (req, res) => {
    const { idCliente } = req.params;
    try {
        const [results] = await db.query('CALL SA_deleteCliente(?)', [idCliente]);
        // Si no se modificó ninguna fila, significa que el usuario no existe
        if (results.affectedRows === 0) {
            return res.status(400).json({
                msg: 'El cliente a eliminar no existe'
            });
        }
        res.status(202).json({
            msg: 'Cliente eliminado correctamente'
        })
    } catch (error) {
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

    createUser, 
    deleteUser,
    modifyUser,
    listUsers,
    listClientes,
    deleteCliente
}