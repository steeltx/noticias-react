import { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

    // definir la categoria y noticias
    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const apiKey = "";
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;
            const respuesta = await fetch(url);
            const noticias = await respuesta.json();
            guardarNoticias(noticias.articles);
        }
        consultarAPI();
    }, [categoria]);


    return (
        <>
            <Header
                titulo="Buscador de noticias"
            />
            <div className="container white">
                <Formulario
                    guardarCategoria={guardarCategoria}
                />
                <ListadoNoticias
                    noticias={noticias}
                />
            </div>
        </>
    );
}

export default App;
