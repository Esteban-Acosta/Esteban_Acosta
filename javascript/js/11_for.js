"use strict"

/* generar un consecutivo del 1 al 20 */
for (var i = 1; i <= 20; i++) {
    console.log(i); 
}
console.log(" ");
/* Generar en pantalla aprendiz1, aprendiz2, .... aprendiz20 */
for (var i = 1; i <= 20; i++) {
    console.log("Aprendiz N." + i);
}
console.log(" ");

/* Recorriendo arreglos */ 

var aprendiz1 = new Array;
aprendiz1[0] = 1;
aprendiz1[1] = "Yeimi Katerine";
aprendiz1[2] = "Peña Ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "Villa del prado";
aprendiz1[5] = 156;

for (var i = 0; i <= aprendiz1.length -1; i++) {
    console.log(aprendiz1[i]);
}

var aprendiz2 = new Array(2, "Luisa Fernanda", "Ramirez Montoya", 19, "Simon bolivar", 157);

var aprendiz3 = [3, "Jesus Nicolas", "Ayerbe Guarnizo", 17, "Las palmitas", 177];