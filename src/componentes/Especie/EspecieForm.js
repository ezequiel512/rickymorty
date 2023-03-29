import especie from "../../mock-especie";
import Especie from "./Especie";

const EspecieForm = (props) => {

    function muestraEspecies(especie, index) {
        return <Especie key={index} index={index} especie={especie}></Especie>;
    }

    return (
        <form className="content-select">
            <label className="f-etiqueta">Especie</label>
            <select onChange={props.manejarFiltroEspecie} size={especie.length}>
                {especie.map(muestraEspecies)}
            </select>
        </form>

    )
}

export default EspecieForm;