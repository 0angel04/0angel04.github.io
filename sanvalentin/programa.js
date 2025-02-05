document.addEventListener("DOMContentLoaded", function() {
  let heartsContainer = document.getElementById("heartsContainer");
  let questionContainer = document.getElementById("questionContainer");
  let noBtn = document.getElementById("noBtn");

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  let scaleFactor = 15; // Escalar el corazón a la pantalla

  // Dibujar corazones en el contorno del corazón usando ecuaciones paramétricas
  for (let t = 0; t < Math.PI * 2; t += 0.1) {
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    let heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = `${centerX + x * scaleFactor}px`;
    heart.style.top = `${centerY - y * scaleFactor}px`;

    heartsContainer.appendChild(heart);
  }

  // Hacer que los corazones aparezcan poco a poco
  setTimeout(() => {
    document.querySelectorAll(".heart").forEach((heart, index) => {
      setTimeout(() => {
        heart.style.opacity = "1";
      }, index * 50);
    });
  }, 500);

  // Mostrar la pregunta después de la animación de corazones
  setTimeout(() => {
    questionContainer.style.display = "block";
    questionContainer.style.left = `${centerX}px`;
    questionContainer.style.top = `${centerY}px`;
  }, 3000);

  // Botón "Sí" redirige
  document.getElementById("yesBtn").addEventListener("click", () => {
    window.location.href = "otroHTML.html";
  });

  // Botón "No" se mueve aleatoriamente
  noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    let y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
});