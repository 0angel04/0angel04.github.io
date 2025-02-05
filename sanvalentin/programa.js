document.addEventListener("DOMContentLoaded", function() {
  let heartsContainer = document.getElementById("heartsContainer");
  let questionContainer = document.getElementById("questionContainer");
  let heartShape = document.getElementById("heartShape");
  
  // Crear los corazones pequeños
  for (let i = 0; i < 200; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
    heartsContainer.appendChild(heart);
    
    // Hacer que los corazones pequeños aparezcan uno por uno
    setTimeout(() => {
      heart.style.opacity = "1";
    }, i * 30); // Espaciado de aparición
  }

  // Después de unos segundos, hacer que los corazones se agrupen y formen uno grande
  setTimeout(() => {
    // Hacer que los corazones pequeños desaparezcan y el corazón grande se forme
    heartsContainer.style.visibility = "hidden";
    heartShape.style.visibility = "visible";
    
    // Mostrar la pregunta y los botones
    questionContainer.style.visibility = "visible";
  }, 3000); // Tiempo para los corazones pequeños

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