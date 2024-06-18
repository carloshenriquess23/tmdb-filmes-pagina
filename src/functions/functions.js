export function formatarImagemFilme(caminho){

    let imagemFormatada="";

    if(!caminho){

        imagemFormatada="/images/default-placeholder.png";
    }

    else{

        imagemFormatada="https://image.tmdb.org/t/p/w500"+caminho;
    }

    return imagemFormatada
}