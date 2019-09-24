
var a=[1,2,3,4,1,1]
 var contador=0
function ocurrencias(n,arreglo){
    for(let i=0;i<=arreglo.length;i++){
        if(n==arreglo[i]){
            contador=contador+1;
        }
    }
    return contador
}