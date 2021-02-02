import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext';


const NewAccount = (props) => {
    //get value alert context
    const alertContext = useContext(AlertContext); 
    const { alert, showAlert} = alertContext;

    //get value auth context
    const authContext = useContext(AuthContext);
    const {message, authenticated, createUser} = authContext;  

    //case duplicate record user and redirect budget page
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
    const [user, setUser] = useState({
        email:"",
        password:"",
        confirm:""
    })
    const { email, password, confirm} = user; //get value

        
    //get value input
    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //Submit form
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
        //Function auth context 
        createUser({
            email,
            password
        })
    }
    return ( 
        <div className="container container-color">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div>
                <h1 className="title">New Account</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="container">
                        <label htmlFor="email" className="text">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            name="email"
                            placeholder="Your email..."
                            onChange={onChange}
                        />
                    </div>
                    <div className="container">
                        <label htmlFor="password" className="text">Password: </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            placeholder="Your password..."
                            onChange={onChange}
                        />
                    </div>
                    <div className="container">
                        <label htmlFor="confirm" className="text">Confirm password: </label>
                        <input
                            type="password"
                            id="confirm"
                            value={confirm}
                            name="confirm"
                            placeholder="Confirm password..."
                            onChange={onChange}
                        />
                    </div>
                    <div className="container">
                        <input
                            className="btn"
                            type="submit"
                            id="submit"
                            value="Create Account"
                        />
                    </div>
                </form>
                
                
                <Link
                    className="btn link"
                    to={'/'}
                >Login</Link>
            </div>
        </div>
     );
}
 
export default NewAccount;