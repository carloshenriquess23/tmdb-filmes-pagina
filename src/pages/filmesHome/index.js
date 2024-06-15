import './index.scss';
import { useState, useEffect } from 'react';
import Header from '../../components/cabecalho';
import CardFilme from '../../components/cardFilme';

export default function HomeFilmes(){

    const [nomeFilme,setNomeFilme]=useState("");

    return(

        <div className='page-home-filmes'>

            <Header/>

            <section className='section-pesquisa'>

                <img src="/images/image.png" alt="Fundo temático cinema"/>

                <div className='box-pesquisa'>
                    <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7517 17.8724C35.7517 21.8163 34.4712 25.4596 32.3141 28.4154L43.1943 39.3021C44.2686 40.3761 44.2686 42.1204 43.1943 43.1945C42.12 44.2685 40.3754 44.2685 39.3011 43.1945L28.4209 32.3078C25.4645 34.4731 21.8206 35.7448 17.8759 35.7448C8.00117 35.7448 0 27.7452 0 17.8724C0 7.99961 8.00117 0 17.8759 0C27.7506 0 35.7517 7.99961 35.7517 17.8724ZM17.8759 30.2456C19.5011 30.2456 21.1103 29.9255 22.6118 29.3037C24.1133 28.6819 25.4776 27.7705 26.6267 26.6215C27.7759 25.4726 28.6875 24.1086 29.3094 22.6074C29.9314 21.1062 30.2515 19.4973 30.2515 17.8724C30.2515 16.2475 29.9314 14.6386 29.3094 13.1374C28.6875 11.6362 27.7759 10.2722 26.6267 9.12322C25.4776 7.97426 24.1133 7.06286 22.6118 6.44105C21.1103 5.81924 19.5011 5.49919 17.8759 5.49919C16.2507 5.49919 14.6414 5.81924 13.1399 6.44105C11.6385 7.06286 10.2742 7.97426 9.125 9.12322C7.97582 10.2722 7.06424 11.6362 6.4423 13.1374C5.82037 14.6386 5.50027 16.2475 5.50027 17.8724C5.50027 19.4973 5.82037 21.1062 6.4423 22.6074C7.06424 24.1086 7.97582 25.4726 9.125 26.6215C10.2742 27.7705 11.6385 28.6819 13.1399 29.3037C14.6414 29.9255 16.2507 30.2456 17.8759 30.2456Z" fill="#FFC6A5"/>
                    </svg>

                    <input type='text' placeholder='Digite o nome de um filme' value={nomeFilme} onChange={(e) => setNomeFilme(e.target.value)}/>
                </div>
            </section>

            <section className='section-listagem-filmes'>

                <div className='container-listagem'>

                    <h3 className='titulo'>Mais Populares</h3>

                    <div className='listagem'>

                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                    </div>
                </div>

                <div className='container-melhor-avaliados'>

                    <h3 className='titulo'>Melhor Avaliados</h3>
                    <div className='listagem'>

                    <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                    </div>
                </div>

                <div className='container-melhores-nacionais'>

                    <h3 className='titulo'>Melhores Filmes Brasileiros</h3>
                    <div className='listagem'>

                    <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                        <CardFilme/>
                    </div>
                </div>
            </section>
        </div>
    );
}