var pagina = {
    xAA : ['A','A','A','A','A'],
    xBB : ['B','B'],
    xCC : [],
    xDD : [],
    xEE : [],
    xFF : [],
    xGG : [],
    xHH : [],
    xII : [],
    xJJ : [],
    xKK : [],
    xLL : [],
    xMM : [],
    xNN : [],
    xOO : [],
}


//funcion para determinar cuantos espcaios puede ocupar 
//por si misma
function fragmentar(tamaño){
  var max = tamaño/5;
  switch (Math.trunc(max)){
    case 1 :
    return 1;
    case 2 :
    return 2;
    case 3:
    return 3;
  }
}

//esta funcion deja el fragmento sobrante cuando es 
//mayor a 5
function separar(fragmento,tamaño){
  var solo = tamaño - (5*fragmento)
  return solo
}

function obj_push_sep(tamaño,frag, sep){
  for ( var i in pagina ){
      var tam_actual = pagina[i].length
      //console.log("tamaño del indice actual" + tam_actual) 
      var celda = tam_actual+sep;  
      //console.log("temp: " + sep)
      if(tam_actual+sep <= 5){ 
        for(var x = tam_actual; x < tam_actual+sep ; x++){
            pagina[i][x] = nombre;i
          console.log("indice para salto de linea: " + x)
        }   
         break;
      }
      else{
      continue;
      }
    }
}

function new_push(tamaño){ 
    for( var i in pagina){
      var indice = pagina[i].length;
      while(indice < 5 && tamaño > 0){
      pagina[i][indice] = nombre;
       tamaño = tamaño - 1;
       indice = indice + 1;
      } 
    }
}


var tamaño = 15
let nombre = "$$$";

//console.table(pagina)


var frag = fragmentar(tamaño);
var sep = separar(frag,tamaño)
new_push(tamaño);
//obj_push_sep(tamaño,frag,sep);
console.log(frag + " mas " + sep );
//pagina.uno[1]= "uno";
console.table(pagina);
