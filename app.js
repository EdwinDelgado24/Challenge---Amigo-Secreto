// Lista de amigos
let listaAmigos = [];
let amigosSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = "";
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear. Agregue nombres primero.");
        return;
    }

    if (listaAmigos.length === amigosSorteados.length) {
        alert("Todos los amigos han sido sorteados.");
        return;
    }

    // Oculta la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";

    let nombreSorteado;
    do {
        let indice = Math.floor(Math.random() * listaAmigos.length);
        nombreSorteado = listaAmigos[indice];
    } while (amigosSorteados.includes(nombreSorteado));

    amigosSorteados.push(nombreSorteado);
    mostrarResultado(nombreSorteado);
}

// Función para mostrar el resultado en pantalla
function mostrarResultado(nombre) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nombre} es el amigo secreto 🎁</li>`;
}
