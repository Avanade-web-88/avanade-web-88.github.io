//var nome; // hoinsting - içar

// console.log(nome, " chamando a variável usando o var")

// var nome = 'Avanade';
// const nome = "Avanade";

/**
 * Existem 7 tipos de erros em JavaScript
 * ------------------------------------------
 * SyntaxError - Escreveu alguma coisa errado.
 * ReferenceErro - Chamou alguém que não existe.
 * TypeError - Erro de tipo é uma violação do JavaScript
 * EvalError - Evite o uso do comando eval, mas se ele for inválido
 * RangeErro - Erro de intervalo, loop infinito, ou chamadas inúmeras de recursividade
 * URIErro - Erro referente a chamadas externas. Uniform Resource Identifier. httpsww.
 * InternalError - Erro interno do JavaScript, falta de memória, processador...
 * ------------------------------------------
 */


escreve("Museu do Ipiranga");

//funão nominal. 
//o primeiro tipo é nominal e sofre hoisting 
function escreve(x){
    console.log(x);
}


//funão nominal.
function mudaTitulo(novoTitulo){
    document.querySelector('h1').innerHTML = '<i>'+ novoTitulo +'</i>';
}

mudaTitulo("Vai Corinthias");


//expressão de função - function expression
//funçao anônima - que não tem nome. 
//uma função anônima ela presisa de um contesto 
//sendo atribuida a um const ex.
const mudaTitulo2 = function (target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
}

mudaTitulo("h2","Trocando subtítulo");

// função arrow
// quando eu tenho mais de uma função uso {}
const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio,1000);

//exemplo sem {}
// const exemplo = x => console.log(x);
// exemplo("teste");

// const frases = [
//     "Um banco para 20 milhões de pessoas",
//     "C6 Bank o seu banco",
//     "Cartão de Crédito sem anuidade"
//  ];


// function mudaFrase(target,frases,tempo){
//     let total = 0
//        setInterval((document.querySelector(target).innerHTML = frases[total >= frases.length -1 ? (total = 0) : (total += 1)])
//        , tempo * 1000)
// }

//  mudaFrase('h1', frases, 4)

 const frases = [
    "Um banco para 20 milhões de pessoas",
    "C6 Bank o seu banco",
    "Cartão de Crédito sem anuidade",
  ];
  
  // mudaFrase("h1", frases, 4);
  // "h1" - onde;
  // frases - array;
  // 4 - segundos;
  
  const mudaFrase = (target, frases, tempo) => {
    let total = 0;
    setInterval(() => {
      document.querySelector(target).innerHTML =
        frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];
  
      console.log(total);
    }, tempo * 1000);
  };
  // condicao?verdade:falso
  mudaFrase("h1", frases, 4);

