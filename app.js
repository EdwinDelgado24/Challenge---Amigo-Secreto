let amigos = [];
let amigosDisponibles = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado. Intenta con otro.");
        return;
    }
    
    amigos.push(nombre);
    amigosDisponibles.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigosDisponibles.length === 0) {
        alert("Ya no hay más amigos para sortear. Puedes iniciar un nuevo sorteo.");
        return;
    }
    
    // Ocultar la lista de amigos para que no se vean los pendientes ni los sorteados
    document.getElementById("listaAmigos").style.display = "none";
    
    const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    const amigoSorteado = amigosDisponibles.splice(indiceAleatorio, 1)[0];
    
    alert(`🎉 Amigo secreto: ${amigoSorteado}`); // Mostrar el resultado solo en un alert
    
    if (amigosDisponibles.length === 0) {
        const reiniciarBtn = document.createElement("button");
        reiniciarBtn.textContent = "Iniciar nuevo sorteo";
        reiniciarBtn.classList.add("button-draw");
        reiniciarBtn.onclick = reiniciarSorteo;
        document.getElementById("resultado").appendChild(reiniciarBtn);
    }
}

function reiniciarSorteo() {
    amigos = [];
    amigosDisponibles = [];
    document.getElementById("listaAmigos").style.display = "block";
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
