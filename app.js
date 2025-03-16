let amigos = [];
let amigosSorteados = [];

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla
    
    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indiceAleatorio, 1)[0]; // Remueve el amigo sorteado de la lista principal
    amigosSorteados.push(amigoSorteado); // Lo almacena en la lista de sorteados
    actualizarLista(); // Actualizar la lista después del sorteo
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += `<li>${amigoSorteado}</li>`; // Agregar el amigo sorteado a la lista de resultados
}
