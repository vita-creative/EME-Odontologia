/**
 * EME ODONTOLOGIA - MAIN.JS
 * Arquivo principal de inicialização
 */

class App {
    constructor() {
        this.init();
    }

    init() {
        CONFIG.log('Aplicação inicializando...');
        
        // Inicializar componentes
        this.initComponents();
        
        // Inicializar funcionalidades
        this.initFeatures();
        
        // Rastrear eventos
        this.trackPageView();
        
        CONFIG.log('Aplicação inicializada com sucesso!');
    }

    /**
     * Inicializa componentes
     */
    initComponents() {
        // Botões já são inicializados automaticamente em button.js
        // Navegação já é inicializada automaticamente em navigation.js
        // Animações já são inicializadas automaticamente em animations.js
    }

    /**
     * Inicializa funcionalidades adicionais
     */
    initFeatures() {
        this.initSmoothScroll();
        this.initLazyLoading();
        this.initFormHandling();
        this.initAccessibility();
    }

    /**
     * Inicializa scroll suave para links internos
     */
    initSmoothScroll() {
        const internalLinks = Utils.selectAll('a[href^="#"]');
        internalLinks.forEach(link => {
            Utils.on(link, 'click', (e) => {
                const href = link.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    Utils.smoothScroll(href, 80);
                }
            });
        });
    }

    /**
     * Inicializa lazy loading de imagens
     */
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const images = Utils.selectAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute('data-src');
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    /**
     * Inicializa manipulação de formulários
     */
    initFormHandling() {
        const forms = Utils.selectAll('form');
        forms.forEach(form => {
            Utils.on(form, 'submit', (e) => this.handleFormSubmit(e, form));
        });
    }

    /**
     * Manipula envio de formulário
     */
    handleFormSubmit(event, form) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validar dados
        if (!this.validateFormData(data)) {
            CONFIG.log('Formulário inválido');
            return;
        }

        // Enviar dados
        this.submitForm(data);
    }

    /**
     * Valida dados do formulário
     */
    validateFormData(data) {
        // Adicionar validações específicas aqui
        return true;
    }

    /**
     * Envia formulário
     */
    submitForm(data) {
        CONFIG.log('Formulário enviado:', data);
        // Integrar com backend aqui
    }

    /**
     * Inicializa funcionalidades de acessibilidade
     */
    initAccessibility() {
        // Adicionar atributos ARIA
        this.addAriaLabels();
        
        // Gerenciar focus
        this.manageFocus();
    }

    /**
     * Adiciona labels ARIA
     */
    addAriaLabels() {
        const buttons = Utils.selectAll('button');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label')) {
                button.setAttribute('aria-label', button.textContent.trim());
            }
        });
    }

    /**
     * Gerencia focus para acessibilidade
     */
    manageFocus() {
        // Implementar gerenciamento de focus conforme necessário
    }

    /**
     * Rastreia visualização de página
     */
    trackPageView() {
        if (CONFIG.analytics.enabled) {
            CONFIG.log('Página visualizada:', window.location.pathname);
            // Integrar com Google Analytics ou outro serviço
        }
    }

    /**
     * Método estático para inicializar app
     */
    static start() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                new App();
            });
        } else {
            new App();
        }
    }
}

// Iniciar aplicação
App.start();

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
