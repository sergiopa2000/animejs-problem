import anime from "./node_modules/animejs/lib/anime.es.js";

function* generator() {
  while (true) {
    yield Math.floor(Math.random() * 300);
    yield Math.floor(Math.random() * 400);
    yield Math.floor(Math.random() * 1000);
  }
}

const gen = generator();

function random() {
  let elemento = document.querySelector("#contenedor");
  while (elemento.hasChildNodes()) elemento.removeChild(elemento.firstChild);
  for (let i = 0; i < 100; i++) {
    let nodo = document.createElement("div");
    nodo.className = "cuadro";
    nodo.style = "background-color: rgb(" + anime.random(155, 255) + ",0,0)";
    elemento.appendChild(nodo);
  }

  anime
    .timeline({
      targets: ".cuadro",
      delay: 400,
      duration: 3500,
      endDelay: 400,
    })
    .add({
      targets: ".cuadro",
      translateX: function () {
        return gen.next().value;
      },
      rotate: function () {
        return anime.random(0, 360);
      },
      opacity: [0.5, 1],
    })
    .add({
      translateX: 0,
      rotate: 0,
      opacity: 1,
      complete: random,
    });
}

random();
