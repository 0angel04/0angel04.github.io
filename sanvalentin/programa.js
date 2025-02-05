document.addEventListener("DOMContentLoaded", function() {
  let heartsContainer = document.getElementById("heartsContainer");
  let questionContainer = document.getElementById("questionContainer");
  let noBtn = document.getElementById("noBtn");

  // Función para crear el contorno del corazón con los pequeños corazones
  function createHeartShape() {
    heartsContainer.innerHTML = ""; // Limpiar corazones si se redimensiona la pantalla

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    
    // Factor de escala ajustado dinámicamente
    let scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 30;

    let numHearts = 120; // Número de corazones pequeños
    let tIncrement = (2 * Math.PI) / numHearts; 

    for (let i = 0; i < numHearts; i++) {
      let t = i * tIncrement;
      let x = 16 * Math.pow(Math.sin(t), 3);
      let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

      let heart = document.createElement("div");
      heart.classList.add("heart");

      // Posicionar los corazones en el contorno
      heart.style.left = `${centerX + x * scaleFactor}px`;
      heart.style.top = `${centerY - y * scaleFactor}px`;

      heartsContainer.appendChild(heart);
    }

    // Animar la aparición de los corazones pequeños
    setTimeout(() => {
      document.querySelectorAll(".heart").forEach((heart, index) => {
        setTimeout(() => {
          heart.style.opacity = "1";
        }, index * 20); // Aparición gradual
      });
    }, 500);

    // Mostrar la pregunta en el centro del corazón hueco
    setTimeout(() => {
      questionContainer.style.display = "block"; // Mostrar la pregunta después de que aparezcan los corazones
    }, 2500);
  }

  // Crear la forma del corazón al cargar la página
  createHeartShape();

  // Ajustar la forma del corazón si la pantalla cambia de tamaño
  window.addEventListener("resize", createHeartShape);

  // Evento para el botón "Sí" que redirige a otro HTML
  document.getElementById("yesBtn").addEventListener("click", () => {
    window.location.href = "otroHTML.html"; // Redirige a otro archivo HTML
  });

  // Evento para el botón "No" que lo mueve aleatoriamente por la pantalla
  noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    let y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
});