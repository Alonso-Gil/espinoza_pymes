//Este archivo llamado utils.js será para crear únicamente funciones que tengamos que reutilizar
import * as Swal from 'sweetalert2';

export function DeleteDialog (  tipo="tipo", nombre="nombre"  )  {
    
    return (

        Swal.fire({ //Código JS para mostrar el dialog con animación de Sweet Alert, hecha función para poder reutilizarla

            title: `¿Seguro que quieres eliminar al ${tipo}: ${nombre}?`,
            text: `Una vez eliminado no podrás recuperar los datos del ${tipo}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡Elimínalo!'
          }).then((result) => {
            if (result.isConfirmed) {

              Swal.fire(
                '¡Eliminado!',
                `El ${tipo}: ${nombre} se ha eliminado exitosamente`,
                'success'
              )
            }
          })  
    )};