document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');

    // Scroll suave para as seções
    const links = document.querySelectorAll('nav a[href^="#"], .btn-orcamento[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Efeito de scroll no header
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(50, 50, 50, 0.4)';
        } else {
            header.style.background = 'rgba(50, 50, 50, 0.4)';
        }

        lastScroll = currentScroll;
    });
});


// Adicione este script no final do body
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        // Fecha todos os outros itens
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Toggle no item clicado
        faqItem.classList.toggle('active');
    });
});



document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // evita ficar recalculando
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  // Reset de delay por grupo (section)
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionElements = section.querySelectorAll(".animate-on-scroll");

    sectionElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.12}s`;
      observer.observe(el);
    });
  });

  // Caso exista animate-on-scroll fora de section (ex: header)
  elements.forEach((el) => {
    if (!el.closest("section")) {
      el.style.transitionDelay = "0s";
      observer.observe(el);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const overlay = document.querySelector(".menu-overlay");
  const menuLinks = document.querySelectorAll(".nav-menu a");

  if (!toggle || !overlay) return;

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  overlay.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
});

