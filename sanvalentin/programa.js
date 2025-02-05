document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Generar corazones formando un corazón
    createHearts();
    // Mostrar la pregunta después de un pequeño retraso
    setTimeout(() => {
      document.getElementById('questionContainer').style.display = 'block';
    }, 1000);
  }, 500);
});

function createHearts() {
  const heartContainer = document.getElementById('heartsContainer');
  const heartCount = 300;  // Número de corazones (ajustable)

  // Coordenadas para formar el contorno de un corazón
  const heartShape = [
    { x: 50, y: 50 }, { x: 48, y: 52 }, { x: 52, y: 52 }, // Forma de corazón
    { x: 51, y: 54 }, { x: 49, y: 55 },
    { x: 47, y: 57 }, { x: 53, y: 57 }, { x: 50, y: 58 }
  ];

  heartShape.forEach((coord, index) => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${coord.x}vw`;
    heart.style.top = `${coord.y}vh`;

    heartContainer.appendChild(heart);

    // Animar el corazón para que aparezca gradualmente
    setTimeout(() => {
      heart.style.opacity = 1;
    }, index * 150);  // Diferente tiempo de aparición
  });
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
