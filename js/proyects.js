    

    function scrollToContact() {
    const contactoElement = document.getElementById('contacto');
    contactoElement.scrollIntoView({ behavior: 'smooth' });
    }


    function goBack() {
      window.history.back();
    }

    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }


     // Abre el modal
function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

// Cierra el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Prevenir cierre del modal al hacer clic en la imagen
document.getElementById('img01').addEventListener('click', function(event) {
    event.stopPropagation();
    var img = event.target;
    var rect = img.getBoundingClientRect();
    var x = event.clientX - rect.left; // Posición X del clic
    var y = event.clientY - rect.top;  // Posición Y del clic
    if (!img.classList.contains('zoomed')) {
        img.style.transformOrigin = `${x}px ${y}px`; // Ajusta el origen del zoom
    }
    img.classList.toggle('zoomed'); // Activa o desactiva el zoom
});
