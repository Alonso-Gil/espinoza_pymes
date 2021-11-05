const db = require('../database/connection');

const getAviso = async(req, res) => {

    try {

        const [results] = await db.query('CALL AVget()');
        const [aviso] = results.slice(0, results.length);

        const [resul]= await db.query('CALL AVgetImagenes()');
        const [imagenes] = resul.slice(0, resul.length);

        res.status(201).json({ aviso, imagenes });

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

const modifyAviso = async(req, res) => {

    const { titulo, contenido, imagenes } = req.body;

    try {

        const [results] = await db.query('CALL AVupdate(?,?)', [titulo, contenido]);
        if (results.affectedRows === 0) {

            return res.status(400).json({
                msg: 'El aviso no existe'
            });
        }

        await db.query('DELETE FROM ImagenesAviso WHERE idAviso=1');

        await db.query('INSERT INTO ImagenesAviso(imagen, idAviso) VALUES ?', [imagenes]);

        res.status(202).json({
            msg: 'Aviso editado exitosamente',
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


module.exports = { getAviso, modifyAviso };