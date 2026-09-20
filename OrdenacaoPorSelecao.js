const ProcuraroMenorIndex = (arr) => {
    let MenorIndex = 0;
    let [MenorElemento] = arr;

    for (let i = 1; i < arr.length; i++){
        const el = arr[i];
        
        if(el >= MenorElemento) continue;

        MenorElemento = el;
        MenorIndex = i;
    }
    return MenorIndex;
};

const OrdenarSelecao = (arr)=> {
    const ArraySelecionado = [];
    const ArrayCopiado = [...arr];

    for (let i = 0; i< arr.length; i++){
        const MenorIndex = ProcuraroMenorIndex(ArrayCopiado);
        const [MenorElemento] = ArrayCopiado.splice(MenorIndex, 1);

        ArraySelecionado.push(MenorElemento);
    }

    return ArraySelecionado;
}




const ArrayTeste = [67, 69,42,31,90,50,101, 72,300, 88,25]
const ArrayFinal = OrdenarSelecao(ArrayTeste);

console.log(' Array do Teste - ' +ArrayTeste);
console.log('Array Ordenado - ' +ArrayFinal);
