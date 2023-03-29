import './PersonajeCompleto.css'
import masculino from "../../img/masculino.svg";
import femenina from "../../img/femenina.svg";
import unknown from "../../img/unknown.svg";

const PersonajeCompleto = (props) => {
    
    let imagenGenero;

    if (props.personaje.gender === "Male") {
        imagenGenero = masculino;
    } else if (props.personaje.gender === "Female") {
        imagenGenero = femenina;
    } else if (props.personaje.gender === "unknown") {
        imagenGenero = unknown;
    }

    let altImagen = "Género de " + props.personaje.name;
    let altImagen2 = "Imagen de " + props.personaje.name;

    return (
        <div className="cc-contenido">
            <figure className="cc-ficha">
                <p className="cc-figura">{props.personaje.name}</p>
                <p className="cc-categoria"><img className="cc-imgMasc" src={imagenGenero} alt={altImagen}></img> | {props.personaje.gender}</p>
                <img className="cc-img" src={props.personaje.image} alt={altImagen2}></img>
                <figcaption className="cc-figura">
                    <p className="cc-categoria">Su estado actual es <span className="cc-dato">{props.personaje.status}</span></p>
                    <p className="cc-categoria">Presente en <span className="cc-dato">{props.personaje.episode.length} capítulos</span></p>
                    <p className="cc-categoria">Originario de <span className="cc-dato">{props.personaje.origin.name}</span></p>
                    <p className="cc-categoria">Actualmente residente en <span className="cc-dato">{props.personaje.location.name}</span></p>
                </figcaption>
            </figure>
        </div>
    )
}

export default PersonajeCompleto;