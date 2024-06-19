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

export function formatarLancamento(dtLancamento){

    let dataLancamentoFormatada="";

    if(dtLancamento===""){

        dataLancamentoFormatada="Não lançado";
    }

    else{

        let mes="";
        let dataArray=dtLancamento.split("-");

        mes=formatarMes(dataArray[1]);

        dataLancamentoFormatada=`${dataArray[2]} de ${mes} de ${dataArray[0]}`;
    }

    return dataLancamentoFormatada;
}

export function formatarMes(mes){

    switch(mes){

        case "01":
            mes="Janeiro";
        break;

        case "02":
            mes="Fevereiro";
        break;

        case "03":
            mes="Março";
        break;

        case "04":
            mes="Abril";
        break;

        case "05":
            mes="Maio";
        break;

        case "06":
            mes="Junho";
        break;

        case "07":
            mes="Julho";
        break;

        case "08":
            mes="Agosto";
        break;

        case "09":
            mes="Setembro";
        break;

        case "10":
            mes="Outubro";
        break;

        case "11":
            mes="Novembro";
        break;

        case "12":
            mes="Dezembro";
        break;

        default:
            mes="";
        break;
    }

    return mes;
}