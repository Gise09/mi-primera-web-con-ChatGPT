// Ejemplo de JavaScript para la landing page de adopción de mascotas

// Función para hacer scroll suave al hacer clic en los enlaces del menú de navegación
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Función de easing para suavizar el desplazamiento
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Event listeners para el menú de navegación
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        smoothScroll(target, 1000);
      });
    });
  });
  
  // Event listener para el formulario de contacto
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contacto form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.querySelector('input[name="nombre"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const mensaje = document.querySelector('textarea[name="mensaje"]').value;
  
        // Aquí puedes agregar tu lógica para enviar el formulario de contacto
        // por ejemplo, utilizando AJAX o enviando una solicitud a un servidor
  
        // Luego de enviar el formulario, puedes mostrar un mensaje de éxito o realizar alguna otra acción
        contactForm.reset();
        alert("¡Mensaje enviado con éxito!");
      });
    }
  });
  