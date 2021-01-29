import React, {useState} from 'react';


const Budget = () => {
    //state initial
    const [record , setRecord] = useState({
        concept:"",
        amount:"",
        date:"",
        type:""
    })
    return ( 
        <li>
            <p>Nombre</p>
            <p>$</p>
            <div>
                <button
                    type="button"
                >Editar</button>
                <button
                    type="button"
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Budget;