import '../../App.css';
import Titulo from '../../componentes/Titulo/Titulo';
import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import usePersonajeCompleto from '../../hooks/usePersonajeCompleto';
import PersonajeCompleto from '../../componentes/PersonajeCompleto/PersonajeCompleto';
import Footer from '../../componentes/Footer/Footer';


function PersonajeDetallado(props) {

    const { buscando, personaje } = usePersonajeCompleto(props.params.idPersonaje);

    return (
        <div>
            <Titulo></Titulo>
            <div className="main2">
                {buscando ? <AjaxLoader></AjaxLoader>
                          : <PersonajeCompleto personaje={personaje}></PersonajeCompleto>
                }
            </div>
            <Footer></Footer>
        </div>
    );
}

export default PersonajeDetallado;