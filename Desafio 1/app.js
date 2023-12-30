function exibiOlaMundo(){
    console.log('Olá, Mundo');
}
exibiOlaMundo();

function exibiNome(nome){
    console.log(`Olá, ${nome}`);
}

exibiNome('Gabriel');

function dobraNumero(numero){
return numero * numero;
}
let dobroNumero = dobraNumero(5);
console.log(dobroNumero);

function retornaMedia(a,b,c){
    return (a + b + c)/3;
}
let media = retornaMedia(1,2,3);
console.log(media);

function retornaMaior(a,b){
    return a > b ? a : b;
}
let maior = retornaMaior(2,6);
console.log(maior);