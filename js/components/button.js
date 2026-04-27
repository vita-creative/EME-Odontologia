/**
 * EME ODONTOLOGIA - BUTTON COMPONENT
 * Componente de botão otimizado
 */

class Button {
    constructor(el) {
        this.el = el;
        this.action = el.getAttribute('data-action');
        this.el.addEventListener('click', (e) => this.handle(e));
    }

    handle(e) {
        e.preventDefault();
        switch (this.action) {
            case 'whatsapp': this.whatsapp(); break;
            case 'call': this.call(); break;
            case 'scroll': this.scroll(); break;
            case 'external': this.external(); break;
        }
    }

    whatsapp() {
        const url = CONFIG.getWhatsappUrl();
        Utils.openNewTab(url);
        this.track('whatsapp_click');
    }

    call() {
        window.location.href = CONFIG.getPhoneUrl();
        this.track('phone_click');
    }

    scroll() {
        const target = this.el.getAttribute('data-target');
        if (target) {
            Utils.smoothScroll(target, 80);
            this.track('scroll_click', target);
        }
    }

    external() {
        const url = this.el.getAttribute('data-url');
        if (url) {
            Utils.openNewTab(url);
            this.track('external_click', url);
        }
    }

    track(event, data = null) {
        CONFIG.log(`Event: ${event}`, data);
    }

    static initAll() {
        Utils.selectAll('[data-action]').forEach(btn => new Button(btn));
    }
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Button.initAll());
} else {
    Button.initAll();
}
