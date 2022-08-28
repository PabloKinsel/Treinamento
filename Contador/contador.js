const aumentar$ = document.getElementById("aumentar");
const zerar$ = document.getElementById("zerar");
const diminuir$ = document.getElementById("diminuir");
const p$ = document.getElementById("Contador");

let Contador = 0;

p$.innerHTML = Contador;

aumentar$.addEventListener("click", function () {
    p$.innerHTML = ++Contador
});

diminuir$.addEventListener("click", function () {
    p$.innerHTML = --Contador
});

zerar$.addEventListener("click", function () {
    p$.innerHTML = Contador = 0;
});
