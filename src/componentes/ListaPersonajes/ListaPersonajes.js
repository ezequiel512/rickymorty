import './ListaPersonajes.css'
import Personaje from "../Personaje/Personaje";

const ListaPersonajes = (props) => {

  function ordenarPersonajes(personajea, personajeb) {
    if (props.actualizarOrdenacion === "A...Z") {
      if (personajea.name.toUpperCase() < personajeb.name.toUpperCase()) {
        return -1;
      } else if (personajea.name.toUpperCase() > personajeb.name.toUpperCase()) {
        return 1;
      }
      return 0;
    } else if (props.actualizarOrdenacion === "Z...A") {
      if (personajea.name.toUpperCase() < personajeb.name.toUpperCase()) {
        return 1;
      } else if (personajea.name.toUpperCase() > personajeb.name.toUpperCase()) {
        return -1;
      }
      return 0;
    }
  }

  function filtrarEspecie(personaje) {
    return props.actualizarEspecie === "Todos" ? true
      : personaje.species === props.actualizarEspecie;
  }

  function filtrarGenero(personaje) {
    return props.actualizarGenero === "Todos" ? true
      : personaje.gender === props.actualizarGenero;
  }

  function filtrarStatus(personaje) {
    return props.actualizarStatus === "Todos" ? true
      : personaje.status === props.actualizarStatus;
  }

  function muestraPersonajes(personaje) {
    return <Personaje key={personaje.id} personaje={personaje}></Personaje>;
  }

  return (
    <div>
      <ul className="ListaPersonajes">
        {props.listaPersonajes
          .filter(filtrarEspecie)
          .filter(filtrarGenero)
          .filter(filtrarStatus)
          .sort(ordenarPersonajes)
          .map(muestraPersonajes)}
      </ul>
    </div>
  );
}

export default ListaPersonajes;