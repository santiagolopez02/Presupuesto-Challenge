import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext'


const NewAccount = () => {
//get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;
    
//State user
    const [user, setUser] = useState({
        email:"",
        password:"",
        confirm:""
    })
//get value
    const { email, password, confirm} = user;

    
//get value input
    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

//Submit fomr
    const onSubmit = e =>{
        e.preventDefault();

    //Validate field form
    if(email.trim()==='' || password.trim()==='' || confirm.trim()===''){
        showAlert('All fields are required', 'alerta-error');
        return;
    }
    //validate password min 6 characters
    if(password.length < 6){
        showAlert('The password have a minimum of 6 characters ', 'alerta-error');
        return;
    }
    //validate password and confirm
    if(password !== confirm){
        showAlert('Passwords must be the same', 'alerta-error');
        return;
    }

    //Pasar al action

    }
    return ( 
        <div>
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div>
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
                            placeholder="Your email..."
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
                            placeholder="Your password..."
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm password:</label>
                        <input
                            type="password"
                            id="confirm"
                            value={confirm}
                            name="confirm"
                            placeholder="Confirm password..."
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            id="submit"
                            value="Create Account"
                        />
                    </div>
                </form>
                
                
                <Link
                    to={'/'}
                >Login</Link>
            </div>
        </div>
     );
}
 
export default NewAccount;