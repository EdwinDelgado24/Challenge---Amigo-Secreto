// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    amigos.forEach(amigo => {
        let elemento = document.createElement("li");
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la lista en la interfaz
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
