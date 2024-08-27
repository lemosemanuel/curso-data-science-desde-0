// Condicionales en JavaScript

let edad = 20;

// if-else básico
// Esto es muy fácil: si se cumple la 'lógica', es decir, si la condición resulta true, lo que esta entre "()",
// entonces se ejecutará el código dentro del bloque 'if'. Si no se cumple, se pasará al 'else'.
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// if-else if-else
let temperatura = 30;

if (temperatura > 30) {
    console.log("Hace mucho calor.");
} else if (temperatura > 20) {
    console.log("El clima es agradable.");
} else {
    console.log("Hace frío.");
}

// Operador ternario (otra forma de hacerlo)
// si la condición resulta true, corre lo que va luego del "?" sino lo que va luego de ":" 
let es_mayor_de_edad = (edad >= 18) ? "Sí, es mayor de edad." : "No, es menor de edad.";
console.log(es_mayor_de_edad);

// switch-case
let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día no válido";
        break;
}

console.log("Hoy es:", nombreDia);
