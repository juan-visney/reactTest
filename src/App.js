import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg = 'Hola soy un componente funcional XD'/>
          <hr/>
          <Propiedades 
          cadena = 'Esto es una cadena de texto' 
          numero = {19} 
          booleano = {true}
          arreglo = {[4, 7, 2, 9]}
          objeto = {
            {
              nombre: 'Tony',
              correo: 'ironmaniscool@gmail.com'
            }
          }
          funcion = {(num) => num * num}
          elementoReact = {<i>Esto es un elemento React</i>}
          componenteReact = {<Componente msg = 'Soy un componente enviado como prop'/>}
          />
          <hr/>
          <Estado></Estado>
        </section>
      </header>
    </div>
  );
}

export default App;
