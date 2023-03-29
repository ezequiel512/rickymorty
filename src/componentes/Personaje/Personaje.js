import { Link } from 'wouter';
import './Personaje.css';
import favorito from '../../img/unlike.svg';

const Personaje = (props) => {

    return (
        <li>
            <figure className="figura">
                <img className="ctc-buttons" src={favorito}></img>
                <Link to={`/personaje/${props.personaje.id}`}><img className="img-personaje" src={props.personaje.image}></img></Link>
                <figcaption className="figura">
                    <h4 className="ju-categoria">{props.personaje.name}</h4>
                    <p className="">{props.personaje.gender} | {props.personaje.species} | {props.personaje.status}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default Personaje;