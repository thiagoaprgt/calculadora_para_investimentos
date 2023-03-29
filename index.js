function investimento(valorUnitarioInicialDoInvestimento, montante, numeroDeAportes, escalaDosAportes, desvalorizacaoEntreAporte) {

    /*
        montante é o valor total que será investido, ou seja, a soma de todos os aportes

        É usado a desvalorição por que a ideia é só comprar quando a ação cair de preço

        Se a escala for 2 e primeiro aporte for 1 então o segundo a porte será 2 e o terceiro 4 e assim por diante

        0 <= desvalização <= 1 , 1 representa que desvalorizou 100%, ou seja, a empresa faliu, exemplo:
            se a desvalorição por aporte foi de 5% então o valor é 0.95
            se a desvalorição por aporte foi de 30% então o valor é 0.7

    */

    let valorAbsolutoDaEscalaDosAportes = [];

    let quantidadeDeAcoesPorAporte = []

    let somaDasEscalas = 0;

    let valorUnitarioFinalDoInvestimento = valorUnitarioInicialDoInvestimento * (desvalorizacaoEntreAporte ** (numeroDeAportes - 1));


    for (let index = 0; index < numeroDeAportes; index++) {
        
        valorAbsolutoDaEscalaDosAportes[index] = escalaDosAportes ** index;

        somaDasEscalas += valorAbsolutoDaEscalaDosAportes[index];
        
    }

    let totalDeAcoes = 0;

    let valorPorAporte = [];

    for (let index = 0; index < numeroDeAportes; index++) {
        
        quantidadeDeAcoesPorAporte[index] = (montante/somaDasEscalas/valorUnitarioInicialDoInvestimento) * (valorAbsolutoDaEscalaDosAportes[index] / (desvalorizacaoEntreAporte ** index) );
        
        valorPorAporte[index] = (montante/somaDasEscalas) * valorAbsolutoDaEscalaDosAportes[index];

        totalDeAcoes += quantidadeDeAcoesPorAporte[index];
    }


    let precoMedio = montante/ totalDeAcoes;

    

    let object = {

        "valorAbsolutoDaEscalaDosAportes" : valorAbsolutoDaEscalaDosAportes,
        "valorPorAporte" : valorPorAporte,
        "montanteInicial" : montante,
        "quantidadeDeAcoesPorAporte" : quantidadeDeAcoesPorAporte,
        "totalDeAcoes" : totalDeAcoes,        
        "valorUnitarioInicialDoInvestimento" : valorUnitarioInicialDoInvestimento,
        "valorUnitarioFinalDoInvestimento" : valorUnitarioFinalDoInvestimento,
        "precoMedio" : precoMedio
        
    }


    return object; 

    

}


const valorUnitarioInicialDoInvestimento = 2.73;
const montante = 10000;
const numeroDeAportes = 3;
const escalaDosAportes = 6;
const desvalorizacaoEntreAportes = 0.94;


const info = investimento(valorUnitarioInicialDoInvestimento, montante, numeroDeAportes, escalaDosAportes, desvalorizacaoEntreAportes);


console.log(info);

//console.log(info.totalDeAcoes * info.valorUnitarioInicialDoInvestimento);

