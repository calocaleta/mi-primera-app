import React from 'react';

const Saludar = (props) => {
    console.log(props);
    let nombre="", edad=0;
    if(props.userInfo === undefined )
    {
        nombre = props.name;
        edad = props.edad;
    }
    else
    {
        nombre = props.userInfo.nombre;
        edad =  props.userInfo.edad;
    }

    return (
        <div>
            <h2>Hola {nombre}, tiene {edad} años</h2>
        </div>
    );
};

export default Saludar;