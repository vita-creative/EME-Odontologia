# EME Odontologia - Landing Page Modular

Projeto de landing page profissional para clínica odontológica com arquitetura modular, compatível com CMS e builders visuais como Webflow e WordPress.

## 📋 Estrutura do Projeto

```
eme-odontologia-modular/
├── index.html              # HTML semântico com meta tags SEO
├── css/
│   ├── base.css           # Variáveis CSS, reset e estilos fundamentais
│   ├── components.css     # Componentes reutilizáveis (botões, cards, etc)
│   ├── sections.css       # Estilos específicos de seções
│   ├── utilities.css      # Classes utilitárias
│   └── animations.css     # Animações e efeitos visuais
├── js/
│   ├── config.js          # Configurações globais e constantes
│   ├── utils.js           # Funções utilitárias reutilizáveis
│   ├── animations.js      # Gerenciador de animações
│   ├── main.js            # Arquivo principal de inicialização
│   └── components/
│       ├── button.js      # Componente de botão
│       └── navigation.js  # Componente de navegação
├── assets/                # Imagens, ícones e outros assets
└── docs/                  # Documentação adicional
```

## 🎯 Características Principais

### HTML Semântico
- Estrutura semântica com tags HTML5 apropriadas
- Meta tags SEO completas e editáveis
- Schema.org Structured Data para melhor indexação
- Open Graph e Twitter Card para redes sociais
- Acessibilidade (WCAG 2.1 AA)

### CSS Modular
- Variáveis CSS para fácil customização
- Componentes reutilizáveis sem estilos inline
- Sistema de utilitários para desenvolvimento rápido
- Animações suaves e responsivas
- Mobile-first approach

### JavaScript Modular
- Arquitetura baseada em classes
- Componentes reutilizáveis (Button, Navigation)
- Funções utilitárias independentes
- Sem dependências externas
- Compatível com module bundlers

## 🚀 Como Usar

### 1. Configuração Inicial

Edite o arquivo `js/config.js` com as informações da clínica:

```javascript
const CONFIG = {
    contact: {
        whatsapp: '+5511993941378',
        phone: '(11) 99394-1378',
        email: 'contato@eme-odontologia.com.br',
        // ...
    },
    // ...
};
```

### 2. Customizar Cores

Edite as variáveis CSS em `css/base.css`:

```css
:root {
    --color-primary: #4A1228;
    --color-accent: #C4973A;
    --color-bg-light: #F9F3EC;
    /* ... */
}
```

### 3. Adicionar Conteúdo

Edite o arquivo `index.html` para adicionar suas imagens, textos e informações específicas.

### 4. Integrar com CMS

A estrutura é totalmente compatível com:
- **Webflow**: Importe o HTML/CSS e customize no visual builder
- **WordPress**: Use como base para tema customizado
- **Shopify**: Adapte para página de produto
- **Qualquer CMS**: Estrutura agnóstica

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: até 768px
- Tablet: 768px a 1024px
- Desktop: acima de 1024px

## ♿ Acessibilidade

- ARIA labels em elementos interativos
- Contraste de cores WCAG AA
- Navegação por teclado
- Suporte a screen readers
- Respeita preferência de movimento reduzido

## 🎨 Componentes Disponíveis

### Button
```html
<button class="btn btn--primary" data-action="whatsapp">
    Agende sua avaliação
</button>
```

**Ações disponíveis:**
- `whatsapp`: Abre WhatsApp
- `call`: Faz chamada telefônica
- `scroll`: Scroll suave para seção
- `external`: Abre URL externa

### Service Card
```html
<article class="service-card" data-service="implants">
    <div class="service-card__image">
        <img src="assets/service.jpg" alt="Descrição">
    </div>
    <div class="service-card__content">
        <h3 class="service-card__title">Título</h3>
        <p class="service-card__description">Descrição</p>
    </div>
</article>
```

### Testimonial Card
```html
<article class="testimonial-card">
    <div class="testimonial-card__image">
        <img src="assets/patient.jpg" alt="Paciente">
    </div>
    <div class="testimonial-card__stars">★★★★★</div>
    <p class="testimonial-card__text">Depoimento</p>
    <p class="testimonial-card__author">Nome</p>
</article>
```

## 🎬 Animações

Use o atributo `data-animate` para animar elementos:

```html
<div data-animate="fade-in-up" data-delay="0">
    Conteúdo animado
</div>
```

**Animações disponíveis:**
- `fade-in-up`, `fade-in-down`, `fade-in-left`, `fade-in-right`
- `slide-in-left`, `slide-in-right`, `slide-in-up`, `slide-in-down`
- `scale-in`, `bounce`, `pulse`, `glow`
- E muitas outras em `css/animations.css`

## 🔧 Personalização

### Adicionar Nova Seção

1. Crie o HTML em `index.html`
2. Adicione estilos em `css/sections.css`
3. Se necessário, crie componente em `js/components/`

### Adicionar Novo Componente

1. Crie classe em `js/components/novo-componente.js`
2. Implemente métodos reutilizáveis
3. Inicialize em `js/main.js`

### Adicionar Nova Animação

Adicione em `css/animations.css`:

```css
@keyframes minha-animacao {
    from { /* estilos iniciais */ }
    to { /* estilos finais */ }
}

.animate-minha-animacao {
    animation: minha-animacao var(--transition-base) ease-out forwards;
}
```

## 📊 SEO

### Meta Tags Editáveis

Edite em `index.html`:

```html
<title>EME Odontologia - Implantes, Próteses e Estética Dental</title>
<meta name="description" content="Descrição da clínica">
<meta name="keywords" content="implantes, próteses, estética">
```

### Schema.org

Atualize dados em `<script type="application/ld+json">`:

```json
{
    "@type": "LocalBusiness",
    "name": "EME Odontologia",
    "address": "Mooca, São Paulo",
    "telephone": "+5511993941378"
}
```

## 🔗 Integração com Serviços

### Google Analytics

1. Ative em `js/config.js`:
```javascript
analytics: {
    enabled: true,
    trackingId: 'UA-XXXXXXXXX-X'
}
```

2. Adicione script no `index.html`

### WhatsApp Business

Configure o número em `js/config.js`:

```javascript
contact: {
    whatsapp: '+5511993941378'
}
```

### Google Maps

Adicione em uma seção:

```html
<iframe src="https://maps.google.com/..." width="100%" height="400"></iframe>
```

## 🎯 Performance

- Imagens otimizadas (use WebP quando possível)
- CSS minificado em produção
- JavaScript sem dependências externas
- Lazy loading de imagens
- Mobile-first CSS

## 📝 Compatibilidade

- Chrome/Edge: ✅ Completo
- Firefox: ✅ Completo
- Safari: ✅ Completo
- IE 11: ⚠️ Suporte limitado

## 🤝 Contribuições

Para adicionar melhorias:

1. Mantenha a estrutura modular
2. Sem estilos inline
3. Documente novas funcionalidades
4. Teste em múltiplos navegadores

## 📄 Licença

Este projeto é fornecido como está para uso comercial.

## 📞 Suporte

Para dúvidas sobre customização, consulte a documentação em `docs/` ou entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para EME Odontologia**
