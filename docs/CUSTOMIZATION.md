# Guia de Customização - EME Odontologia

Este guia fornece instruções detalhadas para customizar a landing page para suas necessidades específicas.

## 1. Informações da Clínica

### Configuração Básica

Edite `js/config.js`:

```javascript
const CONFIG = {
    contact: {
        whatsapp: '+5511993941378',      // Seu número WhatsApp
        phone: '(11) 99394-1378',         // Seu telefone
        email: 'contato@seu-email.com',   // Seu email
        address: 'Sua Endereço, Cidade',  // Seu endereço
        hours: 'Seg-Sex: 9h às 18h'       // Seu horário
    },
    urls: {
        website: 'https://seu-site.com',
        googleMaps: 'https://maps.google.com/?q=Seu+Endereço'
    }
};
```

### Meta Tags SEO

Edite `index.html` no `<head>`:

```html
<title>Seu Nome - Especialidade Dental</title>
<meta name="description" content="Descrição única da sua clínica">
<meta name="keywords" content="implantes, próteses, sua-especialidade">

<meta property="og:title" content="Seu Nome - Transforme seu Sorriso">
<meta property="og:description" content="Descrição para redes sociais">
<meta property="og:url" content="https://seu-site.com">
```

### Schema.org Structured Data

Atualize em `index.html`:

```json
{
    "@type": "LocalBusiness",
    "name": "Seu Nome",
    "image": "https://seu-site.com/logo.png",
    "address": {
        "streetAddress": "Seu Endereço",
        "addressLocality": "Sua Cidade",
        "addressRegion": "SP",
        "postalCode": "00000-000"
    },
    "telephone": "+55 11 99999-9999"
}
```

## 2. Cores e Identidade Visual

### Paleta de Cores

Edite `css/base.css`:

```css
:root {
    /* Cores Primárias */
    --color-primary: #4A1228;        /* Cor principal */
    --color-primary-dark: #6B1A39;   /* Cor principal escura */
    --color-accent: #C4973A;         /* Cor de destaque */
    --color-accent-light: #D4A74A;   /* Cor de destaque clara */
    
    /* Cores Neutras */
    --color-bg-light: #F9F3EC;       /* Fundo claro */
    --color-bg-medium: #F0E8DC;      /* Fundo médio */
    --color-bg-dark: #1A0810;        /* Fundo escuro */
}
```

### Tipografia

Edite `css/base.css`:

```css
:root {
    --font-serif: 'Playfair Display', serif;  /* Títulos */
    --font-sans: 'Inter', sans-serif;         /* Corpo */
}
```

Altere as fontes no `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;500;600&display=swap" rel="stylesheet">
```

## 3. Conteúdo

### Seção Hero

Edite em `index.html`:

```html
<section class="hero" id="hero">
    <div class="hero__content">
        <h1 class="hero__title">Seu Título Principal</h1>
        <p class="hero__subtitle">Sua descrição e proposta de valor</p>
    </div>
    <div class="hero__image">
        <img src="assets/sua-foto.jpg" alt="Seu Nome">
    </div>
</section>
```

### Serviços

Edite cards em `index.html`:

```html
<article class="service-card" data-service="seu-servico">
    <div class="service-card__image">
        <img src="assets/servico.jpg" alt="Seu Serviço">
    </div>
    <h3 class="service-card__title">Nome do Serviço</h3>
    <p class="service-card__description">Descrição do serviço</p>
</article>
```

### Sobre

Edite seção "about" em `index.html`:

```html
<section class="about" id="about">
    <h2>Quem é você?</h2>
    <p>Sua história e experiência</p>
    <ul class="about__list">
        <li class="about__item">Seu diferencial 1</li>
        <li class="about__item">Seu diferencial 2</li>
    </ul>
</section>
```

### Depoimentos

Edite cards em `index.html`:

```html
<article class="testimonial-card">
    <img src="assets/paciente.jpg" alt="Nome Paciente">
    <div class="testimonial-card__stars">★★★★★</div>
    <p class="testimonial-card__text">"Depoimento do paciente"</p>
    <p class="testimonial-card__author">Nome Paciente</p>
</article>
```

## 4. Imagens

### Estrutura de Assets

Crie pasta `assets/` com:

```
assets/
├── logo.svg              # Logo da clínica
├── favicon.png          # Ícone do site
├── dr-enzo.jpg          # Foto do profissional
├── service-implants.jpg # Implantes
├── service-prosthetics.jpg # Próteses
├── service-aesthetics.jpg  # Estética
├── happy-patient.jpg    # Paciente feliz
├── testimonial-1.jpg    # Depoimento 1
├── testimonial-2.jpg    # Depoimento 2
└── testimonial-3.jpg    # Depoimento 3
```

### Otimização de Imagens

1. Redimensione para tamanho necessário
2. Comprima usando TinyPNG ou similar
3. Use WebP quando possível
4. Adicione alt text descritivo

## 5. Componentes Customizados

### Adicionar Novo Botão

```html
<button class="btn btn--primary" data-action="whatsapp">
    Seu Texto
</button>
```

**Ações disponíveis:**
- `whatsapp`: Abre WhatsApp
- `call`: Faz chamada
- `scroll`: Scroll para seção
- `external`: Abre URL

### Adicionar Novo Card

Crie classe em `css/components.css`:

```css
.meu-card {
    background-color: var(--color-bg-medium);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.meu-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}
```

## 6. Animações

### Adicionar Animação a Elemento

```html
<div data-animate="fade-in-up" data-delay="200">
    Conteúdo animado
</div>
```

### Criar Nova Animação

Em `css/animations.css`:

```css
@keyframes minha-animacao {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-minha-animacao {
    animation: minha-animacao var(--transition-slow) ease-out forwards;
}
```

## 7. Funcionalidades Adicionais

### Formulário de Contato

Crie formulário em `index.html`:

```html
<form id="contactForm">
    <input type="text" name="name" placeholder="Seu Nome" required>
    <input type="email" name="email" placeholder="Seu Email" required>
    <textarea name="message" placeholder="Sua Mensagem" required></textarea>
    <button type="submit" class="btn btn--primary">Enviar</button>
</form>
```

Manipule em `js/main.js`:

```javascript
handleFormSubmit(event, form) {
    event.preventDefault();
    const formData = new FormData(form);
    // Enviar para seu backend
}
```

### Google Maps

Adicione em seção:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=..." 
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### FAQ Section

```html
<section class="faq">
    <h2>Perguntas Frequentes</h2>
    <details>
        <summary>Pergunta 1?</summary>
        <p>Resposta 1</p>
    </details>
    <details>
        <summary>Pergunta 2?</summary>
        <p>Resposta 2</p>
    </details>
</section>
```

## 8. Integração com CMS

### Webflow

1. Exporte HTML/CSS
2. Importe em Webflow
3. Customize no visual builder
4. Mantenha estrutura de classes

### WordPress

1. Crie tema child
2. Use HTML como template
3. Integre com PHP
4. Customize em functions.php

### Shopify

1. Converta para Liquid
2. Use como página customizada
3. Integre com produtos
4. Customize em theme.liquid

## 9. Performance

### Otimizações

1. Minifique CSS e JavaScript
2. Comprima imagens
3. Use CDN para assets
4. Implemente lazy loading
5. Cache do navegador

### Teste de Performance

- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse

## 10. Segurança

- Use HTTPS
- Valide formulários no backend
- Sanitize inputs
- Atualize dependências
- Faça backup regular

---

**Precisa de ajuda? Consulte o README.md ou entre em contato com suporte.**
