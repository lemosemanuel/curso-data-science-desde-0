// Funciones en JavaScript

// La Caja Mágica (Función)
// Vamos a decir que una función es como una caja especial que puede hacer cosas increíbles. 
// La caja tiene una entrada y una salida.
// Entonces, la dividimos en 3 partes:
// - Entrada (Parámetros): Puede tener o no.
// - Procesamiento (Cuerpo de la Función)
// - Salida (Valor Retornado): se devuelve con "return"

// Práctica

// 1) Definición de una función Básica (Función Declarativa)
// Con parámetro 
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

// Sin parámetro
function saludarSinParametro() {
    return "Hola!";
}

// Llamada a las funciones
console.log(saludar("Juan")); // Output: Hola, Juan!
console.log(saludarSinParametro()); // Output: Hola!

// Función con parámetros por defecto
// (si no le paso ningún parámetro, a tomará el valor de 0 y b tomará el valor de 0)
function sumar(a = 0, b = 0) {
    return a + b;
}

console.log(sumar(5, 5)); // Output: 10
// Llamada a la función con un solo argumento (solo le doy valor a "a")
console.log(sumar(5)); // Output: 5

// 2) Función anónima (función asignada a una variable)
const multiplicar = function(x, y) {
    return x * y;
};

// Llamada a la función
console.log(multiplicar(4, 5)); // Output: 20

// 3) Función de flecha (Arrow Function)
const dividir = (a, b) => a / b;

// Llamada a la función
console.log(dividir(10, 2)); // Output: 5

// Función más compleja: calcula los ingredientes necesarios para un pastel basándose en la cantidad de harina
function calcularIngredientes(harina) {
    // Relación básica: Por cada 100 gramos de harina necesitamos
    let agua = harina * 0.5;     // 0.5 litros de agua por cada 100 gramos de harina
    let leche = harina * 0.3;    // 0.3 litros de leche por cada 100 gramos de harina
    let huevos = Math.ceil(harina / 200); // 1 huevo por cada 200 gramos de harina, redondeado hacia arriba
    let manteca = harina * 0.2;  // 0.2 litros de manteca por cada 100 gramos de harina
    let levadura = harina * 0.05; // 0.05 gramos de levadura por cada 100 gramos de harina

    // Crear un objeto con las cantidades de los ingredientes
    return {
        agua: agua,
        leche: leche,
        huevos: huevos,
        manteca: manteca,
        levadura: levadura
    };
}

// Ejemplo de uso
let harina = 500; // 500 gramos de harina
let ingredientes = calcularIngredientes(harina);
console.log(ingredientes); // Output: { agua: 2.5, leche: 1.5, huevos: 3, manteca: 1, levadura: 0.25 }



// Plus para JavaScript
// Ahora si vamos a ver diferentes formas de declarar variables en JavaScript: var, let, y const.

// 1) var
// Alcance: Una variable declarada con var tiene alcance global si está fuera de cualquier función o alcance de función si está dentro de una función. No tiene en cuenta el ámbito de bloque (por ejemplo, dentro de un if o for).
// Re-declaración: Puedes declarar la misma variable var más de una vez en el mismo ámbito sin causar un error.
// Hoisting: Las variables declaradas con var se "elevarán" (hoisted) al comienzo del contexto, pero solo la declaración, no su asignación.
if (true) {
    var x = 10;
}
console.log(x); // Output: 10 (x está accesible fuera del bloque)

function test() {
    var y = 20;
    var y = 30; // No causa error
    console.log(y); // Output: 30
}
test();

// 2) let
// Alcance: let tiene alcance de bloque. Esto significa que la variable solo es accesible dentro del bloque en el que se declara (dentro de {}).
// Re-declaración: No puedes declarar la misma variable let más de una vez en el mismo ámbito.
// Hoisting: Las variables declaradas con let también son "elevadas", pero no están inicializadas, por lo que intentar acceder a ellas antes de la declaración causa un error de referencia.
if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x); // Error: x is not defined (x no está accesible fuera del bloque)

function test() {
    let y = 20;
    // let y = 30; // si descomentas va a dar un error como "Error: Identifier 'y' has already been declared"
    console.log(y); // Output: 20
}
test();

// 3) const
// Alcance: Igual que let, const tiene alcance de bloque.
// Inmutabilidad: Una vez que se asigna un valor a una variable const, no puede ser reasignada. Sin embargo, si el valor es un objeto o un array, los elementos internos pueden modificarse.
// Re-declaración: No puedes declarar la misma variable const más de una vez en el mismo ámbito.
// Hoisting: Similar a let, const también es "elevada" pero no inicializada.
if (true) {
    const x = 10;
    console.log(x); // Output: 10
    // x = 20; // Error: Assignment to constant variable.
}
console.log(x); // Error: x is not defined



// CUIDADOOOOOOOOO !!!
// los array y los objetos , tanto con 'let' y con 'const' 
// Puedes agregar, quitar o modificar los elementos (no puedes asignar un nuevo array o objeto a la misma variable)
const miArray = [1, 2, 3];
miArray.push(4);  // Agrega un nuevo elemento al array
console.log(miArray); // Output: [1, 2, 3, 4]
// Esto causaría un error:
// miArray = [5, 6, 7]; // Error: Assignment to constant variable.

const miArray2 = [1, 2, 3];
miArray2.push(4);  // Agrega un nuevo elemento al array
console.log(miArray2); // Output: [1, 2, 3, 4]
// Esto causaría un error:
// miArray = [5, 6, 7]; // Error: Assignment to constant variable.


const miObjeto = { nombre: "Juan", edad: 30 };
miObjeto.edad = 31;  // Modifica la propiedad 'edad'
miObjeto.ciudad = "Madrid";  // Agrega una nueva propiedad 'ciudad'
console.log(miObjeto); // Output: { nombre: "Juan", edad: 31, ciudad: "Madrid" }
// Esto causaría un error:
// miObjeto = { nombre: "Ana", edad: 25 }; // Error: Assignment to constant variable.
