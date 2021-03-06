//Obtéms os dados referentes às regiões Norte (1), Nordeste (2), Sudeste (3), Sul (4) e Centro-Oeste (5)
function projecaoLocalidade(codigo) {

    let result = null;
    $.ajax({
        type: "GET",
        url: "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/" + codigo,
        contentType: "application/json; charset=utf-8",
        data: "{}",
        async: false,
        dataType: "json",
        success: function (data) {
            result = data;
        },
        error: function (data) {
            console.log(data);
        }
    });
    return result;
}

//Retorna o ranking dos 20 nomes mais populares do Brasil por década
function nomesRanking(decada = 2010) {

    let result = null;
    $.ajax({
        type: "GET",
        url: "https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?decada="+decada,
        contentType: "application/json; charset=utf-8",
        data: "{}",
        async: false,
        dataType: "json",
        success: function (data) {
            result = data[0].res;
        },
        error: function (data) {
             console.log(data);
        }
    });
    return result;
}

function nomesFrequencia(nome = 'Maria') {
    let result = null;
    $.ajax({
        type: "GET",
        url: "https://servicodados.ibge.gov.br/api/v2/censos/nomes/"+nome,
        contentType: "application/json; charset=utf-8",
        data: "{}",
        async: false,
        dataType: "json",
        success: function (data) {
            result = {
                "nome": data[0].nome,
                "data": data[0].res
            }
        },
        error: function (data) {
             console.log(data);
        }
    });
    return result;
}

