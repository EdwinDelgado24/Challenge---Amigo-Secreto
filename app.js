let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este amigo ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    input.value = "";
    resultado.innerHTML = "";
}

function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    if (amigosSorteados.length === amigos.length) {
        alert("Todos los amigos han sido sorteados. Reiniciando sorteo.");
        reiniciarSorteo();
        return;
    }
    
    listaAmigos.style.display = "none";
    
    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));
    
    amigosSorteados.push(amigoSorteado);
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
    
    setTimeout(() => {
        resultado.innerHTML = "";
    }, 3000); // Ocultar resultado después de 3 segundos
}

function reiniciarSorteo() {
    amigosSorteados = [];
    document.getElementById("listaAmigos").style.display = "block";
    document.getElementById("resultado").innerHTML = "";
}
