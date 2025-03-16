let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    if (amigosSorteados.length === amigos.length) {
        alert("Ya se han sorteado todos los amigos. Reiniciando la lista.");
        reiniciarSorteo();
        return;
    }
    
    document.getElementById("listaAmigos").style.display = "none";
    
    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));
    
    amigosSorteados.push(amigoSorteado);
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(nombre) {
    let resultado = document.getElementById("resultado");
    let li = document.createElement("li");
    li.textContent = `🎉 ${nombre} es el amigo secreto! 🎉`;
    resultado.appendChild(li);
}

function reiniciarSorteo() {
    amigosSorteados = [];
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block";
}
