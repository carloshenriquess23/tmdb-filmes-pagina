import { useState,useEffect } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';

export default function CardFilme(props){

    const [image,setImage]=useState("");

    function verificarPoster(){

        if(!props.poster){

            setImage("/images/default-placeholder.png");
        }

        else{

            setImage('https://image.tmdb.org/t/p/w500'+props.poster);
        }
    }

    useEffect(() => {

        verificarPoster();
    });
    
    return(

        <Link className='card-filme' to={'/filme/'+props.id}>

            <img src={image} alt='poster filme'/>

            <div className='container-avaliacao'>
                <p>{props.avaliacao}</p>
                <svg width="20" height="18" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8536 1.56868C14.5854 1.05823 14.0187 0.733398 13.3963 0.733398C12.7739 0.733398 12.2122 1.05823 11.939 1.56868L8.68536 7.70803L1.41911 8.69181C0.811903 8.77533 0.305897 9.16513 0.118674 9.69879C-0.0685483 10.2324 0.0832535 10.8218 0.518419 11.2162L5.79101 16.0005L4.54623 22.7617C4.44503 23.3186 4.69803 23.8847 5.19898 24.2142C5.69992 24.5437 6.36279 24.5854 6.90928 24.3209L13.4013 21.1422L19.8934 24.3209C20.4399 24.5854 21.1028 24.5483 21.6037 24.2142C22.1047 23.8801 22.3577 23.3186 22.2565 22.7617L21.0066 16.0005L26.2792 11.2162C26.7144 10.8218 26.8712 10.2324 26.679 9.69879C26.4867 9.16513 25.9857 8.77533 25.3785 8.69181L18.1072 7.70803L14.8536 1.56868Z" fill="#FFD600"/>
                </svg>
            </div> 

            <p>{props.nome}</p>
            <p id='lancamento'>{props.lancamento}</p> 
        </Link>
    );
}