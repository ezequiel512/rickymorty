import { useEffect, useState } from "react";
import { getPersonajeCompleto} from "../servicios/personajes/getPersonajeCompleto";

const usePersonajeCompleto = (id) =>  {
    
    const [personaje, setPersonaje] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerPersonajeConcreto() {
        setBuscando(true);
        getPersonajeCompleto(id).then(personaje => {
            setPersonaje(personaje);
            setBuscando(false);
          });
    }

    useEffect(obtenerPersonajeConcreto, [id]);
    return {buscando, personaje}
}
export default usePersonajeCompleto;