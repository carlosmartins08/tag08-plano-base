# TAG08 Studio Design System

## 1. Identidade & Valores
O ecossistema visual da TAG08 é construído sobre três pilares fundamentais:
*   **Elite**: Posicionamento sênior, autoridade e exclusividade.
*   **Minimalismo**: Foco no essencial, clareza e remoção de ruído.
*   **Performance**: Estética voltada para conversão e resultados tangíveis.

---

## 2. Paleta de Cores
Cores primárias e funcionais definidas no `tailwind.config.ts`.

| Token | Valor Hex | Uso Principal |
| :--- | :--- | :--- |
| **Brand Lime** | `#D4FF00` | CTAs, Destaques, Ícones Ativos, Progressão. |
| **Brand Black** | `#000000` | Background principal, Contrastes profundos. |
| **Brand Accent**| `#DDF81D` | Variações de destaque e sub-elementos. |
| **White** | `#FFFFFF` | Textos de leitura e elementos secundários (com opacidade). |
| **Slate-400/500**| `--` | Descrições e labels de menor hierarquia. |

---

## 3. Tipografia
Sistema tipográfico de alta legibilidade e impacto.

*   **Display (Títulos)**: `Darker Grotesque`
    *   **Estilo**: Black (900), All Caps, Italic (frequentemente), Tracking Tighter.
    *   **Uso**: Headlines de seções, números de impacto, Badges.
*   **Sans (Corpo)**: `Manrope`
    *   **Estilo**: Medium (500) a Bold (700).
    *   **Uso**: Descrições, parágrafos, textos de interface.

---

## 4. Texturas & Efeitos
Elementos que conferem a profundidade "Premium" ao design.

*   **Noise Texture**: Camada sutil de ruído (`bg-noise`) com 3% de opacidade sobre fundos escuros.
*   **Glow Effects**: Radial gradients de `brand-lime` com `blur-[120px]` para criar pontos de luz e profundidade.
*   **Glassmorphism**: Containers com `bg-white/[0.03]`, `backdrop-blur-xl` e `border-white/10`.
*   **Grids**: Padrão de grid técnico (`bg-grid-pattern`) para seções de autoridade e dados.

---

## 5. Componentes Atômicos

### Botões (`Button.tsx`)
*   **Solid**: Fundo Lime, Texto Black, Sombra Neon (`shadow-brand-lime/35`).
*   **Outline**: Borda sutil (white/40), Hover transforma em Solid ou Highlight.
*   **Micro-interação**: `hover:scale-105 active:scale-95` com transições de 300ms a 500ms.

### Badges de Seção
*   **Estrutura**: Border sutil, background lime/5, texto uppercase com tracking largo (0.2em a 0.4em).
*   **Finalidade**: Contextualização rápida da sessão (ex: "The Standard", "Safety First").

---

## 6. Movimento & Animação
A fluidez é parte essencial da experiência de elite.

*   **Scroll Reveal**: Classe `.reveal`. Elementos entram com opacidade 0 e deslocamento de 30px.
*   **Staggered Entrance**: Uso de delays (`stagger-1` a `stagger-4`) para listas de cards ou ícones.
*   **Easing**: `cubic-bezier(0.2, 0.8, 0.2, 1)` para movimentos naturais e rápidos.

---

## 7. Iconografia
*   **Biblioteca**: `Lucide React`.
*   **Estilo**: Stroke thin/normal, aplicados dentro de containers circulares ou quadrados arredondados com opacidade baixa.
*   **Cor**: Predominantemente `brand-lime` ou `white` dependendo do contexto.

---

## 8. Grid & Layout
*   **MaxWidth**: Centralizado em `max-w-7xl`.
*   **Padding**: Seções com `py-24` (mobile) a `py-32` (desktop) para garantir respiro visual.
*   **Grids**: Uso extensivo de `grid-cols-12` para flexibilidade técnica.
