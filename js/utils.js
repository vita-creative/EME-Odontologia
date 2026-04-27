/**
 * EME ODONTOLOGIA - UTILS.JS
 * Funções utilitárias reutilizáveis
 */

const Utils = {
    /**
     * Seleciona elemento(s) do DOM
     */
    select: function(selector) {
        return document.querySelector(selector);
    },

    selectAll: function(selector) {
        return document.querySelectorAll(selector);
    },

    /**
     * Adiciona classe a elemento
     */
    addClass: function(element, className) {
        if (element) {
            element.classList.add(className);
        }
    },

    /**
     * Remove classe de elemento
     */
    removeClass: function(element, className) {
        if (element) {
            element.classList.remove(className);
        }
    },

    /**
     * Alterna classe em elemento
     */
    toggleClass: function(element, className) {
        if (element) {
            element.classList.toggle(className);
        }
    },

    /**
     * Verifica se elemento tem classe
     */
    hasClass: function(element, className) {
        if (element) {
            return element.classList.contains(className);
        }
        return false;
    },

    /**
     * Define atributo em elemento
     */
    setAttribute: function(element, attribute, value) {
        if (element) {
            element.setAttribute(attribute, value);
        }
    },

    /**
     * Obtém atributo de elemento
     */
    getAttribute: function(element, attribute) {
        if (element) {
            return element.getAttribute(attribute);
        }
        return null;
    },

    /**
     * Define conteúdo HTML
     */
    setHTML: function(element, html) {
        if (element) {
            element.innerHTML = html;
        }
    },

    /**
     * Define conteúdo texto
     */
    setText: function(element, text) {
        if (element) {
            element.textContent = text;
        }
    },

    /**
     * Adiciona evento a elemento
     */
    on: function(element, event, callback) {
        if (element) {
            element.addEventListener(event, callback);
        }
    },

    /**
     * Remove evento de elemento
     */
    off: function(element, event, callback) {
        if (element) {
            element.removeEventListener(event, callback);
        }
    },

    /**
     * Adiciona evento a múltiplos elementos
     */
    onAll: function(selector, event, callback) {
        const elements = this.selectAll(selector);
        elements.forEach(element => {
            this.on(element, event, callback);
        });
    },

    /**
     * Scroll suave para elemento
     */
    smoothScroll: function(selector, offset = 0) {
        const element = this.select(selector);
        if (element) {
            const top = element.offsetTop - offset;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
    },

    /**
     * Verifica se elemento está visível na viewport
     */
    isInViewport: function(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    /**
     * Debounce para funções
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle para funções
     */
    throttle: function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Delay assíncrono
     */
    delay: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    /**
     * Fetch com tratamento de erro
     */
    fetch: async function(url, options = {}) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            CONFIG.log('Erro ao fazer fetch:', error);
            throw error;
        }
    },

    /**
     * Armazena dados no localStorage
     */
    setStorage: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            CONFIG.log('Erro ao salvar no localStorage:', error);
        }
    },

    /**
     * Recupera dados do localStorage
     */
    getStorage: function(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            CONFIG.log('Erro ao recuperar do localStorage:', error);
            return null;
        }
    },

    /**
     * Remove dados do localStorage
     */
    removeStorage: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            CONFIG.log('Erro ao remover do localStorage:', error);
        }
    },

    /**
     * Cria elemento DOM
     */
    createElement: function(tag, className = '', attributes = {}) {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
        return element;
    },

    /**
     * Clona elemento
     */
    cloneElement: function(element, deep = true) {
        return element.cloneNode(deep);
    },

    /**
     * Remove elemento
     */
    removeElement: function(element) {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    },

    /**
     * Obtém posição do elemento
     */
    getPosition: function(element) {
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height
        };
    },

    /**
     * Formata número como moeda
     */
    formatCurrency: function(value, currency = 'BRL') {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: currency
        }).format(value);
    },

    /**
     * Formata data
     */
    formatDate: function(date, format = 'pt-BR') {
        return new Intl.DateTimeFormat(format).format(new Date(date));
    },

    /**
     * Valida email
     */
    validateEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    /**
     * Valida telefone
     */
    validatePhone: function(phone) {
        const regex = /^[\d\s\-\(\)]+$/;
        return regex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    },

    /**
     * Copia texto para clipboard
     */
    copyToClipboard: async function(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            CONFIG.log('Erro ao copiar para clipboard:', error);
            return false;
        }
    },

    /**
     * Abre URL em nova aba
     */
    openNewTab: function(url) {
        window.open(url, '_blank');
    },

    /**
     * Redireciona para URL
     */
    redirect: function(url) {
        window.location.href = url;
    },

    /**
     * Obtém parâmetro da URL
     */
    getUrlParam: function(param) {
        const params = new URLSearchParams(window.location.search);
        return params.get(param);
    },

    /**
     * Verifica se dispositivo é mobile
     */
    isMobile: function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    /**
     * Obtém altura da viewport
     */
    getViewportHeight: function() {
        return window.innerHeight || document.documentElement.clientHeight;
    },

    /**
     * Obtém largura da viewport
     */
    getViewportWidth: function() {
        return window.innerWidth || document.documentElement.clientWidth;
    }
};

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
