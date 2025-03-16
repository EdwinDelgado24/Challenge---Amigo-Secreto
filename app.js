let amigos = []; // Lista de amigos ingresados
let amigosSorteados = []; // Lista de amigos ya sorteados

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Obtiene el nombre sin espacios adicionales

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. No se pueden repetir amigos.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista
    actualizarListaAmigos(); // Muestra la lista actualizada
    inputAmigo.value = ""; // Limpia el campo de texto
}

// Función para actualizar la lista en pantalla
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Ya se han sorteado todos los amigos. Reinicia el juego para un nuevo sorteo.");
        return;
    }

    // Ocultar la lista de amigos para que no se vean los nombres pendientes
    document.getElementById("listaAmigos").style.display = "none";

    let amigoSorteado;
    do {
        let indice = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indice];
    } while (amigosSorteados.includes(amigoSorteado));

    amigosSorteados.push(amigoSorteado); // Agregar el amigo sorteado a la lista de sorteados

    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = `🎉 ${amigo} es el amigo secreto 🎉`;
    resultado.appendChild(li);
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    amigosSorteados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block"; // Mostrar la lista nuevamente
}

// Agregar event listeners para teclas de acceso rápido
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
