
/* Ejercicio dia 1 con fecha 08/08/2023*/

// Para definir una variable (var)

//var x=10;
//var y=20;


// ES6 forma de agregar variable (let)

let x=10;
let y=20;


// Para declarar funciones se utiliza (function)
// Ejemplo

function add(a,b){  // Calcula la suma de dos argumentos
    return a+b;
}

// Para mandar a llamar la funcion add se utiliza la siguiente sintaxis 

let result1 = add(x,y);

// Para mostrar el resultado se utiliza

console.log(result1);



//Condiciones IF, ELSE Y SWITCH

// IF

let num1 = 10,
  num2 = 2;

function dividir(num1, num2) {
  if (num2 == 0) {
    //Se compara el valor de num2 que no sea cero
    throw "No se puede dividir con un valor cero";
  }
  return num1 / num2;
}

let result = dividir(num1, num2);

console.log(result);

// Para declarar un array

let items=[];

let items1=[1,2,3]; // Para declarar array con algunos elementos iniciales.

console.log(items1.length); // Para acceder a la cantidad de los elemtos del array

//Elementos de array items utilizando el bucle for
for(let i=0;i<items1.length; i++){
  console.log(items1[i]); //Muestran los valores que tiene dentro del array
}

//o utiliza el bucle for...of en ES6
for(items of items1){
  console.log(items); //Muestran los valores que tiene dentro del array
}

