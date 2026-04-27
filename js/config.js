/**
 * EME ODONTOLOGIA - CONFIG.JS
 * Configurações globais - Editável
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

    // Mensagens
    messages: {
        whatsappCTA: 'Fale pelo WhatsApp',
        phoneCTA: 'Ligar agora',
        scheduleCTA: 'Agende sua avaliação',
        success: 'Mensagem enviada com sucesso!',
        error: 'Ocorreu um erro. Tente novamente.'
    },

    // Debug
    debug: false,

    // Função auxiliar: gerar URL WhatsApp
    getWhatsappUrl: function(message = null) {
        const msg = message || this.urls.whatsappMessage;
        return `https://wa.me/${this.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
    },

    // Função auxiliar: gerar URL de chamada
    getPhoneUrl: function() {
        return `tel:${this.contact.whatsapp}`;
    },

    // Função auxiliar: log
    log: function(message, data = null) {
        if (this.debug) {
            console.log(`[EME] ${message}`, data || '');
        }
    }
};
