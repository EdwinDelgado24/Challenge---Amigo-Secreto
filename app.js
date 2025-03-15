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


