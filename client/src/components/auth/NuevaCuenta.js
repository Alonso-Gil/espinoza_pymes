import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        curp: '',
        nss: '',
        lugarNac: '',
        fechaNac: '',
        telCel: '',
        telOfi: '',
        password: '',
        confirmar: ''
    });

    // Extraer de usuario
    const { nombre, email, curp, nss, lugarNac, fechaNac, telCel, telOfi, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Valdidar que no haya campos vacios

        // Password minimo de 6 caracteres

        // Los dos passwords son iguales

        // Pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear nueva cuenta como Agente Difusor</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            autoComplete="off"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            autoComplete="off"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="curp">CURP</label>
                        <input 
                            type="text"
                            autoComplete="off"
                            id="curp"
                            name="curp"
                            placeholder="Tu CURP"
                            value={curp}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="nss">NSS</label>
                        <input 
                            type="text"
                            autoComplete="off"
                            id="nss"
                            name="nss"
                            placeholder="Tu número de Seguro Social (NSS)"
                            value={nss}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="lugarNac">Lugar de Nacimiento</label>
                        <input 
                            type="text"
                            autoComplete="off"
                            id="lugarNac"
                            name="lugarNac"
                            placeholder="Tu lugar de nacimiento"
                            value={lugarNac}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="fechaNac">Fecha de Nacimiento</label>
                        <input 
                            type="date"
                            id="fechaNac"
                            name="fechaNac"
                            value={fechaNac}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="telCel">Número de celular</label>
                        <input 
                            type="tel"
                            autoComplete="off"
                            id="telCel"
                            name="telCel"
                            placeholder="Tu número de celular"
                            value={telCel}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="telOfi">Número de la oficina</label>
                        <input 
                            type="tel"
                            autoComplete="off"
                            id="telOfi"
                            name="telOfi"
                            placeholder="Tu número de la oficina"
                            value={telOfi}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            autoComplete="off"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            autoComplete="off"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sésion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;