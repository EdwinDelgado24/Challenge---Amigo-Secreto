// Paso 1: Declarar una variable para almacenar los nombres
let amigos = [];

// Paso 2: Función para agregar nombres a la lista
function agregarAmigo() {
    // Obtener el valor ingresado por el usuario
    let nombreInput = document.getElementById("amigo").value.trim();

    // Validar que el campo no esté vacío
    if (nombreInput === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreInput);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Paso 3: Función para mostrar la lista de nombres ingresados
function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizar
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre a la lista en pantalla
    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Paso 4: Función para realizar el sorteo
function sortearAmigo() {
    // Verificar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("¡Ya no quedan amigos para sortear!");
        return;
    }

    // Seleccionar un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

   // Mostrar el resultado en la pantalla
    document.getElementById("resultado").innerHTML = `🎊 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎊`;

    // Eliminar el amigo sorteado del array para evitar repeticiones
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista de amigos en pantalla
    mostrarLista();
