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
            confirmButtonText: `Eliminar ${tipo}`,
            cancelButtonText: 'Cancelar'
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


export function FormularioEnviado () {

  return (

    Swal.fire(
      '¡Gracias por confiar en nosotros!',
      'Pronto recibirás un correo con más instrucciones',
      'success'
    )
  );

}


export function AgenteAceptado (correo, nombre) {

  return(
    Swal.fire({
        title: `Agrega una contraseña inicial para ${correo}`,
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        inputValidator: nombre => {
          // Si el valor es válido, debes regresar undefined. Si no, una cadena
          if (!nombre) {
              return "Por favor escribe una contraseña inicial";
          } else {
              return undefined;
          }
      }
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire(
          '¡Agente Difusor Agregado!',
          `¡Ahora ${nombre} es parte de la familia EspinozaPymes!`,
          'success'
        )
      }
    })  
  )
}