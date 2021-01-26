import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const NuevaCuenta = () => {

//State de usuario
    const [user, setUser] = useState({
        email:"",
        password:"",
        confirmar:""
    })
//Extraigo los valores en const diferentes
    const { email, password, confirmar} = user;

    
//capto los valores de los input y guardo el usuario
    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
//funcion para enviar el submit del form
const onSubmit = e =>{
    e.preventDefault();

//Validar que los campos esten correctos


//Pasar al action

}
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear una Nueva Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            name="email"
                            placeholder="Tu email..."
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            placeholder="Tu password..."
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password:</label>
                        <input
                            type="password"
                            id="confirmar"
                            value={confirmar}
                            name="confirmar"
                            placeholder="Confirma tu password..."
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            id="submit"
                            className="btn btn-primario btn-block"
                            value="Crear Cuenta"
                        />
                    </div>
                </form>
                
                
                <Link
                    to={'/'}
                    className="enlace-cuenta"
                >Login</Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;