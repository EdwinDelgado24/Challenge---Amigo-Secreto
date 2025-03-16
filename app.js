// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Referencias a los elementos del DOM
const inputNombre = document.getElementById("amigo");
const listaElementos = document.getElementById("listaAmigos");
const resultadoElemento = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Elimina espacios al inicio y final

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    listaAmigos.push(nombre);

    // Actualizar la lista en el DOM
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    // Limpiar lista antes de actualizar
    listaElementos.innerHTML = "";

    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        // Agregar un botón de eliminar al lado del nombre
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaElementos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos nombres en la lista para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en el DOM
    resultadoElemento.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
