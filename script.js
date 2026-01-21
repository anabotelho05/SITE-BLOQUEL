// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação dos elementos ao aparecer na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animações quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Animar cards de marcas
    const marcaCards = document.querySelectorAll('.marca-card');
    marcaCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animar cards de ofertas com efeito especial
    const ofertaCards = document.querySelectorAll('.oferta-card');
    ofertaCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Animar vendedor card
    const vendedorCard = document.querySelector('.vendedor-card');
    if (vendedorCard) {
        vendedorCard.style.opacity = '0';
        vendedorCard.style.transform = 'translateY(30px)';
        vendedorCard.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
        observer.observe(vendedorCard);
    }

    // Efeito especial no título das ofertas
    const ofertasTitle = document.querySelector('.ofertas h2');
    if (ofertasTitle) {
        ofertasTitle.style.opacity = '0';
        ofertasTitle.style.transform = 'translateY(-30px)';
        ofertasTitle.style.transition = 'opacity 1s ease 0.2s, transform 1s ease 0.2s';
        observer.observe(ofertasTitle);
    }
});

// Efeito nos botões de oferta
document.querySelectorAll('.btn-oferta').forEach(btn => {
    btn.addEventListener('click', function() {
        // Redirecionar para WhatsApp com mensagem personalizada
        window.open('https://wa.me/5535997703350?text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20produtos%20da%20Bloquel!', '_blank');
    });
});

// Efeito de hover nos cards de oferta
document.querySelectorAll('.oferta-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Efeito de destaque na seção de ofertas quando ela aparecer
const ofertasSection = document.querySelector('.ofertas');
if (ofertasSection) {
    const ofertasObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ofertas-visible');
            }
        });
    }, { threshold: 0.3 });
    
    ofertasObserver.observe(ofertasSection);
}

// Adicionar classe CSS para efeito especial das ofertas
const style = document.createElement('style');
style.textContent = `
    .ofertas-visible {
        animation: ofertasPulse 2s ease-in-out;
    }
    
    @keyframes ofertasPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.01); }
    }
`;
document.head.appendChild(style);