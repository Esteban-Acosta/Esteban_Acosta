"use strict"

/* Identificacion de un producto  y costoso*/
console.log("IDENTIFICACION DE PRODUCTO MAS COSTOSO Y MENOS COSTOSO");
console.log("");
var producto1 = 2000;
var producto2 = 6000;
var producto3 = 3000;
var producto4 = 1000;

if (producto1 > producto2 && producto1 > producto3 && producto1 > producto4) {
    console.log("El producto más costoso es: " + producto1);
}
else if (producto2 > producto1 && producto2 > producto3 && producto2 > producto4) {
    console.log("El producto más costoso es: " + producto2);
}
else if (producto3 > producto1 && producto3 > producto2 && producto3 > producto4) {
    console.log("El producto más costoso es: " + producto3);
}
else if (producto4 > producto1 && producto4 > producto2 && producto4 > producto3) {
    console.log("El producto más costoso es: " + producto4);
}
if (producto1 < producto2 && producto1 < producto3 && producto1 < producto4) {
    console.log("El producto menos costoso es: " + producto1);
}
else if (producto2 < producto1 && producto2 < producto3 && producto2 < producto4) {
    console.log("El producto menos costoso es: " + producto2);
}  
else if (producto3 < producto1 && producto3 < producto2 && producto3 < producto4) {
    console.log("El producto menos costoso es: " + producto3);
}    
else if (producto4 < producto1 && producto4 < producto2 && producto4 < producto3) {
    console.log("El producto menos costoso es: " + producto4);
}  
console.log("");

/*USUARIO Y CONTRASEÑA*/

console.log("LOGIN Y PASSWORD");
console.log("");

var usuario_Bd = "Santiago";
var contraseña_Bd = "1234";
var usuario_input = "Santiago";
var contraseña_input = "1234";

if (usuario_Bd === usuario_input && contraseña_Bd === contraseña_input ) {
    console.log("Bienvenido :)");
}
else if(usuario_Bd === usuario_input && contraseña_Bd !== contraseña_input){
    console.log("Error, contraseña incorrecta.");
}
else if (usuario_Bd !== usuario_input && contraseña_Bd === contraseña_input){
    console.log("Error, usuario incorrecto.");
}
else {
    console.log("Error, usuario y contraseña incorrectos.");
}
console.log("");

/* SISTEMA DE DESCUENTOS*/

console.log("SISTEMA DE DESCUENTOS");
console.log("");

var compra1 = 200000;
var compra2 = 100000;
var compra3 = 300000;
var compra4 = 80000;
var descuento1 = 3000;
var descuento2 = 10000;
var descuento3 = 24000;

/*compra 1*/

console.log("Compra 1"); 
if (compra1 >= 100000 && compra1 < 200000){
    console.log("El valor total de su compra es: $" + compra1);
    console.log("El valor descontado es: $" + descuento1);
    console.log("El valor total es: $" + (compra1 - descuento1));
}
else if (compra1 >= 200000 && compra1 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra1);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor total es: $" + (compra1 - descuento2));
}
else if (compra1 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra1);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor total es: $" + (compra1 - descuento3));
}
else {
    console.log("El valor de su compra sin descuento es: $" + compra1);
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total de su compra es: $" + compra1);
}
console.log("");

/*compra 2*/

console.log("Compra 2")
if(compra2 >= 100000 && compra2 < 200000){
    console.log("El valor de su compra sin descuento es: $" + compra2);
    console.log("EL valor descontado es: $" + descuento1);
    console.log("El valor total es: $" + (compra2 - descuento1));
}
else if (compra2 >= 200000 && compra2 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra2);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor total es: $" + (compra2 - descuento2));
}
else if (compra2 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra2);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor total es: $" + (compra2 - descuento3));
}
else {
    console.log("El valo de su compra sindescuento es: $" +compra2);
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total de su compra es: $" + compra2);
}
console.log("");

/*compra 3*/

console.log("Compra 3");
if (compra3 >= 100000 && compra3 < 200000){
    console.log("El valor de su compra sin descuento es: $" + compra3);
    console.log("El valor descontado es: $" + descuento1);
    console.log("El valor total es: $" + (compra3 - descuento1));
}
else if (compra3 >= 200000 && compra3 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra3);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor total es: $" + (compra3 - descuento2));
}
else if (compra3 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra3);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor total es: $" + (compra3 - descuento3));
}
else {
    console.log("El valor de su compra sin descuento es: $" + compra3);
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total es: $" + compra3);
}
console.log("");

/*compra 4*/

console.log("Compra 4");
if (compra4 >= 100000 && compra4 < 200000){
    console.log("El valor de su compra sin descuento es: $" + compra4);
    console.log("El valor descontado es: $" + descuento1);
    console.log("El valor total es: $" + (compra4 - descuento1));
}
else if (compra4 >= 200000 && compra4 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra4);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor total es: $" + (compra4 - descuento2));
}
else if (compra4 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra4);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor total es: $" + (compra4 - descuento3));
}
else {
    console.log("El valor de su compra sin descuento es: $" + compra4);
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total es: $" + compra4);
  
}