const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Mostrar el primer slide al cargar
showSlide(currentSlide);
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // Cambia cada 5 segundos

const carousel = document.querySelector('.carousel');
let index = 0;

setInterval(() => {
  index++;
  if (index >= document.querySelectorAll('.slide').length) {
    index = 0;
  }
  carousel.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

//imagenes contraidas y expandidas
window.addEventListener('scroll', function() {
  var principal = document.getElementById('principal');
  if (window.scrollY > 0) {
      principal.style.height = '50vh';
  } else {
      principal.style.height = '100vh';
  }
});

//suscribirse
/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/meooyzal",
  title: "How can we help?",
  fields: [
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});


