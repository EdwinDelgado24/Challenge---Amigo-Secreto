let amigos = []; // Lista de amigos ingresados
let amigosPendientes = []; // Lista de amigos aún por sortear

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Elimina espacios al inicio y final

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. No se pueden repetir amigos.");
        return;
    }

    amigos.push(nombre); // Agrega el amigo a la lista
    amigosPendientes.push(nombre); // También lo agrega a los que faltan por sortear
    actualizarListaAmigos(); // Actualiza la visualización
    inputAmigo.value = ""; // Limpia el input
}

// Función para actualizar la lista de amigos visibles
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

    // Mostrar la lista si se había ocultado
    listaAmigos.style.display = "block";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    if (amigosPendientes.length === 0) {
        alert("Todos los amigos han sido sorteados. Reinicia el juego para comenzar de nuevo.");
        return;
    }

    // Ocultar la lista de amigos para que nadie vea a los que quedan
    document.getElementById("listaAmigos").style.display = "none";

    // Seleccionar un amigo al azar de los que aún no han sido sorteados
    let indice = Math.floor(Math.random() * amigosPendientes.length);
    let amigoSorteado = amigosPendientes.splice(indice, 1)[0]; // Remover y obtener el nombre

    mostrarResultado(amigoSorteado);
}

// Función para mostrar SOLO el último amigo sorteado
function mostrarResultado(amigo) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Se limpia el resultado anterior para que solo se vea el último sorteo
    const li = document.createElement("li");
    li.textContent = `🎉 ${amigo} es el amigo secreto 🎉`;
    resultado.appendChild(li);
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    amigosPendientes = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block"; // Mostrar la lista nuevamente
}

// Permitir agregar con la tecla Enter
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
