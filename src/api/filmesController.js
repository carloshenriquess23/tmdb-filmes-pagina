import axios from 'axios';

const api=axios.create({
    baseURL:"https://portfolio-zeta-seven-93.vercel.app"
});

export async function chamarMaisPopulares(){

    const results=await api.get('/filmes/buscar/populares');

    return (results.data);
}

export async function chamarMelhorAvaliados(){

    const results=await api.get('/filmes/buscar/melhorAvaliados');

    return (results.data);
}

export async function chamarMaisPopularesBrasileiros(){

    const results=await api.get('/filmes/buscar/populares/BR');

    return (results.data);
}

export async function buscarFilmesNome(nome,pagina){

    const results=await api.get('filmes/buscar/nome', 
        {
            params:{
                nome:nome,
                pagina:pagina
            }
        });

    return results.data;
}

export async function buscarInfsFilme(id){

    const resp=await api.get('https://portfolio-zeta-seven-93.vercel.app/filme/'+id);

    return resp.data;
}

export async function buscarVideosFilme(id){

    const resp=await api.get('https://portfolio-zeta-seven-93.vercel.app/filme/'+id+'/trailers');

    return resp.data;
}