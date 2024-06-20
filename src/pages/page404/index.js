import { Link } from 'react-router-dom';
import './index.scss';

export default function Page404(){

    return(
        
        <div className='page-404'>

            <Link to='/' id='button-voltar'>Voltar a página inicial</Link>
            <figure>
                <img src='/images/image404.png' alt='Imagem robô 404'/>
            </figure>
        </div>
    );
}