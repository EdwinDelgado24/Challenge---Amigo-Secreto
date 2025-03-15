// Paso 1: Declarar una variable para almacenar los nombres
let amigos = [];
// Paso 2: Función para agregar nombres a la lista
function agregarAmigo() {
    // Obtener el valor ingresado por el usuario
    let nombreInput = document.getElementById("nombreAmigo").value.trim();

    // Validar que el campo no esté vacío
    if (nombreInput === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    // Agregar el nombre al array
    amigos.push(nombreInput);

    // Limpiar el campo de entrada
    document.getElementById("nombreAmigo").value = "";

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


