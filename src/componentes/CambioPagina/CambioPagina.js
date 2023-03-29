import './CambioPagina.css';

const CambioPagina = (props) => {

    function cambiarPagina(event) {
        if ((props.page === 1 && +event.target.value === -1) || (props.page === 42 && +event.target.value === 1)) {
            console.log("You shall not pass!");
        } else {
            props.manejarPage(page => page + +event.target.value);
        }
    }

    return (
            <div>
                <p>{props.page} / 42</p>
                <button onClick={cambiarPagina} value={-1}>◀</button>
                <button onClick={cambiarPagina} value={1}>▶</button>
            </div>
    )

}
export default CambioPagina;