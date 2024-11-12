// function cambiarTexto() {
    
//     const selectorTitulo= document.getElementById('titulo')
//     const nombreUsuario = prompt("ingrese su nombre")
//     const contenedor = document.getElementById('cont-general')

//     //cambianddo contenido de una etiqueta 
//     selectorTitulo.innerText="Sara Pulido";
//     selectorTitulo.innerHTML="<strong> Usuario:</strong> " + nombreUsuario;
//     //cambianddo estilos de una etiqueta 
//     selectorTitulo.style.backgroundColor= "pink";
//     selectorTitulo.style.color= "#000";
//     selectorTitulo.style.padding= "20px";
//     //cambiando estructura de una etiqueta desde js de una etiqueta 
//     //agregando clase
//     contenedor.classList.add('dia')

// }

function circulo(params) {
    const selectortitulo= document.getElementById('titulo')
    const selectorfigura= document.getElementById('figura')

    selectorfigura.style.borderRadius="50%";
    selectortitulo.innerText="CIRCULO"
}

function rombo() {
    const selectortitulo= document.getElementById('titulo')
    const selectorfigura= document.getElementById('figura')

    selectorfigura.style.borderRadius = "0";
    selectorfigura.style.width = "250px";
    selectorfigura.style.height = "250px";
    selectorfigura.style.transform = "rotate(45deg)";
    selectortitulo.innerText = "ROMBO";
}
function cambiocolor() {
    const selectorfigura = document.getElementById('cont-general');
    const selectortitulo= document.getElementById('titulo');
    // Este es un array para guardar los colores a los que puede cambiar
    const colores = ["coral", "lightblue", "lightgreen", "plum", "yellow","aquamarine","2F2F2F"];
    // Aqui se coloca una nueva variable o constante para utilizar en donde
    // Math.floor devuelve un número exacto entero
    // Math.random elige número aleatorio entre los números existentes pero salen con decimal
    // colores.length número maximo del array entonces multiplica con lo random
    // Genera colores aleatorios cada vez que se utilize la función
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            
    // Cambia el color de fondo del elemento
    selectortitulo.style.color = colorAleatorio;
    selectorfigura.style.backgroundColor = colorAleatorio;  
}
function cambioimagen() {
    const selectorfigura = document.getElementById('figura');
    const selectortitulo= document.getElementById('titulo');
    // Este es un array para guardar los colores a los que puede cambiar
    const imagenes = ["img/avionventana.jpg", "img/blanconegro.png", "img/casanevada.jpg", "img/frase.jpg","img/catedral.jpg","img/leon.jpg","img/vaca.jpg"];
    // Aqui se coloca una nueva variable o constante para utilizar en donde
    // Math.floor devuelve un número exacto entero
    // Math.random elige número aleatorio entre los números existentes pero salen con decimal
    // colores.length número maximo del array entonces multiplica con lo random
    // Genera colores aleatorios cada vez que se utilize la función
    const imgAleatorio = imagenes[Math.floor(Math.random() * imagenes.length)];
            
    // Cambia el color de fondo del elemento
    selectortitulo.innerText="IMAGEN"
    selectortitulo.style.color = "aquamarine";
    selectorfigura.style.backgroundImage = `url(${imgAleatorio})`;
    selectorfigura.style.backgroundSize = "cover";
}
function arriba(){
    const mover=document.getElementById('figura');
    const top=document.getElementById('titulo');

    top.innerText="TOP";
    mover.style.position= 'relative';
    mover.style.top= "-70px";
}

function izquierda(){
    const m1=document.getElementById('figura');
    const m2=document.getElementById('titulo');

    m2.innerText="IZQUIERDA";
    m1.style.alignSelf= "flex-start";
    m1.style.marginLeft= "10px";
}

function abajo(){
    const move=document.getElementById('figura');
    const move1=document.getElementById('titulo');

    move1.innerText="DOWN";
    move.style.position= 'relative';
    move.style.bottom= "-150px";
}

function derecha(){
    const m3=document.getElementById('figura');
    const m4=document.getElementById('titulo');

    m4.innerText="DERECHA";
    m3.style.alignSelf="flex-end"
    m3.style.marginRight= "10px";
}
function diagonal(){
    const figuras=document.getElementById('figura')
    const texto=document.getElementById('titulo');

    figuras.style.position = 'relative';


     let posX = 160;
     let posY = 90;
     const speed = 0;
     posX += speed;
     posY += speed;
     figuras.style.left = posX + 'px';
     figuras.style.top = posY + 'px';

     // Llama a la función de nuevo para animar
     requestAnimationFrame(diagonal);

     texto.innerText="DIAGONAL";
    
 }

function degradado(){
    const selectortitulo= document.getElementById('titulo');
    const Figura= document.getElementById('figura');
    Figura.classList.add('degradado');
    selectortitulo.innerText = "DEGRADADO";
}

function Estrella() {
    const cambioestrella = document.getElementById("figura");
    const cambiotexto = document.getElementById("titulo");

    // Cambia la forma del cuadrado a una estrella usando clip-path
    cambioestrella.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    cambioestrella.style.backgroundColor = "aquamarine"; // Cambia el color, si deseas

    // Cambia el texto para reflejar el cambio
    cambiotexto.innerText = "STAR";
}

function animacions(){
    const texto=document.getElementById("titulo");
    const Figura=document.getElementById("figura");
    Figura.classList.add('animacions');

    texto.innerText= "ANIMACIÓN";
}

function panelLateral() {
    const panel= document.getElementById("panel-lateral");

    panel.classList.toggle("active");
}

function panelSuperior() {
    const panel= document.getElementById("panel-superior");

    panel.classList.toggle("active");
}