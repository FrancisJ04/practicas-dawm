// ========================================
// CONFIGURACIÓN INICIAL
// ========================================

console.log('🚀 Full Stack Development Website Cargado!');
console.log('💡 Versión: 1.0.0');

// ========================================
// CAMBIO DE TEMA (Light/Dark Mode)
// ========================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar si hay un tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light-theme') {
    body.classList.add('light-theme');
    updateThemeButton();
}

// Event listener para el botón de tema
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        // Guardar preferencia
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light-theme');
        } else {
            localStorage.removeItem('theme');
        }
        
        updateThemeButton();
        
        // Animación del botón
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

function updateThemeButton() {
    if (themeToggle) {
        if (body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '☀️ Modo Oscuro';
        } else {
            themeToggle.innerHTML = '🌙 Modo Claro';
        }
    }
}

// ========================================
// NAVEGACIÓN SUAVE
// ========================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll suave para todos los enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.animation = 'fadeIn 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.skill-card, .stack-layer, .portfolio-item').forEach(el => {
    observer.observe(el);
});

// ========================================
// EFECTO PARALLAX EN HERO
// ========================================

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const codeBlock = document.querySelector('.code-block');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            
            if (codeBlock && scrolled < window.innerHeight) {
                codeBlock.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
            
            ticking = false;
        });
        ticking = true;
    }
});

// ========================================
// ANIMACIÓN DE CÓDIGO TYPING
// ========================================

const codeLines = document.querySelectorAll('.code-line');
if (codeLines.length > 0) {
    let delay = 0;
    
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.transition = 'opacity 0.5s ease';
            line.style.opacity = '1';
        }, delay);
        delay += 300;
    });
}

// ========================================
// FORMULARIO DE CONTACTO
// ========================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validación simple
        if (!name || !email || !message) {
            showFormMessage('Por favor completa todos los campos', 'error');
            return;
        }
        
        // Simular envío (aquí conectarías con un backend real)
        console.log('Formulario enviado:', { name, email, message });
        
        // Mostrar mensaje de éxito
        showFormMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
        
        // Limpiar formulario
        contactForm.reset();
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Ocultar después de 5 segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ========================================
// EFECTOS EN BOTONES
// ========================================

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Efecto de ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Agregar estilos CSS para el efecto ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// NAVBAR TRANSPARENTE AL HACER SCROLL
// ========================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// CONTADOR ANIMADO (para estadísticas)
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// DETECCIÓN DE DISPOSITIVO MÓVIL
// ========================================

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    console.log('📱 Dispositivo móvil detectado');
    document.body.classList.add('mobile-device');
}

// ========================================
// PRELOADER (opcional)
// ========================================

window.addEventListener('load', () => {
    console.log('✅ Página completamente cargada');
    document.body.classList.add('loaded');
});

// ========================================
// MANEJO DE ERRORES GLOBAL
// ========================================

window.addEventListener('error', (e) => {
    console.error('❌ Error detectado:', e.message);
});

// ========================================
// COPIAR AL PORTAPAPELES (útil para código)
// ========================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('✅ Copiado al portapapeles');
    }).catch(err => {
        console.error('❌ Error al copiar:', err);
    });
}

// ========================================
// LOGGER DE DESARROLLO
// ========================================

console.log('%c🚀 FullStack Development Website', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c💻 Desarrollado con HTML, CSS y JavaScript', 'color: #10b981; font-size: 14px;');
console.log('%c📧 Para más información, visita la sección de contacto', 'color: #8b5cf6; font-size: 12px;');