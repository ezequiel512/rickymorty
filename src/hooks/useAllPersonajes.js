import { useEffect, useState } from "react";
import { getAllPersonajes } from "../servicios/personajes/getAllPersonajes";

const useAllPersonajes = (page) =>  {

    const [listaPersonajes, setListaPersonajes] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerAllPersonajes() {
        setBuscando(true);
        getAllPersonajes(page).then(personajes => {
            setListaPersonajes(personajes.results);
            setBuscando(false);
          });
    }
  
    useEffect(obtenerAllPersonajes, [page]);
    return {buscando, listaPersonajes}
}
export default useAllPersonajes;