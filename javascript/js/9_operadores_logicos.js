"use strict"

/* Operadores lógicos
&&.......y
||.......o
!=.......negacion
xor......O exclusivo */

/* Si el aprendiz tiene jovenes en accion o sisben puede acceder a subsidio de transporte 
si tiene jovenes en accion y sisben no puede acceder al subsidio de transporte
si no tiene jovenes en accion ni sisben tampoco puede acceder al subsidio de transporte */

console.log("Ejemplo de xor (^).");
console.log(" ");
var jovenAccionUsuario = true;
var sisbenUsuario = true;

if (jovenAccionUsuario === true ^ sisbenUsuario === true) {
    console.log("Puede acceder al beneficio de transporte.");
}
else {
    console.log("No puede acceder al beneficio de transporte.");
}