var radio;
var pi=3.1416;
function area(radio){
    areacircu=pi*Math.pow(radio,2)
    if(areacircu<=0){
        return -1
    }
    return areacircu
}