document.addEventListener("DOMContentLoaded", function() {
  let heartsContainer = document.getElementById("heartsContainer");
  let questionContainer = document.getElementById("questionContainer");
  let noBtn = document.getElementById("noBtn");

  function createHeartShape() {
    heartsContainer.innerHTML = ""; // Limpiar corazones si se redimensiona la pantalla

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    
    // Escalar el corazón según el tamaño de la pantalla
    let scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 40; 

    let numHearts = 100; // Número de corazones en el contorno
    let tIncrement = (2 * Math.PI) / numHearts; // Espaciado uniforme

    for (let i = 0; i < numHearts; i++) {
      let t = i * tIncrement;
      let x = 16 * Math.pow(Math.sin(t), 3);
      let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

      let heart = document.createElement("div");
      heart.classList.add("heart");

      // Posicionar los corazones en el contorno
      heart.style.left = `${centerX + x * scaleFactor}px`;
      heart.style.top = `${centerY - y * scaleFactor}px`;

      // Agregar corazones al contenedor
      heartsContainer.appendChild(heart);
    }

    // Animar la aparición de los corazones
    setTimeout(() => {
      document.querySelectorAll(".heart").forEach((heart, index) => {
        setTimeout(() => {
          heart.style.opacity = "1";
        }, index * 30);
      });
    }, 500);

    // Mostrar la pregunta en el centro del corazón hueco
    setTimeout(() => {
      questionContainer.style.display = "block";
      questionContainer.style.left = `${centerX}px`;
      questionContainer.style.top = `${centerY}px`;
    }, 2500);
  }

  // Crear la forma del corazón al cargar la página
  createHeartShape();

  // Ajustar el tamaño del corazón si la pantalla cambia de tamaño
  window.addEventListener("resize", createHeartShape);

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