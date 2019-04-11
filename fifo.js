var pagina = {
    f_xAA : ['A','A','A','A','A'],
    f_xBB : ['A','A','A','A','A'], 
    f_xCC : ['A','A','A','A','A'],
    f_xDD : ['A','A','A','A','A'],
    f_xEE : ['A','A','A','A','A'],
    f_xFF : ['A','A','A','A','A'],
    f_xGG : ['A','A','A','A','A'],
    f_xHH : ['A','A','A','A','A'],
    f_xII : ['A','A','A','A','A'],
    f_xJJ : ['A','A','A','A','A'],
    f_xKK : ['A','A','A','A','A'],
    f_xLL : ['A','A','A','A','A'],
    f_xMM : ['A','A','A','A','A'],
    f_xNN : ['A','A','A','A','A'],
    f_xOO : ['A','A','A','A','A'],
}

var m_pagina = {
    v_xAA : [],
    v_xBB : [],
    v_xCC : [],
    v_xDD : [],
    v_xEE : [],
    v_xFF : [],
    v_xGG : [],
    v_xHH : [],
    v_xII : [],
    v_xJJ : [],
    v_xKK : [],
    v_xLL : [],
    v_xMM : [],
    v_xNN : [],
    v_xOO : [],
}

var puntero = {
  x : 'f_xAA',
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
  if (obj_index(tamaño) == 1){
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
  }else{
    //si no hay tamaño aca es donde sucede el swap a memoria virtual
    //enviamos tamaño a la funcion de swap
    swap(tamaño); 
  }
}

function obj_index(tamaño){
  var cont = 0;
  for (var i in pagina){
    cont = cont + pagina[i].length;
  }
  
  if((tamaño + cont) > 75){
      return  0
  }else{
      return  1
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
//new_push(tamaño);
//console.table(pagina);
//console.table(m_pagina);
//console.table(puntero)

function swap(tamaño){ 
    var cont = 0;
    for( var i in pagina ){
      var j = i; 
      //i = puntero.x
      var indice = pagina[j].length;

      while(cont < tamaño){
          if( indice >= 0){
            delete pagina[i][cont];
            cont++;
            indice--;
            console.log(indice)
          }
          else{
          cont = cont 
          i++;
          }
      }
     break;
   }
}



swap(tamaño);
console.table(pagina);
