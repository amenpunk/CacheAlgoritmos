var pagina = {
    xAA : ['A','A','A','A','A'],
    xBB : ['A','A','A','A','A'], 
    xCC : ['A','A','A','A','A'],
    xDD : ['A','A','A','A','A'],
    xEE : ['A','A','A','A','A'],
    xFF : ['A','A','A','A','A'],
    xGG : ['A','A','A','A','A'],
    xHH : ['A','A','A','A','A'],
    xII : ['A','A','A','A','A'],
    xJJ : ['A','A','A','A','A'],
    xKK : ['A','A','A','A','A'],
    xLL : ['A','A','A','A','A'],
    xMM : ['A','A','A','A','A'],
    xNN : ['A','A'],
    xOO : ['A','A'],
}

var m_pagina = {
    xAA : [],
    xBB : [],
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

var puntero = {
  x : 0,
  y : 0 
};

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
       //puntero.x = i;
      // puntero.y = indice
      } 
    }
}

function obj_index(tamaño){
  var cont = 0;
  for (var i in pagina){
    cont = cont + pagina[i].length;
  }
  
  if((tamaño + cont) > 75){
      return  "Stack Overflow" + cont;
  }else{
      return "Memory Disp" + cont ;
  }
}



var tamaño = 6
let nombre = "$$$";

console.log(obj_index(tamaño));
//console.table(pagina)
//pagina.uno[1]= "uno";
//console.log(frag + " mas " + sep );
//var frag = fragmentar(tamaño);
//var sep = separar(frag,tamaño)
new_push(tamaño);
console.table(pagina);
console.table(puntero)
