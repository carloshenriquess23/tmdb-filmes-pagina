import './index.scss';
import Header from '../../components/cabecalho';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import { buscarInfsFilme, buscarVideosFilme } from '../../api/filmesController';
import { formatarImagemFilme } from '../../functions/functions.js';

export default function FilmeInfsPage(){

    const [infsFilme,setInfsFilme]=useState({});
    const [videosFilme,setVideosFilme]=useState([]);
    const [poster,setPoster]=useState("");

    const {id}=useParams();

    async function respInfsFilme(){

        const resp= await buscarInfsFilme(id);

        setInfsFilme(resp);
    }

    async function respTrailersFilme(){

        const resp= await buscarVideosFilme(id);

        setInfsFilme(resp.results.filter(item => item.type==="Trailer"));
    }

    function verificarPoster(){

        
    }

    useEffect(() => {

        respInfsFilme();
        respTrailersFilme();
    },[]);

    return(

        <div className='informacoes-filme-page'>

            <Header/>

            <Link to='/' className='button-retornar'>Voltar para a página inicial</Link>

            <section className='infs-filme'>

                <div className='container-poster'>
                    <img src={poster} alt="FilmePoster"/>
                </div>

                <div className='container-infs'>

                    <h3>{infsFilme.title}</h3>
                    <h4>{infsFilme.tagline}</h4>
                </div>
            </section>

            <section className='trailers-filme'>

            </section>
        </div>
    );
}