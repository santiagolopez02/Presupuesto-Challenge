import React from 'react';


const Budget = () => {
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