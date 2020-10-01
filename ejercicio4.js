/* Lo mismo que en el ejercicio 3. 
Pero si es menor de edad que el mensaje 
sea rojo y si es mayor de edad que el mensaje sea verde.*/

let div4 = document.getElementById("div4");
let div41 = document.getElementById("div41");
let div42 = document.getElementById("div42");
let div43 = document.getElementById("div43")
let div44 = document.getElementById("div44");
let div45 = document.getElementById("div45");

let nombre = window.prompt ('Escribe tu nombre');
let edad = parseInt (window.prompt ('Escribe tu edad'));


if (edad < 18) {
     div4.innerHTML = `
     <p id= "parrafo" >Hola ${nombre} eres menor de edad <p>
     `
     ;
}
else if (edad > 18 ) {
    div41.innerHTML = `
    <p id= "b" >Hola ${nombre} eres mayor de edad <p>
    `;

};

switch (edad > 18 ) {
    case (false):
    div42.innerHTML = `<p id= "c" >Hola ${nombre} eres menor de edad`;
    break;
    case (edad > 18):
    div43.innerHTML = `<p id="d" >Hola ${nombre} eres mayor de edad`;
    break;
};


edad < 18

? ( div44.innerHTML = `<p id="e" >Hola ${nombre} eres menor de edad`)
:

(div45.innerHTML = `<p id="f" >Hola ${nombre} eres mayor de edad`)
;



let a = document.getElementById ("div4").style.color = 'green';
let b = document.getElementById ("div41").style.color = 'red';
let c = document.getElementById ("div42").style.color = 'green';
let d = document.getElementById ("div43").style.color = 'red';
let e = document.getElementById ("div44").style.color = 'green';
let f = document.getElementById ("div45").style.color = 'red';


