// função soma com recursividade
let array = [2,5,6];
function Soma(array){
    if(array.length === 0) return 0;
    let FirstIndex = array[0];
    const NovoArray = array.slice(1);
    return FirstIndex + Soma(NovoArray);
    
}

console.log(Soma(array));

// buscar por maior na lista

function MaiorNumero(novoarray){
    if(novoarray.length === 1) return novoarray[0];
    let Campeao = novoarray[0];
    const maiorDaRestante = MaiorNumero(novoarray.slice(1));
    if(Campeao < maiorDaRestante) return maiorDaRestante;
    else return Campeao;
    
}
console.log(MaiorNumero([3,5,6]));
