"use strict"

/* Array */

/* Formas de declarar e inicializar un arreglo */

/* Forma 1 */
var aprendiz1 = new Array;
aprendiz1[0] = 1;
aprendiz1[1] = "Yeimi Katerin";
aprendiz1[2] = "Peña Ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "Villa del prado";
aprendiz1[5] = 156;

/* Forma 2  */
var aprendiz2 = new Array(2, "Luisa Fernanda", "Ramirez Montoya", 19, "Simon bolivar", 157);

/* Forma 3 */
var aprendiz3 = [3, "Jesus Nicolas", "Ayerbe Guarnizo", 17, "Las palmitas", 177];

/* Mostrar el nombre completo del aprendiz2 */
console.log("El nombre completo del aprendiz 2 es: " + aprendiz2[1] + " " + aprendiz2[2] );
console.log(" ");

/* Añadiendo elementos al arreglo */
aprendiz3[6] = "3223562765";
console.log(aprendiz3[6]);
console.log(" ");

/* Length = Longitud  */

/* Contando elementos */

var cantidadElementos = aprendiz1.length;
console.log("Aprendiz1 tiene " + cantidadElementos + " " + "elementos.");
console.log(" ");

/* Contando caracteres */

var cantidadCaracteres = aprendiz2[1].length;
console.log("Cantidad de carácteres del nombre = " + cantidadCaracteres);
console.log(" ");

/* Remover el ultimo elemento de un arreglo */