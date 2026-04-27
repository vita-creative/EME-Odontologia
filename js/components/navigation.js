/**
 * EME ODONTOLOGIA - NAVIGATION COMPONENT
 * Navegação otimizada
 */

class Navigation {
    constructor() {
        this.nav = Utils.select('#mainNav');
        this.header = Utils.select('.header');
        this.links = Utils.selectAll('.nav-link');
        this.init();
    }

    init() {
        this.attachListeners();
        this.attachScrollListener();
    }

    attachListeners() {
        this.links.forEach(link => {
            Utils.on(link, 'click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                const offset = this.header?.offsetHeight || 80;
                Utils.smoothScroll(target, offset);
                this.setActive(link);
            });
        });
    }

    attachScrollListener() {
        const handler = Utils.throttle(() => this.updateActive(), 100);
        Utils.on(window, 'scroll', handler);
    }

    setActive(link) {
        this.links.forEach(l => Utils.removeClass(l, 'active'));
        Utils.addClass(link, 'active');
    }

    updateActive() {
        let current = null;
        this.links.forEach(link => {
            const target = Utils.select(link.getAttribute('href'));
            if (target) {
                const rect = target.getBoundingClientRect();
                const offset = this.header?.offsetHeight || 80;
                if (rect.top <= offset && rect.bottom >= offset) {
                    current = link;
                }
            }
        });
        if (current) this.setActive(current);
    }

    static initStickyHeader() {
        const header = Utils.select('.header');
        if (!header) return;
        const handler = Utils.throttle(() => {
            if (window.scrollY > 50) {
                Utils.addClass(header, 'sticky-active');
            } else {
                Utils.removeClass(header, 'sticky-active');
            }
        }, 100);
        Utils.on(window, 'scroll', handler);
    }
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Navigation();
        Navigation.initStickyHeader();
    });
} else {
    new Navigation();
    Navigation.initStickyHeader();
}
