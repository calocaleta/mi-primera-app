import React from 'react';

const Saludar = (props) => {

    const {userInfo, saludarFn} = props;
    console.log(props);
    console.log(userInfo);

    let nombre="", edad=0;
    if(props.userInfo === undefined )
    {
        nombre = props.name;
        edad = props.edad;
    }
    else
    {
        nombre = userInfo.nombre;
        edad =  userInfo.edad;
    }

    return (
        <div>
            <h2>Hola {nombre}, tiene {edad} años</h2>
            <button onClick={() => saludarFn(nombre)}>Saludar</button>
        </div>
    );
};

export default Saludar;