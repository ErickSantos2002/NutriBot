// Redireciona para a página do formulário
function redirecionarParaFormulario() {
    window.location.href = "formulario.html";
}

// Validação do formulário e feedback ao usuário
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("nutriForm");

    if (form) {
        form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
            alert("Formulário enviado com sucesso! Em breve entraremos em contato.");
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
        });
    }

    // Smooth Scrolling:
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target) {
            target.scrollIntoView({
            behavior: "smooth"
            });
        }
        });
    });
    
    // Sticky Navbar:
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        } else {
        navbar.classList.remove("scrolled");
        }
    });
    
    // Animações com IntersectionObserver
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
            });
        }, { threshold: 0.2 });
        
        // BENEFÍCIOS – Cards entram da lateral alternada
        document.querySelectorAll(".beneficio-card").forEach((card, index) => {
            card.classList.add("hidden");
            card.classList.add(index % 2 === 0 ? "slide-left" : "slide-right");
            observer.observe(card);
        });
        
        // ESTRATÉGIA – Lista item por item
        document.querySelectorAll(".etapas li").forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.150}s`;
            item.classList.add("hidden");
            observer.observe(item);
        });

        // DEPOIMENTOS – Cada cartão com fade-in ao entrar na viewport
        document.querySelectorAll(".depoimento").forEach((depoimento, index) => {
            depoimento.classList.add("hidden");
            depoimento.style.transitionDelay = `${index * 0.150}s`; // pequena variação entre eles
            observer.observe(depoimento);
        });

        const botoesFormulario = document.querySelectorAll(".redirecionar-formulario");
        botoesFormulario.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // impede o comportamento padrão do link
            window.location.href = "formulario.html";
        });
        });

        const text = "Alcance sua dieta ideal com nossa Nutri Bot";
        const typingElement = document.getElementById("hero-typing");
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 70);
            } else {
            typingElement.classList.remove("blinking-cursor");
            }
        }

        typingElement.classList.add("blinking-cursor");
        typeEffect();
});
