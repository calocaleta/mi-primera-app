import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {

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

  return (
    <div className="App">
      <header className="App-header">
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
