/**
 * EME ODONTOLOGIA - UTILS.JS
 * Funções utilitárias otimizadas
 */

const Utils = {
    // DOM Selection
    select: (sel) => document.querySelector(sel),
    selectAll: (sel) => document.querySelectorAll(sel),

    // Classes
    addClass: (el, cls) => el?.classList.add(cls),
    removeClass: (el, cls) => el?.classList.remove(cls),
    toggleClass: (el, cls) => el?.classList.toggle(cls),
    hasClass: (el, cls) => el?.classList.contains(cls),

    // Attributes
    attr: (el, attr, val) => val ? el?.setAttribute(attr, val) : el?.getAttribute(attr),

    // Content
    html: (el, html) => el && (el.innerHTML = html),
    text: (el, txt) => el && (el.textContent = txt),

    // Events
    on: (el, evt, cb) => el?.addEventListener(evt, cb),
    off: (el, evt, cb) => el?.removeEventListener(evt, cb),
    onAll: (sel, evt, cb) => Utils.selectAll(sel).forEach(el => Utils.on(el, evt, cb)),

    // Scroll
    smoothScroll: (sel, offset = 0) => {
        const el = Utils.select(sel);
        if (el) window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    },

    // Viewport
    isInViewport: (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.left <= window.innerWidth;
    },

    // Debounce
    debounce: (fn, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), wait);
        };
    },

    // Throttle
    throttle: (fn, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                fn(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Delay
    delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

    // Storage
    setStorage: (key, val) => {
        try { localStorage.setItem(key, JSON.stringify(val)); } 
        catch (e) { CONFIG.log('Storage error:', e); }
    },
    getStorage: (key) => {
        try { return JSON.parse(localStorage.getItem(key)); } 
        catch (e) { return null; }
    },

    // URL
    getUrlParam: (param) => new URLSearchParams(window.location.search).get(param),

    // Device
    isMobile: () => /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),

    // Viewport dimensions
    getViewportHeight: () => window.innerHeight || document.documentElement.clientHeight,
    getViewportWidth: () => window.innerWidth || document.documentElement.clientWidth,

    // Open URL
    openNewTab: (url) => window.open(url, '_blank'),

    // Validate Email
    validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),

    // Copy to Clipboard
    copyToClipboard: async (text) => {
        try { await navigator.clipboard.writeText(text); return true; }
        catch (e) { return false; }
    }
};
