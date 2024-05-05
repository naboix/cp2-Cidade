const colors = ["#6495ed", "#40e0d0", "#98fb98"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    // Obter a cor atual do array colors usando o índice currentColorIndex
    const currentColor = colors[currentColorIndex];
    // Atualizar o estilo de fundo do elemento body com a cor atual
    document.body.style.backgroundColor = currentColor;
    // Incrementar o índice currentColorIndex para selecionar a próxima cor na lista colors
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Chamar a função changeBackgroundColor para iniciar a mudança de cor de fundo
changeBackgroundColor();

// Definir um intervalo de tempo para chamar a função changeBackgroundColor a cada 5 seg
setInterval(changeBackgroundColor, 5000);



//FUNCAO ALERTA QUANDO ABRIR
function alertaBemvindo() {
    alert("Seja bem-vindo!");
}

// toda vez que carregar vai aparecer
window.onload = alertaBemvindo;


let carrossel = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    carrossel++;
    if (carrossel > slides.length) {
        carrossel = 1;
    }
    slides[carrossel - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)
}