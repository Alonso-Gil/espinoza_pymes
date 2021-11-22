const db = require('../database/connection');

const setCliente = async(req, res) => {

    const { nombre, curp, nss, fecha_nacimiento, celular, oficina, registrado_por } = req.body;

    try {
        
        await db.query('CALL CLset(?,?,?,?,?,?,?)', [nombre, curp, nss, fecha_nacimiento, celular, oficina, registrado_por] );
        res.status(202).json({
            msg:`Se ha agregado el cliente: ${nombre} exitosamente`
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

const updateCliente = async(req, res) => {

    const { idUsuario } = req.params;
    const { nombre, curp, nss, fecha_nacimiento, celular, oficina, actualizado_por } = req.body;

    try {
        
        const [results] = await db.query('CALL CLupdate(?,?,?,?,?,?,?,?)', [idUsuario, nombre, curp, nss, fecha_nacimiento, celular, oficina, actualizado_por] );

         // Si no se modificó ninguna fila, significa que el cliente no existe
         if (results.affectedRows === 0) {
            return res.status(400).json({
                msg: `El cliente ${nombre} con id: ${idUsuario} a modificar no existe`
            });
        }
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

    setCliente,
    updateCliente,

}