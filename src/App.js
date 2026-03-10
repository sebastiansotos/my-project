import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './Components/Primercomponente';
import { Segundocomponente } from './Components/Segundocomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sebas Web tu sabe
        </p>
       <Primercomponente /> 
       <hr/>

       <Segundocomponente />
      </header>
    </div>
  );
}

export default App;
