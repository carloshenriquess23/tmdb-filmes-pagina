import './index.scss';
import { Link } from 'react-router-dom';

export default function Header(){

    return(

        <header className='cabecalho-page'>
            <Link to="/" className='link'>Voltar para página Inicial</Link>
            
            <p>Projeto para meu portfolio.</p>
        </header>
    );
}