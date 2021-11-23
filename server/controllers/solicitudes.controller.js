const bcrypt = require('bcrypt');
const db = require('../database/connection');

const createSolicitud = async(req, res) => {

    const { nombre, curp, nss, fecha_nacimiento, lugar_nacimiento, celular, oficina, email } = req.body;
    try {
        
        await db.query('CALL S_setSolicitud(?,?,?,?,?,?,?,?)', [nombre, curp, nss, fecha_nacimiento, lugar_nacimiento, celular, oficina, email]);
        res.status(202).json({
            msg:"Solicitud registrada exitosamente"
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

const deleteSolicitud = async(req, res) => {

    const { idSolicitud } = req.params;
    try {
        
        const [results] = await db.query('CALL S_deleteSolicitud(?)', [idSolicitud]);
        // Si no se modificó ninguna fila, significa que no existe
        if (results.affectedRows === 0) {
            return res.status(400).json({
                msg: 'La solicitud a eliminar no existe'
            });
        }
        res.status(202).json({
            msg: 'Registro de solicitud eliminado correctamente'
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

const setAgentUser = async(req, res) => {

    const { idSolicitud } = req.params;
    let { nombre, curp, nss, fecha_nacimiento, lugar_nacimiento, celular, oficina, email, contra } = req.body;
    try {
        
        
        //Agregamos los datos a la tabla de UserInfo
        const [resu] = await db.query('INSERT INTO UserInfo( curp, nss, fecha_nacimiento, lugar_nacimiento, celular, oficina) VALUES(?,?,?,?,?,?)', [curp, nss, fecha_nacimiento, lugar_nacimiento, celular, oficina]);

        const idUserInfo = resu.insertId; //Obtenemos el id de el registro insertado
        // Encriptamos la  contraseña
        salt = bcrypt.genSaltSync();
        contra = bcrypt.hashSync(contra, salt);

        // Insertar usuario a la DB
        await db.query('INSERT INTO Usuarios(nombre, email, contra, idTipo, idUserInfo) VALUES(?, ?, ?, ?,?)', [nombre, email, contra, 1, idUserInfo]);

        //Eliminamos los datos de las solicitudes si se agregó a los usuarios
        const [results] = await db.query('CALL S_deleteSolicitud(?)', [idSolicitud]); 
        // Si no se modificó ninguna fila, significa que no existe
        if (results.affectedRows === 0) {
            return res.status(400).json({
                msg: 'La solicitud a eliminar no existe'
            });
        }
        
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

const listSolicitudes = async(req, res) => {
    try {
        
        const [results] = await db.query('CALL S_listSolicitudes()');
        const [solicitudes] = results.slice(0, results.length);

        solicitudes.forEach( ( solicitud, i ) => { //Agregamos vacio contra para evitar futuros warnings
            solicitud.contra='';
        });
        res.status(201).json({solicitudes});

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
    createSolicitud, 
    deleteSolicitud,
    setAgentUser,
    listSolicitudes
};