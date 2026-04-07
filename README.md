<div align="center">

# ✒️ Série High-Tech — A Caneta

**A premium pen landing page built entirely with AI-assisted development.**  
*Uma landing page de caneta premium construída inteiramente com desenvolvimento assistido por IA.*

<br/>

[![Deploy Status](https://img.shields.io/badge/deploy-vercel-ready-brightgreen?style=flat-square&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Built With](https://img.shields.io/badge/built%20with-Antigravity%20AI-purple?style=flat-square)](https://antigravity.dev)
[![GSAP](https://img.shields.io/badge/animation-GSAP%20ScrollTrigger-88CE02?style=flat-square&logo=greensock)](https://gsap.com)

<br/>

> *"A materialização do pensamento."*  
> *"The materialization of thought."*

</div>

---

## 🇧🇷 Português

### 📋 Sobre o Projeto

Este projeto é uma **landing page de alto nível para o portfólio de Fabio Hideo Miyauchi**, criada do zero como demonstração das capacidades de UI/UX Design e desenvolvimento front-end. A página foi concebida e executada em colaboração com o assistente de IA **Antigravity** (Google DeepMind), e representa o estado da arte em design de landing pages para produtos de luxo.

A página simula o lançamento de uma caneta de precisão fictícia chamada **"Série High-Tech"**, com estética premium, animações cinematográficas e microinterações sofisticadas — inspirada em experiências de marcas como Apple e Awwwards.

### 🎯 Objetivo

Demonstrar proficiência em:
- Design de sistemas (Design Tokens, paletas, tipografia)
- Animação baseada em scroll com canvas (estilo Apple)
- Microinterações avançadas e cursor customizado
- Arquitetura front-end limpa e escalável
- Fluxo de trabalho moderno com IA generativa

### ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🎬 **Sequence Canvas** | Animação Apple-style de 121 frames sincronizada com o scroll |
| 🖱️ **Cursor Contextual** | Ponteiro customizado com labels dinâmicas por zona de interação |
| 🔮 **Glassmorphism Hero** | Painel de vidro que isola a tipografia do fundo dinâmico |
| ⚡ **Scroll Suave (Lenis)** | Rolagem com inércia cinematográfica |
| 🔦 **Flashlight Cards** | Cards do Bento Grid com efeito de lanterna ao hover |
| 🃏 **3D Kinetic Hover** | Cards com efeito 3D perspectivo ao hover |
| 📱 **Mobile Menu** | Menu overlay blur para dispositivos móveis |
| 🔢 **Preloader** | Carregador de progresso que aguarda todos os frames |
| 🏷️ **SEO + OG Tags** | Meta tags para buscadores e redes sociais |

### 🛠️ Stack Tecnológica

```
HTML5 (semântico)
Tailwind CSS (via CDN, com design tokens customizados)
GSAP + ScrollTrigger (animações de scroll)
Lenis (smooth scroll com inércia)
SplitType (animação de texto por caracteres)
Iconify (ícones vetoriais)
Canvas API (sequência de frames nativa do browser)
```

### 📁 Estrutura do Projeto

```
front_caneta/
├── index.html              # Estrutura HTML principal
├── .gitignore              # Exclusões Git
├── .vercelignore           # Exclusões de deploy Vercel
├── README.md               # Este arquivo
└── assets/
    ├── css/
    │   └── styles.css      # Design System customizado
    ├── js/
    │   └── app.js          # Lógica GSAP, Canvas, Cursor
    └── images/
        ├── video_frames/   # 121 frames da sequência da caneta
        ├── pen_detail.png  # Imagem principal da caneta
        ├── bg_titanio.png  # Background — Titânio
        ├── bg_suica.png    # Background — Engenharia Suíça
        ├── bg_italiano.png # Background — Design Italiano
        └── bg_precisao.png # Background — Precisão Nanométrica
```

### 🚀 Como Executar Localmente

Este projeto é **100% estático** — sem servidor, sem build step, sem dependências `npm`.

```bash
# Clone o repositório
git clone https://github.com/fhmiyauchi/design_system_01-caneta.git
cd design_system_01-caneta

# Opção 1: VS Code Live Server (recomendado)
# Instale a extensão "Live Server" e clique em "Go Live"

# Opção 2: python (se tiver instalado)
python -m http.server 3000

# Opção 3: npx serve (se tiver Node.js)
npx serve .
```

> ⚠️ **Importante:** Abrir `index.html` diretamente via `file://` pode bloquear o carregamento das imagens locais por políticas CORS. Use sempre um servidor local.

### 📦 Deploy no Vercel

```bash
# Instale a Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy direto da branch vercel
vercel --prod
```

O arquivo `.vercelignore` já está configurado para excluir automaticamente os templates de referência e arquivos de sistema.

---

## 🇺🇸 English

### 📋 About the Project

This project is a **high-end landing page built for Fabio Hideo Miyauchi's portfolio**, created from scratch as a demonstration of UI/UX Design and front-end development capabilities. The page was conceived and executed in collaboration with the AI assistant **Antigravity** (Google DeepMind), and represents the state of the art in luxury product landing page design.

The page simulates the launch of a fictional precision pen called **"Série High-Tech"**, featuring premium aesthetics, cinematic animations and sophisticated microinteractions — inspired by the experiences of brands like Apple and Awwwards.

### 🎯 Purpose

Demonstrating proficiency in:
- Design systems (Design Tokens, color palettes, typography)
- Scroll-based canvas animation (Apple-style)
- Advanced microinteractions and custom cursors
- Clean, scalable front-end architecture
- Modern workflow with generative AI

### ✨ Features

| Feature | Description |
|---|---|
| 🎬 **Sequence Canvas** | Apple-style 121-frame animation synced to scroll position |
| 🖱️ **Contextual Cursor** | Custom pointer with dynamic labels per interaction zone |
| 🔮 **Glassmorphism Hero** | Glass panel isolating typography from the dynamic background |
| ⚡ **Smooth Scroll (Lenis)** | Cinematic inertia-based scrolling |
| 🔦 **Flashlight Cards** | Bento Grid cards with torch/flashlight hover effect |
| 🃏 **3D Kinetic Hover** | Cards with 3D perspective on hover |
| 📱 **Mobile Menu** | Blur overlay menu for mobile devices |
| 🔢 **Preloader** | Progress loader waiting for all frames to load |
| 🏷️ **SEO + OG Tags** | Meta tags for search engines and social sharing |

### 🛠️ Tech Stack

```
HTML5 (semantic)
Tailwind CSS (via CDN with custom design tokens)
GSAP + ScrollTrigger (scroll animations)
Lenis (smooth scroll with inertia)
SplitType (character-level text animation)
Iconify (vector icons)
Canvas API (native browser frame sequence)
```

### 📁 Project Structure

```
front_caneta/
├── index.html              # Main HTML structure
├── .gitignore              # Git exclusions
├── .vercelignore           # Vercel deploy exclusions
├── README.md               # This file
└── assets/
    ├── css/
    │   └── styles.css      # Custom Design System styles
    ├── js/
    │   └── app.js          # GSAP, Canvas & Cursor logic
    └── images/
        ├── video_frames/   # 121 frames of the pen sequence
        ├── pen_detail.png  # Main pen image
        ├── bg_titanio.png  # Background — Titanium
        ├── bg_suica.png    # Background — Swiss Engineering
        ├── bg_italiano.png # Background — Italian Design
        └── bg_precisao.png # Background — Nanometric Precision
```

### 🚀 Running Locally

This project is **100% static** — no server, no build step, no `npm` dependencies.

```bash
# Clone the repository
git clone https://github.com/fhmiyauchi/design_system_01-caneta.git
cd design_system_01-caneta

# Option 1: VS Code Live Server (recommended)
# Install the "Live Server" extension and click "Go Live"

# Option 2: Python (if installed)
python -m http.server 3000

# Option 3: npx serve (if Node.js is available)
npx serve .
```

> ⚠️ **Important:** Opening `index.html` directly via `file://` may block local image loading due to CORS policies. Always use a local server.

### 📦 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy directly from the vercel branch
vercel --prod
```

The `.vercelignore` file is already configured to automatically exclude reference templates and system files.

---

## 🤖 AI-Powered Development / Desenvolvimento com IA

This project was built **entirely from scratch through an Antigravity AI session**, without any pre-existing boilerplate or templates. Every design decision, animation system, and architectural choice was made through iterative conversation between the developer and the AI assistant.

Este projeto foi construído **completamente do zero através de uma sessão com o Antigravity AI**, sem nenhum boilerplate ou template pré-existente. Cada decisão de design, sistema de animação e escolha arquitetural foi feita através de conversas iterativas entre o desenvolvedor e o assistente de IA.

**Key AI-assisted decisions / Decisões assistidas por IA:**
- Hero typography hierarchy with weighted "Fronteira" dominance
- Canvas frame sequence with GSAP ScrollTrigger pinning
- Glassmorphism panel for text legibility over dynamic backgrounds
- Contextual cursor with micro-typography labels per interaction zone
- CSS/JS extraction and project restructuring for production

---

## 👤 Autor / Author

**Fabio Hideo Miyauchi**  
UI/UX Architect & Front-End Developer

[![GitHub](https://img.shields.io/badge/github-fhmiyauchi-181717?style=flat-square&logo=github)](https://github.com/fhmiyauchi)

---

## 📄 Licença / License

Distributed under the MIT License. See `LICENSE` for more information.  
Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

---

<div align="center">

*Built with precision. Crafted with intention.*  
*Construído com precisão. Criado com intenção.*

**✒️ Série High-Tech**

</div>
