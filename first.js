window.onload = function(){
    window.alert("Leht on laetud!");
    //document.getElementById("demo").innerHTML = "Saan errori";
    /* asdasda asdasdasdasda */
}
let counter = 1;
function firstFunction(){
      if(counter == 1){
          document.getElementById("demo").innerHTML = "Minu esimene javascript.";
      }else if(counter == 2 ){
          document.getElementById("first").innerHTML = "Teine tekst";
    } else{
        location.reload();
    }
    counter++;
}