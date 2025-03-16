// Lista para almacenar los nombres de los amigos
let amigos = [];
let amigosSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = ""; // Limpiar el campo de entrada
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

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
        alert("Todos los amigos ya han sido sorteados. Reiniciando el sorteo.");
        reiniciarSorteo();
        return;
    }

    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));

    amigosSorteados.push(amigoSorteado);
    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 ${amigo} es el amigo secreto! 🎁</p>`;

    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigosSorteados = [];
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block"; // Volver a mostrar la lista
}

// Event Listeners para permitir agregar amigos con la tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
