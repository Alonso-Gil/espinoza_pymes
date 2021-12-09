const cloudinary = require('cloudinary').v2;
cloudinary.config( process.env.CLOUDINARY_URL );

const actualizarImagen = async (req, res) => {

    const extensionesValidas = ['png','jpg','jpeg','pdf'];
    const { archivo } = files;
    const nombreCortado = archivo.name.split('.');
    const extension = nombreCortado[ nombreCortado.length - 1 ];

    // Validamos la extension primero
    if ( !extensionesValidas.includes( extension ) ) {
        return res.status(404).json({
            msg:`La extensión ${ extension } no es permitida`
        });
    }
    
    const { tempFilePath } = req.files.archivo;
    try {
        const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
        //TODO: Guardar el secure_url en la db, hacer esto helper y solo reutilizarlo dependiendo donde se quiera subir
        //Hacerlo helper talvez
        res.status(202).json({
            msg:"Imagen subida exitosamente"
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

module.exports = {
    actualizarImagen
}