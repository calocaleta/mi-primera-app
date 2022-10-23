import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);


  const userName = "Carlos Garcia";
  const edad = 40;

  const user = {
    nombre: "Carlos Garcia",
    edad: 40,
    color: "Morado",
  }

  const saludar = (nombre) => {
    alert(`Hola ${nombre}`);
  }

  useEffect(()=>{
    console.log("Total: "+ contar);
  },[contar])

  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue );
    setContar(contar+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>{!stateCar ? "Encender" : "Apagar"}</button>
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <AdiosMundo/>
        <Saludar userInfo={user} saludarFn={saludar} />
        <Saludar name="Gabriel" edad="10" saludarFn={saludar} />
      </header>
    </div>
  );
}

export default App;
