import '../../FiltroGenero.css';
import { useContext } from "react";
import StatusContext from "../../contextos/StatusContext";

const Status = (props) => {

    const status = useContext(StatusContext);

    if (props.index === 0) {
        return (
            <option onClick={status} value={props.status} selected={true}>{props.status}</option>
        )
    } else {
        return (
            <option onClick={status} value={props.status}>{props.status}</option>
        )
    }

}

export default Status;