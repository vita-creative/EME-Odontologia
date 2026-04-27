/**
 * EME ODONTOLOGIA - MAIN.JS
 * Inicialização da aplicação
 */

class App {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimations();
        this.initLazyLoading();
        this.trackPageView();
    }

    initScrollAnimations() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Utils.addClass(entry.target, 'animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        Utils.selectAll('[data-animate]').forEach(el => observer.observe(el));
    }

    initLazyLoading() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        Utils.selectAll('img[data-src]').forEach(img => observer.observe(img));
    }

    trackPageView() {
        CONFIG.log('Page viewed:', window.location.pathname);
    }

    static start() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => new App());
        } else {
            new App();
        }
    }
}

// Iniciar app
App.start();
