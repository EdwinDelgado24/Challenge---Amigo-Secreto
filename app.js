// Array para almacenar los nombres ingresados
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar si el campo está vacío o si el nombre ya está en la lista
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    if (amigos.includes(nombre)) {
        alert('Este nombre ya fue ingresado.');
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = ''; // Limpiar el campo de texto
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay más amigos para sortear. Inicie un nuevo sorteo.');
        return;
    }

    // Ocultar la lista de amigos para evitar que se vean los nombres restantes
    document.getElementById('listaAmigos').style.display = 'none';

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0]; // Eliminar el nombre sorteado de la lista

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    const li = document.createElement('li');
    li.textContent = `🎉 ${amigoSorteado} es el amigo secreto 🎉`;
    resultado.appendChild(li);

    // Verificar si ya no hay más amigos para sortear
    if (amigos.length === 0) {
        alert('Se han sorteado todos los amigos. Puede iniciar un nuevo sorteo.');
        mostrarBotonReiniciar();
    }
}

