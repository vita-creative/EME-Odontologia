/**
 * EME ODONTOLOGIA - ANIMATIONS.JS
 * Gerenciador de animações e efeitos visuais
 */

class Animations {
    constructor() {
        this.elementsToAnimate = [];
        this.init();
    }

    init() {
        this.collectElements();
        this.attachScrollListener();
        CONFIG.log('Sistema de animações inicializado');
    }

    /**
     * Coleta elementos com atributo data-animate
     */
    collectElements() {
        const elements = Utils.selectAll('[data-animate]');
        elements.forEach(element => {
            this.elementsToAnimate.push({
                element: element,
                animation: element.getAttribute('data-animate'),
                delay: element.getAttribute('data-delay') || 0,
                animated: false
            });
        });
    }

    /**
     * Listener para scroll - anima elementos visíveis
     */
    attachScrollListener() {
        const scrollHandler = Utils.throttle(() => {
            this.checkVisibleElements();
        }, 100);

        Utils.on(window, 'scroll', scrollHandler);
        // Verifica elementos na primeira carga
        this.checkVisibleElements();
    }

    /**
     * Verifica e anima elementos visíveis
     */
    checkVisibleElements() {
        this.elementsToAnimate.forEach(item => {
            if (!item.animated && Utils.isInViewport(item.element)) {
                this.animateElement(item);
            }
        });
    }

    /**
     * Anima um elemento específico
     */
    animateElement(item) {
        const { element, animation, delay } = item;

        setTimeout(() => {
            Utils.addClass(element, `animate-${animation}`);
            item.animated = true;
            CONFIG.log(`Elemento animado: ${animation}`);
        }, parseInt(delay));
    }

    /**
     * Anima elemento manualmente
     */
    static animate(selector, animation, delay = 0) {
        const element = Utils.select(selector);
        if (element) {
            setTimeout(() => {
                Utils.addClass(element, `animate-${animation}`);
            }, delay);
        }
    }

    /**
     * Anima múltiplos elementos
     */
    static animateAll(selector, animation, staggerDelay = 100) {
        const elements = Utils.selectAll(selector);
        elements.forEach((element, index) => {
            setTimeout(() => {
                Utils.addClass(element, `animate-${animation}`);
            }, staggerDelay * index);
        });
    }

    /**
     * Remove animação
     */
    static removeAnimation(selector, animation) {
        const element = Utils.select(selector);
        if (element) {
            Utils.removeClass(element, `animate-${animation}`);
        }
    }

    /**
     * Efeito parallax
     */
    static initParallax(selector, speed = 0.5) {
        const elements = Utils.selectAll(selector);
        
        const parallaxHandler = Utils.throttle(() => {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const offset = rect.top * speed;
                element.style.transform = `translateY(${offset}px)`;
            });
        }, 30);

        Utils.on(window, 'scroll', parallaxHandler);
    }

    /**
     * Efeito hover com movimento
     */
    static initHoverEffect(selector) {
        const elements = Utils.selectAll(selector);

        elements.forEach(element => {
            Utils.on(element, 'mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });

            Utils.on(element, 'mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    /**
     * Efeito de digitação (typewriter)
     */
    static typeWriter(selector, text, speed = 50) {
        const element = Utils.select(selector);
        if (!element) return;

        element.textContent = '';
        let index = 0;

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        };

        type();
    }

    /**
     * Efeito de contagem (counter)
     */
    static counter(selector, target, duration = 2000) {
        const element = Utils.select(selector);
        if (!element) return;

        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const count = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(count);
            } else {
                element.textContent = target;
            }
        };

        count();
    }

    /**
     * Efeito de fade em scroll
     */
    static initScrollFade(selector) {
        const elements = Utils.selectAll(selector);

        const fadeHandler = Utils.throttle(() => {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const viewportHeight = Utils.getViewportHeight();
                const elementTop = rect.top;
                const elementHeight = rect.height;

                const progress = 1 - (elementTop / (viewportHeight + elementHeight));
                const opacity = Math.max(0, Math.min(1, progress));

                element.style.opacity = opacity;
            });
        }, 30);

        Utils.on(window, 'scroll', fadeHandler);
    }

    /**
     * Efeito de slide em scroll
     */
    static initScrollSlide(selector, direction = 'left') {
        const elements = Utils.selectAll(selector);

        const slideHandler = Utils.throttle(() => {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const viewportHeight = Utils.getViewportHeight();
                const elementTop = rect.top;

                const progress = 1 - (elementTop / viewportHeight);
                const translateValue = direction === 'left' ? 
                    (1 - progress) * 100 : 
                    (progress - 1) * 100;

                element.style.transform = `translateX(${translateValue}px)`;
                element.style.opacity = Math.max(0, Math.min(1, progress));
            });
        }, 30);

        Utils.on(window, 'scroll', slideHandler);
    }
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Animations();
    });
} else {
    new Animations();
}

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Animations;
}
