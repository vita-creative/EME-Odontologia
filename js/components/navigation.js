/**
 * EME ODONTOLOGIA - NAVIGATION COMPONENT
 * Componente reutilizável para navegação
 */

class Navigation {
    constructor(navSelector = '#mainNav') {
        this.nav = Utils.select(navSelector);
        this.header = Utils.select('#header');
        this.links = this.nav ? Utils.selectAll(`${navSelector} a[href^="#"]`) : [];
        this.init();
    }

    init() {
        if (this.nav) {
            this.attachLinkListeners();
            this.attachScrollListener();
            CONFIG.log('Navegação inicializada');
        }
    }

    /**
     * Anexa listeners aos links de navegação
     */
    attachLinkListeners() {
        this.links.forEach(link => {
            Utils.on(link, 'click', (e) => this.handleLinkClick(e, link));
        });
    }

    /**
     * Manipula clique em link de navegação
     */
    handleLinkClick(event, link) {
        event.preventDefault();
        const target = link.getAttribute('href');
        const offset = this.header ? this.header.offsetHeight + 20 : 80;
        
        Utils.smoothScroll(target, offset);
        this.setActiveLink(link);
        this.trackNavigation(target);
    }

    /**
     * Define link ativo
     */
    setActiveLink(activeLink) {
        this.links.forEach(link => {
            Utils.removeClass(link, 'active');
        });
        Utils.addClass(activeLink, 'active');
    }

    /**
     * Listener para scroll - atualiza link ativo
     */
    attachScrollListener() {
        const scrollHandler = Utils.throttle(() => {
            this.updateActiveOnScroll();
        }, 100);

        Utils.on(window, 'scroll', scrollHandler);
    }

    /**
     * Atualiza link ativo baseado no scroll
     */
    updateActiveOnScroll() {
        let currentSection = null;

        this.links.forEach(link => {
            const target = link.getAttribute('href');
            const section = Utils.select(target);

            if (section) {
                const rect = section.getBoundingClientRect();
                const offset = this.header ? this.header.offsetHeight : 80;

                if (rect.top <= offset && rect.bottom >= offset) {
                    currentSection = link;
                }
            }
        });

        if (currentSection) {
            this.setActiveLink(currentSection);
        }
    }

    /**
     * Rastreia navegação
     */
    trackNavigation(target) {
        CONFIG.log('Navegação para:', target);
        // Integrar com analytics aqui
    }

    /**
     * Adiciona classe sticky ao header durante scroll
     */
    static initStickyHeader(headerSelector = '#header') {
        const header = Utils.select(headerSelector);
        if (!header) return;

        const scrollHandler = Utils.throttle(() => {
            if (window.scrollY > 50) {
                Utils.addClass(header, 'sticky-active');
            } else {
                Utils.removeClass(header, 'sticky-active');
            }
        }, 100);

        Utils.on(window, 'scroll', scrollHandler);
    }

    /**
     * Inicializa menu mobile (hamburger)
     */
    static initMobileMenu(toggleSelector = '.nav-toggle', navSelector = '#mainNav') {
        const toggle = Utils.select(toggleSelector);
        const nav = Utils.select(navSelector);

        if (toggle && nav) {
            Utils.on(toggle, 'click', () => {
                Utils.toggleClass(nav, 'mobile-open');
                Utils.toggleClass(toggle, 'active');
            });

            // Fecha menu ao clicar em link
            const links = Utils.selectAll(`${navSelector} a`);
            links.forEach(link => {
                Utils.on(link, 'click', () => {
                    Utils.removeClass(nav, 'mobile-open');
                    Utils.removeClass(toggle, 'active');
                });
            });
        }
    }
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Navigation('#mainNav');
        Navigation.initStickyHeader('#header');
        Navigation.initMobileMenu('.nav-toggle', '#mainNav');
    });
} else {
    new Navigation('#mainNav');
    Navigation.initStickyHeader('#header');
    Navigation.initMobileMenu('.nav-toggle', '#mainNav');
}

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navigation;
}
