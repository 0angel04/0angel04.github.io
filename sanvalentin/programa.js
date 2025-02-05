document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Generar corazones
    createHearts();
    // Mostrar la pregunta después de un breve retraso
    setTimeout(() => {
      document.getElementById('questionContainer').style.display = 'block';
    }, 1000);
  }, 500);
});

function createHearts() {
  const heartContainer = document.getElementById('heartsContainer');
  const heartCount = 200;  // Número de corazones

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = `${Math.random() * 100}vh`;   // Aleatorización en el eje Y
    heart.style.left = `${Math.random() * 100}vw`;  // Aleatorización en el eje X

    heartContainer.appendChild(heart);

    // Animar el corazón para que aparezca gradualmente
    setTimeout(() => {
      heart.style.opacity = 1;
    }, Math.random() * 2000);  // Diferente tiempo de aparición
  }
}

function yesClick() {
  window.location.href = 'aceptar.html';  // Redirigir al sí
}

function noClick() {
  // Mover el botón de "No" a una posición aleatoria
  const noButton = document.getElementById('noBtn');
  noButton.style.left = `${Math.random() * 100}vw`;
  noButton.style.top = `${Math.random() * 100}vh`;
}
