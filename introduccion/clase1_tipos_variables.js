// Para empezar a "comentar código" para que la máquina no lo ejecute, en javascript se usa // las dos barras y luego el comentario
// esto significa que lo que no se comenta con // la máquina lo procesará


// Tipos de variables
// (Por el momento no te fijes en el 'let', 
//  sino en lo que va a su derecha, que es el 'tipo variable')
// Number
let edad = 25;
let pi = 3.14159;
// String
let nombre = "Juan";
let saludo = 'Hola, ¿cómo estás?';
// Boolean : (valores lógicos)
let esMayorDeEdad = true;
let estaLloviendo = false;
// Undefined: (Una variable declarada pero no inicializada)
let sinDefinir;

// Object: Contiene colecciones de propiedades
let persona = {
    nombre: "Juan",
    edad: 25
  };

// Array: Lista ordenada de valores.
let numeros = [1, 2, 3, 4, 5];


// Para correr código JavaScript y recibir el output

// Ejecutar JavaScript en un Navegador
// Abra el navegador (usa Chrome). haz clic en "derecha" 
// y toca donde dice "inspeccionar". Mira donde dice "consola" y ahí escribes

// Ejecutar JavaScript en Node.js (preferido por todos)
// Node.js es un entorno de ejecución de JavaScript del lado del servidor. A diferencia de JavaScript en el navegador (que solo se ejecuta en el cliente, es decir, en el navegador)
// Instalación de Node.js
// 1) Ve a Node.js official website (https://nodejs.org) y descarga la versión recomendada para tu sistema operativo.
//    Instalas primero el Node Version Manager(NVM)
//    Abre tu terminal (Command Prompt en Windows, Terminal en macOS o Linux)
//    Escribe: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
//    Sali y volve a entrar a la Terminal
//    Ahora escribes: nvm install-latest-npm
//    Por último escribes : nvm install node

// 2) Verificación de la Instalación o Actualizar (si tu version es vieja):
//     Abre tu terminal (Command Prompt en Windows, Terminal en macOS o Linux)
//     Escribe: node -v
//   "Si tu version es vieja, haz lo siguiente":
//   (recorda de tener el NPM sino fijate como instalarlo en el paso 1)
//   Abre tu terminal (Command Prompt en Windows, Terminal en macOS o Linux)
//   Escribe: sudo npm install -g npm@latest
//   volve a la terminal :
//   escribe: node -v
//   escribe: npm -v

//  Listo ya esta! 

// Hora de probarlo ! 
// hagamos un console.log (esto nos ayuda a imprimir en pantalla lo que tiene entre parentesis)
// console.log("hola que tal");
// En la terminal, navega hasta el directorio donde guardaste 
// (es decir, navegue hasta la carpeta donde guardó el 'archivo' clase1_tipos_variables.js)
// Si no sabes cómo hacerlo, haz clic derecho en el 'archivo' clase1_tipos_variables.js y haz clic en "abrir en terminal integrada o open in integrated terminal"
// y escribes: node clase1_tipos_variables.js 
// toca enter y listo !! 
// Vamos a la clase2
