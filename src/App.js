import './App.css';
import { Route } from 'wouter';
import Home from './paginas/Home/Home';
import PersonajeDetallado from './paginas/PersonajeDetallado/PersonajeDetallado';

function App() {

  return (
    <div>
      <div>
        <Route component={Home} path="/"></Route>
        <Route component={PersonajeDetallado} path="/personaje/:idPersonaje"></Route>
        </div>
    </div>
  );
}

export default App;