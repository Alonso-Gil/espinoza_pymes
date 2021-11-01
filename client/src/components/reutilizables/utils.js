import * as Swal from 'sweetalert2';


export function DeleteDialog (  tipo="tipo", nombre="nombre"  )  {
    
    return (

        Swal.fire({

            title: `¿Seguro que quieres eliminar al ${tipo}: ${nombre}?`,
            text: "Una vez eliminado no podrás revertir la acción",
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
        
    )

};