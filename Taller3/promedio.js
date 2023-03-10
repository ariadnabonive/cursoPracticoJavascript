// const lista = [
//     100,
//     200,
//     300,
//     500
//  ];
 
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    // sumaLista = sumaLista + lista[i];
    // }  

    //en lugar de usar el for podemos usar el método de array .reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado +  nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
} 
    
    

    

