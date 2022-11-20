// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  if (x === y) {
    return x || y;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var approvalMessage = 'Allowed';
  var repprovalMessage = 'Not allowed';
  if (edad >= 18) {
    return approvalMessage;
  }
  else {
    return repprovalMessage;
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var onlineStatus = 'Online';
  var awayStatus = 'Away';
  var offlineStatus = 'Offline';
  if (status === 1) {
    return onlineStatus;
  }
  else if (status === 2) {
    return awayStatus;
  }
  else {
    return offlineStatus;
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var german = 'aleman';
  var Mandarin = 'mandarin';
  var english = 'ingles';
  var another = undefined;
  var germanResponse = 'Guten Tag!';
  var mandarinResponse = 'Ni Hao!';
  var englishResponse = 'Hello!';
  var undefinedResponse = 'Hola!';
  if (idioma === german) {
    return germanResponse;
  }
  else if (idioma === Mandarin) {
    return mandarinResponse;
  }
  else if (idioma === english) {
    return englishResponse;
  }
  else if (idioma === another || idioma !== german || idioma !== Mandarin || idioma !== english ) {
    return undefinedResponse;
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color){
    case 'blue': 
    return 'This is blue';
    break;
    case 'red': 
    return 'This is red';
    break;
    case 'green': 
    return 'This is green';
    break;
    case 'orange': 
    return 'This is orange';
    break;
    default: 
    return 'Color not found';
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) {
    return true;
  } else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  }
  else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero === Math.floor(numero)) {
    return true;
  }
  else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0){
    return 'fizzbuzz';
  }
  else if (numero % 5 === 0 && numero % 3 !== 0){
    return 'buzz';
  }
  else if (numero % 3 === 0 && numero % 5 !== 0) {
    return 'fizz';
  }
  else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return 'Error';
  }
  else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos';
  }
  else if (num3 > num1 && num3 > num2) {
    var nuevoValor = num3 + 1;
    return nuevoValor;
  }
  else if (num1 > num2 && num1 > num3 && num1 > 0) {
    return 'Número 1 es mayor y positivo';
  }
  else {
    return false;
}
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero < 2) {
    return false; // porque 0 y 1 no son considerados números primos.
  }
  else if (numero === 2) {
    return true; // porque dos es primo. Además se debe declarar esto porque más adelante
    // se usará el dos como condición para que evalúe los números que vendrán después.
  }
  for (var i = 2; i < numero; i++){  // Se tiene en cuenta que el for puede ser usado para examinar
    // las propiedades de un dato numérico (cualquiera sea este) que se pase a través de una función. 
    //Se necesita del for porque este permite pasar a través de una secuencia finita o infinita de casos.
    
    //Esta condición crea una variable que es 2 para que se ejecute con los números que pase la función 
    // que sean mayores que el dos (i < numero).
    // Dice "para la condición en que el dato sea un número mayor a dos (que responde a la declaración
    // de i), analiza caso uno por uno (de forma infinita).
    if (numero % i === 0){

      //si el número es divisible entre 2, retorna false. 
      // Entonces, si el número es 3 - > 3 es divisible entre 2 ? NO, entonces no retorna false
      //Si el número es 4 - 4 es divisible entre 2? Sí (4 es divisible entre él, entre 1 y entre 2)
      // Si el número es 5 - 5 es divisible entre 2) NO, Entonces no retorna false:
      // Y así, el for me permite establecer la condición de hacer esta operación con cualquier número
      // a través de una secuencia inifnita
      return false;
    }
  
  }
  return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) {
    return 'Soy verdadero';
  }
  else if (valor === false) {
    return 'Soy falso';
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let enArray = [];
  for (var i = 0; i < 11 ; i++){
      enArray.push(i * 6);
      
  }
  return enArray;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 99 && numero <= 999){
    return true;
  } 
  else {
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;
  var a = numero;
  do {
    i = i + 1;
    a = a + 5;
    
  } while (i < 8);
  return a;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
