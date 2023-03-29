import "./Titulo.css";
import imagen from '../../img/logoRM.png';

const Titulo = () => {

    return (
        <header>
            <a href="/"><img src={imagen} alt="Logo de Rick y Morty"></img></a>
        </header>
    )
}

export default Titulo;