// Loop (for y while)

// 1) For
// Para entender que son los loops vamos a poner un ejemplo simple
// El bucle for es como un robot que repite una acción varias veces. Le decimos cuántas veces queremos que repita, y él lo hace.

// Cómo funciona:

// Inicio: El robot empieza desde un número.
// Condición: Le decimos al robot hasta qué número debe llegar.
// Incremento: Después de cada repetición, el robot aumenta el número en uno (o más, según le digamos).

for (let i = 0; i < 3; i++) {
    console.log("Hola " + i);
}
// ¿Qué hace este código?
// i = 0: "Hola 0"
// i = 1: "Hola 1"
// i = 2: "Hola 2"

// Explicación Paso a Paso:
// let i = 0;: El robot empieza desde el número 0.
// i < 3;: El robot sigue hasta que i sea menor que 3.
// i++: Después de cada "Hola", el robot suma 1 a i.

// 2) While
// El bucle while es como un robot que sigue repitiendo una acción mientras se cumple una condición.

// Cómo funciona:
// Condición: El robot sigue repitiendo la acción mientras la condición sea verdadera.
// Acción: Ejecuta la acción.
// Verificación: Después de cada repetición, el robot revisa si debe seguir.

let i = 0;
while (i < 3) {
    console.log("Hola " + i);
    i++;
}
// Output:
// "Hola 0"
// "Hola 1"
// "Hola 2"

// Explicación Paso a Paso:
// let i = 0;: El robot empieza desde el número 0.
// while (i < 3): El robot sigue (infinitamente) mientras i sea menor que 3. Cuando llega a 3 se quiebra y se detiene
// i++: Después de cada "Hola", el robot suma 1 a i.


// Podemos hacer For en los objetos
const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]); // ira a persona['nombre'] despues persona['edad'] despues a persona['ciudad']
}
// Output:
// "nombre: Juan"
// "edad: 30"
// "ciudad: Madrid"