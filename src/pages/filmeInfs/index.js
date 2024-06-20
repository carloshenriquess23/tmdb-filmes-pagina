import './index.scss';
import Header from '../../components/cabecalho';
import Footer from '../../components/rodape';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { buscarInfsFilme, buscarVideosFilme } from '../../api/filmesController';
import { formatarImagemFilme,formatarLancamento } from '../../functions/functions.js';

export default function FilmeInfsPage(){

    const [infsFilme,setInfsFilme]=useState({});
    const [trailersFilme,setTrailersFilme]=useState([]);

    const {id}=useParams();

    async function respInfsFilme(){

        const resp= await buscarInfsFilme(id);

        setInfsFilme({
            
            nome:resp.title,
            tagline:resp.tagline,
            lancamento:formatarLancamento(resp.release_date),
            avaliacao:resp.vote_average.toFixed(1),
            sinopse:resp.overview,
            poster:formatarImagemFilme(resp.poster_path),
            fundo:formatarImagemFilme(resp.backdrop_path)
        });
        
    }

    async function respTrailersFilme(){

        const resp= await buscarVideosFilme(id);

        setTrailersFilme(resp.results.filter(item => item.type==="Trailer" || item.type==="Teaser"));
    }

    useEffect(() => {

        respInfsFilme();
        respTrailersFilme();
    },[]);

    return(

        <div className='informacoes-filme-page'>

            <Header/>

            <main>
                <section className='infs-filme'>

                    <div className='container-backdrop' style={{backgroundImage: `url(${infsFilme.fundo})`}}></div>

                    <img src={infsFilme.poster} alt="Filme Poster" id='poster'/>

                    <div className='container-infs'>

                        <div className='subcontainer-titulo'>
                            <h3 className='titulo'>{infsFilme.nome}</h3>
                            <h4 className='titulo2'>{infsFilme.tagline}</h4>
                        </div>

                        <div className='subcontainer-infs'>

                            <p className='destacar'> Lançado em {infsFilme.lancamento} </p>
                            <p id='avaliacao'> <span className='destacar'>Avaliação:</span> {infsFilme.avaliacao} 
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40176 0.556578C9.23155 0.216447 8.87187 0 8.47686 0C8.08185 0 7.72538 0.216447 7.55196 0.556578L5.48699 4.64743L0.87533 5.30295C0.489955 5.35861 0.168809 5.61835 0.0499846 5.97394C-0.0688394 6.32953 0.0275043 6.72223 0.30369 6.98506L3.65003 10.173L2.86001 14.6782C2.79578 15.0493 2.95636 15.4265 3.27429 15.646C3.59223 15.8656 4.01293 15.8934 4.35977 15.7172L8.48007 13.5991L12.6004 15.7172C12.9472 15.8934 13.3679 15.8687 13.6859 15.646C14.0038 15.4234 14.1644 15.0493 14.1001 14.6782L13.3069 10.173L16.6532 6.98506C16.9294 6.72223 17.029 6.32953 16.9069 5.97394C16.7849 5.61835 16.467 5.35861 16.0816 5.30295L11.4667 4.64743L9.40176 0.556578Z" fill="#FFD600"/>
                                </svg>
                            </p>

                            <p> <span className='destacar'>Sinopse:</span> {infsFilme.sinopse}</p>
                        </div>
                    </div>
                </section>

                <section className='trailers-filme'>
            
                    <div className='container-titulo'>
                        <h3 className='titulo'>TRAILERS E TEASERS- 
                            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-0.000488281 3.71429C-0.000488281 1.66562 1.68115 0 3.74951 0H26.2495C28.3179 0 29.9995 1.66562 29.9995 3.71429V22.2857C29.9995 24.3344 28.3179 26 26.2495 26H3.74951C1.68115 26 -0.000488281 24.3344 -0.000488281 22.2857V3.71429ZM2.81201 19.5V21.3571C2.81201 21.8679 3.23389 22.2857 3.74951 22.2857H5.62451C6.14014 22.2857 6.56201 21.8679 6.56201 21.3571V19.5C6.56201 18.9893 6.14014 18.5714 5.62451 18.5714H3.74951C3.23389 18.5714 2.81201 18.9893 2.81201 19.5ZM24.3745 18.5714C23.8589 18.5714 23.437 18.9893 23.437 19.5V21.3571C23.437 21.8679 23.8589 22.2857 24.3745 22.2857H26.2495C26.7651 22.2857 27.187 21.8679 27.187 21.3571V19.5C27.187 18.9893 26.7651 18.5714 26.2495 18.5714H24.3745ZM2.81201 12.0714V13.9286C2.81201 14.4393 3.23389 14.8571 3.74951 14.8571H5.62451C6.14014 14.8571 6.56201 14.4393 6.56201 13.9286V12.0714C6.56201 11.5607 6.14014 11.1429 5.62451 11.1429H3.74951C3.23389 11.1429 2.81201 11.5607 2.81201 12.0714ZM24.3745 11.1429C23.8589 11.1429 23.437 11.5607 23.437 12.0714V13.9286C23.437 14.4393 23.8589 14.8571 24.3745 14.8571H26.2495C26.7651 14.8571 27.187 14.4393 27.187 13.9286V12.0714C27.187 11.5607 26.7651 11.1429 26.2495 11.1429H24.3745ZM2.81201 4.64286V6.5C2.81201 7.01071 3.23389 7.42857 3.74951 7.42857H5.62451C6.14014 7.42857 6.56201 7.01071 6.56201 6.5V4.64286C6.56201 4.13214 6.14014 3.71429 5.62451 3.71429H3.74951C3.23389 3.71429 2.81201 4.13214 2.81201 4.64286ZM24.3745 3.71429C23.8589 3.71429 23.437 4.13214 23.437 4.64286V6.5C23.437 7.01071 23.8589 7.42857 24.3745 7.42857H26.2495C26.7651 7.42857 27.187 7.01071 27.187 6.5V4.64286C27.187 4.13214 26.7651 3.71429 26.2495 3.71429H24.3745ZM9.37451 5.57143V9.28571C9.37451 10.3129 10.2124 11.1429 11.2495 11.1429H18.7495C19.7866 11.1429 20.6245 10.3129 20.6245 9.28571V5.57143C20.6245 4.5442 19.7866 3.71429 18.7495 3.71429H11.2495C10.2124 3.71429 9.37451 4.5442 9.37451 5.57143ZM11.2495 14.8571C10.2124 14.8571 9.37451 15.6871 9.37451 16.7143V20.4286C9.37451 21.4558 10.2124 22.2857 11.2495 22.2857H18.7495C19.7866 22.2857 20.6245 21.4558 20.6245 20.4286V16.7143C20.6245 15.6871 19.7866 14.8571 18.7495 14.8571H11.2495Z" fill="#FFC6A5"/>
                            </svg>
                        </h3>
                    </div>

                    <div className='listagem-videos'>
                        {trailersFilme.map(item => 
                            <iframe src={"https://www.youtube.com/embed/"+item.key} width="500" height="300" title="">
                                    
                            </iframe>)}

                        {trailersFilme.length==0 && 
                            <h2 className='titulo'>Nenhum encontrado</h2>
                        }
                    </div>
                    
                </section>
            </main>
            
            <Footer/>
        </div>
    );
}