document.addEventListener("DOMContentLoaded", function() {
  let heartsContainer = document.getElementById("heartsContainer");
  let questionContainer = document.getElementById("questionContainer");
  let noBtn = document.getElementById("noBtn");

  // Crear corazones pequeños dispersos
  for (let i = 0; i < 100; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    heartsContainer.appendChild(heart);
  }

  // Después de 3 segundos, mostrar la pregunta
  setTimeout(() => {
    heartsContainer.style.display = "none";
    questionContainer.style.display = "block";
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