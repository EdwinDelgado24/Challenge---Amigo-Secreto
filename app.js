// Lista de amigos y lista de amigos restantes por sortear
let amigos = [];
let amigosRestantes = [];

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
    amigosRestantes.push(nombre);
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

    // Mostrar la lista solo si hay amigos agregados
    lista.style.display = amigos.length > 0 ? "block" : "none";
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    if (amigosRestantes.length === 0) {
        alert("Todos los amigos han sido sorteados. Reiniciando el sorteo.");
        reiniciarSorteo();
        return;
    }

    // Seleccionar un amigo al azar
    let indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    let amigoSorteado = amigosRestantes.splice(indiceAleatorio, 1)[0]; // Eliminar el sorteado de la lista

    mostrarResultado(amigoSorteado);

    // Ocultar la lista de amigos después de sortear el primero
    document.getElementById("listaAmigos").style.display = "none";
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 ${amigo} es el amigo secreto! 🎁</p>`;
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega nombres antes de sortear.");
        return;
    }

    amigosRestantes = [...amigos]; // Restaurar la lista original
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block"; // Volver a mostrar la lista de amigos
    actualizarListaAmigos();
}

// Event Listener para permitir agregar amigos con la tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
