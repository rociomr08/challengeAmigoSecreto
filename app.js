// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");
    const listaNombres = document.getElementById("listaAmigos");
    const mensajeResultado = document.getElementById("resultado");
    let nombresAmigos = [];

    window.agregarNombre = function () {
        const nombreIngresado = inputNombre.value.trim();

        if (!nombreIngresado) {
            alert("Por favor, ingresa un nombre.");
            return;
        }

        if (nombresAmigos.includes(nombreIngresado)) {
            alert("Ese nombre ya está en la lista.");
            return;
        }

        nombresAmigos.push(nombreIngresado);
        console.log("Lista actualizada:", nombresAmigos);
        mostrarLista();
        inputNombre.value = ""; 
    };

    function mostrarLista() {
        listaNombres.innerHTML = "";

        for (let i = 0; i < nombresAmigos.length; i++) {
            const elementoLista = document.createElement("li");
            elementoLista.textContent = nombresAmigos[i];
            listaNombres.appendChild(elementoLista);
        }
    }

    window.elegirAmigoSecreto = function () {
        if (nombresAmigos.length === 0) {
            alert("Debes agregar al menos un nombre antes de realizar el sorteo.");
            return;
        }

        const posicionAleatoria = Math.floor(Math.random() * nombresAmigos.length);
        const amigoElegido = nombresAmigos[posicionAleatoria];
        console.log("Amigo secreto seleccionado:", amigoElegido);

        mensajeResultado.innerHTML = `<p>El Amigo Secreto es: <strong>${amigoElegido}</strong> 😊🎉</p>`;
    };
});