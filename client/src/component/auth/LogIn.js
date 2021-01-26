import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Login = () => {

//State de usuario
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
//Extraigo los valores en const diferentes
    const {email, password} = user;

    
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
        <div>
            <div>
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value = {email}
                            placeholder="Tu email..."
                            onChange={onChange}
                        />
                    </div>
                    <div>
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
                    <div>
                        <input
                            type="submit"
                            id="submit"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>

                <Link
                    to={'/new-account'}
                    
                >Create account</Link>
            </div>
        </div>
     );
}
 
export default Login;