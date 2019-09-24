var arreglo1=[1,2]
var suma=0
var promedio=0;
function sumarArreglo(arreglo){
    
    arreglo.forEach(element => {
        suma = suma + element;
        
    });
    console.log("suma:"+ suma)
    console.log("promedio:"+suma/arreglo.length)
    
}