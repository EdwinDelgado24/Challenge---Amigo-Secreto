// Declaración de una variable para almacenar los nombres
let amigos = [];

//Función para agregar nombres a la lista
function agregarAmigo() {
    // Obtener el valor ingresado por el usuario
    let nombreInput = document.getElementById("amigo").value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    // Validar que el campo no esté vacío
    if (nombreInput === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    // Verificar si el nombre ya existe en la lista
    let nombreExiste = amigos.some(amigo => amigo.toLowerCase() === nombreInput.toLowerCase());

    if (nombreExiste) {
        alert(`El nombre "${nombreInput}" ya ha sido agregado. No puedes ingresar nombres duplicados.`);
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreInput);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

   // Mostrar la lista de amigos y actualizarla
    mostrarLista();

    // Asegurar que la lista se muestre cuando haya al menos un amigo
    function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");

    }
       // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(item);
    });
// Mostrar la lista si hay amigos
    listaAmigos.style.display = amigos.length > 0 ? "block" : "none";
}

    // Recorrer el array y agregar cada nombre a la lista en pantalla
    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(item);
    });
}
// Mostrar la lista mientras se están agregando nombres
    listaAmigos.style.display = "block";
}
// Función para ocultar la lista antes del sorteo**
function ocultarLista() {
    document.getElementById("listaAmigos").style.display = "none";
}
// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("🎉 ¡Ya no quedan amigos para sortear! 🎉");
        document.getElementById("resultado").innerHTML = "No hay más amigos para sortear.";
        return;
    }

    //Ocultar la lista de amigos antes de realizar el sorteo
    ocultarLista();

    // Seleccionar un amigo aleatorio de la lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo en la pantalla
    document.getElementById("resultado").innerHTML = `🎊 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎊`;

    // Eliminar el amigo sorteado del array para evitar repeticiones
    amigos.splice(indiceAleatorio, 1);


// Si después del sorteo ya no quedan amigos, mostrar un mensaje
    if (amigos.length === 0) {
        alert("🎉 ¡Se han sorteado todos los amigos secretos! 🎉");
        document.getElementById("resultado").innerHTML = "Todos los amigos han sido sorteados.";
    }
}
