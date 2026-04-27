/**
 * EME ODONTOLOGIA - BUTTON COMPONENT
 * Componente reutilizável para botões com ações
 */

class Button {
    constructor(element) {
        this.element = element;
        this.action = this.element.getAttribute('data-action');
        this.init();
    }

    init() {
        if (this.element) {
            Utils.on(this.element, 'click', (e) => this.handleClick(e));
        }
    }

    handleClick(event) {
        event.preventDefault();

        switch (this.action) {
            case 'whatsapp':
                this.openWhatsApp();
                break;
            case 'call':
                this.makeCall();
                break;
            case 'scroll':
                this.scrollToSection();
                break;
            case 'external':
                this.openExternal();
                break;
            default:
                CONFIG.log('Ação não reconhecida:', this.action);
        }
    }

    openWhatsApp() {
        const url = CONFIG.getWhatsappUrl();
        Utils.openNewTab(url);
        this.trackEvent('whatsapp_click');
    }

    makeCall() {
        const url = CONFIG.getPhoneUrl();
        window.location.href = url;
        this.trackEvent('phone_click');
    }

    scrollToSection() {
        const target = this.element.getAttribute('data-target');
        if (target) {
            Utils.smoothScroll(target, 80);
            this.trackEvent('scroll_click', target);
        }
    }

    openExternal() {
        const url = this.element.getAttribute('data-url');
        if (url) {
            Utils.openNewTab(url);
            this.trackEvent('external_click', url);
        }
    }

    trackEvent(eventName, eventData = null) {
        CONFIG.log(`Evento: ${eventName}`, eventData);
        // Aqui você pode integrar com Google Analytics ou outro serviço
    }

    /**
     * Ativa estado loading no botão
     */
    setLoading(isLoading = true) {
        if (isLoading) {
            Utils.addClass(this.element, 'btn--loading');
            this.element.disabled = true;
            this.originalText = this.element.textContent;
            this.element.textContent = 'Carregando...';
        } else {
            Utils.removeClass(this.element, 'btn--loading');
            this.element.disabled = false;
            this.element.textContent = this.originalText;
        }
    }

    /**
     * Ativa estado desabilitado
     */
    setDisabled(isDisabled = true) {
        this.element.disabled = isDisabled;
        if (isDisabled) {
            Utils.addClass(this.element, 'btn--disabled');
        } else {
            Utils.removeClass(this.element, 'btn--disabled');
        }
    }

    /**
     * Mostra mensagem de sucesso
     */
    showSuccess(message = 'Sucesso!') {
        const originalText = this.element.textContent;
        this.element.textContent = message;
        Utils.addClass(this.element, 'btn--success');
        
        setTimeout(() => {
            this.element.textContent = originalText;
            Utils.removeClass(this.element, 'btn--success');
        }, 2000);
    }

    /**
     * Mostra mensagem de erro
     */
    showError(message = 'Erro!') {
        const originalText = this.element.textContent;
        this.element.textContent = message;
        Utils.addClass(this.element, 'btn--error');
        
        setTimeout(() => {
            this.element.textContent = originalText;
            Utils.removeClass(this.element, 'btn--error');
        }, 2000);
    }

    /**
     * Adiciona animação de clique
     */
    addClickAnimation() {
        Utils.addClass(this.element, 'btn--clicked');
        setTimeout(() => {
            Utils.removeClass(this.element, 'btn--clicked');
        }, 300);
    }

    /**
     * Inicializa todos os botões da página
     */
    static initAll() {
        const buttons = Utils.selectAll('[data-action]');
        buttons.forEach(button => {
            new Button(button);
        });
        CONFIG.log(`${buttons.length} botões inicializados`);
    }
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        Button.initAll();
    });
} else {
    Button.initAll();
}

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Button;
}
