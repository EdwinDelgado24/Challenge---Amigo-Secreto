/* Creando una lista para almacenar los amigos ingresados */
let amigos = [];
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre");
    const btnAdicionar = document.getElementById("adicionar");
    const listaAmigos = document.getElementById("listaAmigos");
    const btnSortear = document.getElementById("sortear");
    const resultado = document.getElementById("resultado");

    btnAdicionar.addEventListener("click", () => {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
