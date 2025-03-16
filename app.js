// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Referencias a los elementos del DOM
    const inputNombre = document.getElementById("amigo");
    const listaElementos = document.getElementById("listaAmigos");
    const resultadoElemento = document.getElementById("resultado");
    const btnAgregar = document.getElementById("btnAgregar");
    const btnSortear = document.getElementById("btnSortear");

    // Lista para almacenar los nombres
    let listaAmigos = [];

    // Función para agregar un amigo
    function agregarAmigo() {
        const nombre = inputNombre.value.trim(); // Elimina espacios en blanco

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (listaAmigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
            return;
        }

        // Agregar el nombre a la lista
        listaAmigos.push(nombre);

        // Mostrar la lista si estaba oculta
        listaElementos.style.display = "block";

        // Actualizar la lista en la interfaz
        actualizarLista();

        // Limpiar el campo de entrada
        inputNombre.value = "";
    }

    // Función para actualizar la lista visible
    function actualizarLista() {
        // Limpiar lista antes de actualizar
        listaElementos.innerHTML = "";

        listaAmigos.forEach((nombre, index) => {
            const li = document.createElement("li");
            li.textContent = nombre;

            // Botón para eliminar
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "❌";
            botonEliminar.style.marginLeft = "10px";
            botonEliminar.onclick = () => eliminarAmigo(index);

            li.appendChild(botonEliminar);
            listaElementos.appendChild(li);
        });

        // Mostrar la lista solo si hay elementos
        listaElementos.style.display = listaAmigos.length > 0 ? "block" : "none";
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

        // Ocultar la lista de amigos al iniciar el sorteo
        listaElementos.style.display = "none";

        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[indiceAleatorio];

        // Mostrar el resultado en la interfaz
        resultadoElemento.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;

        // Eliminar al amigo sorteado de la lista
        listaAmigos.splice(indiceAleatorio, 1);

        // Actualizar la lista en pantalla
        actualizarLista();

        // Verificar si ya no quedan amigos para sortear
        if (listaAmigos.length === 0) {
            alert("¡Se han sorteado todos los amigos! No quedan más por elegir.");
            resultadoElemento.innerHTML += `<li>✅ Todos los amigos han sido sorteados. ✅</li>`;
        }
    }

    // Asignar eventos a los botones
    btnAgregar.addEventListener("click", agregarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);
});
