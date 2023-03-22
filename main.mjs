import {canvas, context, graella, alçadaPala, maximPalaY, paddleSpeed, velocitatPilota, palaEsquerra, palaDreta, pilota, collides, loop} from "/pong.mjs";



//Per moviment ratoli
window.addEventListener('mousemove', e => {
    // Callback function
    palaEsquerra.y = e.clientY;

});

window.addEventListener("scroll", () => {
    // Callback function
    palaEsquerra.y = Math.round(window.scrollY);
    console.log(Math.round(window.scrollY))
});

collides;
loop;



requestAnimationFrame(loop);
