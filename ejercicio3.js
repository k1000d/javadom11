/* Crea un programa que te pida un nombre y una edad. 
Si la edad es menor a 18 años mostrar en 
pantalla “Hola (nombre), eres menor de edad.”. 
Si es mayor mostrar en pantalla “Hola (nombre), 
eres mayor de edad.”. Hacedlo con  if, switch y condicional
 ternario.*/

let div2 = document.getElementById("div2");

let nombre = window.prompt ('Escribe tu nombre');
let edad = parseInt (window.prompt ('Escribe tu edad'));


if (edad < 18) {
     div2.innerHTML = `
     <p>Hola ${nombre} eres menor de edad <p>
     `;
}
else if (edad > 18 ) {
    div2.innerHTML = `
    <p> Hola ${nombre} eres mayor de edad<p>}
    `;

};

switch (edad >= 18 ) {
    case (true):
    div2.innerHTML = `<p> Hola ${nombre} eres mayor de edad`;
    
    case (false ):
    div2.innerHTML = `<p> Hola ${nombre} eres menor de edad`;
};


edad < 18

? ( div2.innerHTML = `<p> Hola ${nombre} eres menor de edad`):

(div2.innerHTML = `<p> Hola ${nombre} eres mayor de edad`);



