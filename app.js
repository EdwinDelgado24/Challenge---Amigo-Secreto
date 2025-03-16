// Array para almacenar los nombres de los amigos
let amigos = [];
let amigosSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. No se permiten duplicados.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista visualmente
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Ya se han sorteado todos los amigos. Reinicia el juego para comenzar de nuevo.");
        return;
    }

    let lista = document.getElementById("listaAmigos");
    lista.style.display = "none"; // Ocultar la lista antes del sorteo

    let resultado = document.getElementById("resultado");
    let amigoSorteado;

    do {
        let indice = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indice];
    } while (amigosSorteados.includes(amigoSorteado));

    amigosSorteados.push(amigoSorteado);

    let li = document.createElement("li");
    li.textContent = `🎉 ${amigoSorteado} es el amigo secreto! 🎁`;
    resultado.appendChild(li);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    amigosSorteados = [];

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block"; // Mostrar nuevamente la lista
}
