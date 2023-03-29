import '../../FiltroGenero.css';
import { useContext } from "react";
import EspecieContext from "../../contextos/EspecieContext";

const Especie = (props) => {

    const especie = useContext(EspecieContext);

    if (props.index === 0) {
        return (
            <option onClick={especie} value={props.especie} selected={true}>{props.especie}</option>
        )
    } else {
        return (
            <option onClick={especie} value={props.especie}>{props.especie}</option>
        )
    }

}

export default Especie;