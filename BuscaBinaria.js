
function BuscandoValor(lista, item){
    let inicio = 0;
    let fim = lista.length -1;

    while (inicio <= fim){
        const meio = Math.floor((inicio + fim) /2);
        const resposta = lista[meio];
        
        if(resposta == item){
            return resposta;
        } else if( resposta > item) {
            fim = meio -1;
        } else {
            inicio = meio + 1;
        }
        
    }
    return null;

}

const MinhaLista = [3, 7, 12, 18, 25, 31, 42, 56, 68, 79, 84, 91, 97, 105, 120];

console.log(BuscandoValor(MinhaLista, 79));
