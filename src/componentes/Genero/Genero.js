import { useContext } from "react";
import GeneroContext from "../../contextos/GeneroContext";

const Genero = (props) => {

    const genero = useContext(GeneroContext);
    
    if (props.index === 0) {
        return (
            <option onClick={genero} value={props.genero} selected={true}>{props.genero}</option>
        )
    } else {
        return (
            <option onClick={genero} value={props.genero}>{props.genero}</option>
        )
    }

}

export default Genero;