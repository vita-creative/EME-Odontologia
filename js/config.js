/**
 * EME ODONTOLOGIA - CONFIG.JS
 * Configurações globais e constantes
 * Arquivo editável para personalização
 */

const CONFIG = {
    // Informações de Contato
    contact: {
        whatsapp: '+5511993941378',
        phone: '(11) 99394-1378',
        email: 'contato@eme-odontologia.com.br',
        address: 'Mooca, São Paulo - SP',
        hours: 'Seg-Sex: 9h às 18h'
    },

    // URLs
    urls: {
        website: 'https://eme-odontologia.com.br',
        whatsappMessage: 'Olá! Gostaria de agendar uma consulta com o Dr. Enzo.',
        googleMaps: 'https://maps.google.com/?q=Mooca,+São+Paulo'
    },

    // Mensagens Padrão
    messages: {
        whatsappCTA: 'Fale pelo WhatsApp',
        phoneCTA: 'Ligar agora',
        scheduleCTA: 'Agende sua avaliação',
        success: 'Mensagem enviada com sucesso!',
        error: 'Ocorreu um erro. Tente novamente.'
    },

    // Animações
    animations: {
        enabled: true,
        duration: 300,
        easing: 'ease-out'
    },

    // Seções
    sections: {
        hero: '#hero',
        services: '#services',
        about: '#about',
        testimonials: '#testimonials',
        contact: '#contact'
    },

    // Cores (CSS Variables)
    colors: {
        primary: '#4A1228',
        primaryDark: '#6B1A39',
        accent: '#C4973A',
        accentLight: '#D4A74A',
        bgLight: '#F9F3EC',
        bgMedium: '#F0E8DC',
        bgDark: '#1A0810',
        textDark: '#4A1228',
        textMedium: '#6B1A39',
        textLight: '#F9F3EC'
    },

    // Analytics (Opcional)
    analytics: {
        enabled: false,
        trackingId: 'UA-XXXXXXXXX-X'
    },

    // Redes Sociais (Opcional)
    social: {
        facebook: 'https://facebook.com/eme-odontologia',
        instagram: 'https://instagram.com/eme-odontologia',
        linkedin: 'https://linkedin.com/company/eme-odontologia',
        youtube: 'https://youtube.com/@eme-odontologia'
    },

    // Debug
    debug: false
};

// Função auxiliar para gerar URL WhatsApp
CONFIG.getWhatsappUrl = function(message = null) {
    const msg = message || this.urls.whatsappMessage;
    return `https://wa.me/${this.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
};

// Função auxiliar para gerar URL de chamada
CONFIG.getPhoneUrl = function() {
    return `tel:${this.contact.whatsapp}`;
};

// Função auxiliar para log em desenvolvimento
CONFIG.log = function(message, data = null) {
    if (this.debug) {
        console.log(`[EME] ${message}`, data || '');
    }
};

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
