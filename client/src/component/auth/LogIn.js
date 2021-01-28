import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    //get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;

    //get value auth context
    const authContext = useContext(AuthContext);
    const {message, authenticated, logInUser} = authContext; 

    //case error by duplicate record user or redirect budget page
    useEffect(()=>{
        //if authenticated is true
        if(authenticated){
            props.history.push('/budget');
        }
        //if there are msg errors
        if(message){
            showAlert(message.msg, message.category);
        }
    },[message, authenticated, props.history]); 

    //State user
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    //get value state
    const {email, password} = user;

    
    //get value input
    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    //funcion by submit form
    const onSubmit = e =>{
        e.preventDefault();

        //validate field input
        if(email.trim() === ''|| password.trim() === ''){
            showAlert('All fields are required', 'alerta-error');
            return;
        }

        //call function login
        logInUser({email, password})
    }
    return ( 
        <div>
            <div>
                <h1>Iniciar Sesion</h1>
                {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}    
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