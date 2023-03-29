import '../../App.css';
import '../../FiltroGenero.css';
import { useState } from 'react';
import useAllPersonajes from '../../hooks/useAllPersonajes';
import EspecieContext from '../../contextos/EspecieContext';
import GeneroContext from '../../contextos/GeneroContext';
import StatusContext from '../../contextos/StatusContext';
import Titulo from '../../componentes/Titulo/Titulo';
import OrdenacionForm from '../../componentes/Ordenacion/OrdenacionForm';
import EspecieForm from '../../componentes/Especie/EspecieForm';
import GeneroForm from '../../componentes/Genero/GeneroForm';
import StatusForm from '../../componentes/Status/StatusForm';
import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import ListaPersonajes from '../../componentes/ListaPersonajes/ListaPersonajes';
import CambioPagina from '../../componentes/CambioPagina/CambioPagina';
import ScrollButon from '../../componentes/ScrollButon/ScrollButton';
import Footer from '../../componentes/Footer/Footer';

function Home() {

    const [ordenacion, setOrdenacion] = useState("A...Z");
    const [especie, setEspecie] = useState("Todos");
    const [genero, setGenero] = useState("Todos");
    const [status, setStatus] = useState("Todos");
    const [page, setPage] = useState(1);
    const { buscando, listaPersonajes } = useAllPersonajes(page);

    function manejarOrdenacion(event) {
        actualizarOrdenacion(event.target.value);
    }

    function actualizarOrdenacion(value) {
        setOrdenacion(value);
    }

    function manejarFiltroEspecie(event) {
        actualizarEspecie(event.target.value);
    }

    function actualizarEspecie(value) {
        setEspecie(value);
    }

    function manejarFiltroGenero(event) {
        actualizarGenero(event.target.value);
    }

    function actualizarGenero(value) {
        setGenero(value);
    }

    function manejarFiltroStatus(event) {
        actualizarStatus(event.target.value);
    }

    function actualizarStatus(value) {
        setStatus(value);
    }

    function manejarPage(page) {
        setPage(page);
    }

    return (
        <div>
            <Titulo></Titulo>
            <div className="main">
                <aside className="Menu">
                    <h3>Ordenación</h3>
                    <OrdenacionForm manejarOrdenacion={manejarOrdenacion}></OrdenacionForm>
                    <h3>Filtros</h3>
                    <EspecieContext.Provider value={manejarFiltroEspecie}>
                        <EspecieForm></EspecieForm>
                    </EspecieContext.Provider>
                    <GeneroContext.Provider value={manejarFiltroGenero}>
                        <GeneroForm></GeneroForm>
                    </GeneroContext.Provider>
                    <StatusContext.Provider value={manejarFiltroStatus}>
                        <StatusForm></StatusForm>
                    </StatusContext.Provider>
                </aside>
                {buscando ? <AjaxLoader></AjaxLoader>
                          : <ListaPersonajes actualizarOrdenacion={ordenacion}
                                             actualizarEspecie={especie}
                                             actualizarGenero={genero}
                                             actualizarStatus={status}
                                             listaPersonajes={listaPersonajes}>
                            </ListaPersonajes>
                }
                <ScrollButon></ScrollButon>
            </div>
            <CambioPagina manejarPage={manejarPage} page={page}></CambioPagina>
                <Footer></Footer>
        </div>
    );
}

export default Home;