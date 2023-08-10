//Tipos de variables con diferente contenido

let counter = 120;
console.log(typeof counter); //El tipo de dato es numerico

counter = false;
console.log(typeof counter); //El tipo de dato es boleano

counter = "foo";
console.log(typeof counter); //El tipo de dato es string

// Tipo undefined
let counter1;
console.log(counter1); //undefined

console.log(typeof counter1); //undefined

console.log(typeof undeclaredVar); //undefined

//Tipo null
let obj = null;
console.log(typeof obj); //Muestra el valor de objec

console.log(null == undefined); //true

//Tipo number
let num = 100; //Se define una variable y inicia su valor con un numero entero

let price = 12.5; //Se define una variable y su valor inicial seria un flotante con punto decimal
let discount = 0.05;

console.log(typeof num);
console.log(typeof price);
console.log(typeof num);

let price1 = 200.0; // Se convierte en 200 y es un numero entero

console.log(Number.MIN_VALUE); //5e-324

console.log(Number.MAX_VALUE); //1.7976931348623157e+308

//infinity e -infinity

console.log(Number.MAX_VALUE + Number.MAX_VALUE); //infinity

console.log(Number.MAX_VALUE - Number.MAX_VALUE); //-infinity

//NaN

console.log("a" / 2); //Muestra un valor de NaN. //Indica un numero invalido

//Tipo String
let greeting = "Hi"; // Se puede usar comilla simple
let menssage = "Bye"; // Se puede usar comillas dobles

//Para usar comillas simples o dobles en un string literal, se debe usar la barra invertida.
let menssage1 = "I'm also a valid string";
console.log(menssage1);

//Los string son inmutables: No se puede modificar una vez creado, pero se puede crear un
//string a partir de un string existente.

let str = "JavaScript";
str = str + " String"; //Su resultado seria JavaString String.
console.log(str);

//Se intenta cambiar el primer caracter del string, pero como es una variable ya declarada por lo tanto no
//se puede modificar. 
let s = "JavaString";
s[0] = "j";
console.log(s);

//Tipo Boolean
//Tiene dos tipos de valores literales: true y false.
let inProgrees = true;
let completed= false;

console.log(typeof(completed));

//Para convertir un valor de otro tipo de datos en un valor boolean, se utiliza la funcion Boolean().
//Ejemplos

console.log(Boolean("Hi")); // true
console.log(Boolean("")); // false

console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false

console.log(Boolean({Foo: 100})); // true on non-empty object
console.log(Boolean(null)); // false

//Creación de objetos Boolean con un valor inicial de false
let bNoParam = new Boolean();
console.log(bNoParam);

let bZero = new Boolean(0);
console.log(bZero);

let bNull = new Boolean(null);
console.log(bNull);

let bEmptyString = new Boolean("");
console.log(bEmptyString);

let bfalse = new Boolean(false);
console.log(bfalse);

//Creación de objetos Boolean con un valor inicial de true

var btrue = new Boolean(true);
console.log(btrue);

var btrueString = new Boolean("true");
console.log(btrueString);

var bfalseString = new Boolean("false");
console.log(bfalseString);

var bSuLin = new Boolean("Su Lin");
console.log(bSuLin);

var bArrayProto = new Boolean([]);
console.log(bArrayProto);

var bObjProto = new Boolean({});
console.log(bObjProto);

//Tipo symbol
//Para crear un simbolo se llama la funcion Symbol

let s1= Symbol();

//La funcion Symbol crea un nuevo valor unico cada vez que se llama.
console.log(Symbol()==Symbol()); //false

//Tipo bigint
let pageView=9007199254740991n;
console.log(typeof(pageView));

//Tipo object
//Un object es una coleccion de propiedades, donde cada propiedad se define con un par de llave-valor.

let emptyObject={}; //Objeto vacio utilizando la sintaxis de object 

// Se define el objeto person con dos propiedades.
let person={
    nombre:'Yael Jair',
    'apellido paterno': 'Martinez',
    'apellido materno': 'Moreno'
};

let contact = {
    nombre: 'Yael Jair',
    'apellido paterno': 'Martinez',
    'apellido materno': 'Moreno',
    correo: 'yaeljair@hotmail.com',
    telefono: '7712172423',
    direccion:{
        calle:'Rancho Nuevo',
        'codigo postal': '43066',
        municipio: 'Atlapexco',
        estado: 'Hidalgo'
    }
};

//Para poder acceder a la propiedades se puede usar la notacion de punto (.) si no tiene espacio la variable se
//puede usar solo con punto (.)
console.log(contact.nombre)

//Si la variable del objeto tiene espacio es recomendado usar corchetes [] 
console.log(contact["apellido materno"]);

//De igual forma se pueden utilizar . y [] a la misma vez
console.log(contact.direccion["calle"]);

//O se pueden utilizar [] a la vez
console.log(contact["direccion"]["codigo postal"]);






