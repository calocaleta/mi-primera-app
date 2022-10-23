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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <AdiosMundo/>
        <Saludar userInfo={user} />
        <Saludar name="Gabriel" edad="10" />
      </header>
    </div>
  );
}

export default App;
