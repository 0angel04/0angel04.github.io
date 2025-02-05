// Configuración inicial
document.addEventListener("DOMContentLoaded", function() {
  let heartsContainer = document.getElementById("heartsContainer");
  let questionContainer = document.getElementById("questionContainer");

  // Crear corazones pequeños
  for (let i = 0; i < 200; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.position = "absolute";
    heart.style.width = "10px";
    heart.style.height = "10px";
    heart.style.backgroundColor = "red";
    heart.style.borderRadius = "50%";
    heart.style.animation = `moveHeart ${Math.random() * 3 + 3}s ease-in-out infinite`;
    heartsContainer.appendChild(heart);

    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
  }

  // Animación de aparición de los corazones y la pregunta
  setTimeout(() => {
    questionContainer.style.visibility = "visible";
    heartsContainer.style.visibility = "hidden";
  }, 3000);

  // Función para el botón "Sí"
  document.getElementById("yesBtn").addEventListener("click", () => {
    window.location.href = "otroHTML.html"; // Cambia esto por la ruta de tu otro HTML
  });

  // Función para el botón "No"
  document.getElementById("noBtn").addEventListener("click", () => {
    let noBtn = document.getElementById("noBtn");
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 100 + "%";
    noBtn.style.top = Math.random() * 100 + "%";
  });
});
