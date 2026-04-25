# Motion Guide

Este guia define a linguagem de movimento da landing TAG08 para manter consistencia visual, clareza comercial e sensacao premium.

## Intencao
- Sensacao alvo: confianca, clareza, exclusividade.
- Regra principal: movimento deve guiar decisao, nao distrair.
- Regra de ouro: cada secao tem um gesto principal de motion.

## Tokens Globais
- Easing padrao: `--motion-ease-standard: cubic-bezier(0.22, 0.8, 0.2, 1)`
- Easing enfase: `--motion-ease-emphasis: cubic-bezier(0.18, 0.85, 0.18, 1)`
- Duracoes:
- `--motion-duration-fast: 180ms` (hover, chips, botoes)
- `--motion-duration-medium: 360ms` (cards, estados ativos)
- `--motion-duration-slow: 620ms` (entradas de secao)
- Distancias:
- `--motion-distance-sm: 8px`
- `--motion-distance-md: 16px`
- `--motion-distance-lg: 24px`

## Padroes
- Entrada principal: `motion-enter-primary`
- Reveal de bloco: `reveal + stagger-*`
- Hover premium: `motion-lift`
- Pulso discreto: `motion-pulse-soft` (usar em destaque pontual)

## Aplicacao por Secao
- Hero:
- badge com pulso discreto
- CTA com lift curto
- Team Showcase:
- cartao ativo avanca pouco (`-8px`) com escala controlada (`1.01`)
- cartoes inativos recuam pouco para reforcar hierarquia
- Final CTA (contato):
- cards entram com `motion-enter-primary`
- botoes com `motion-lift` para reforcar acao sem exagero

## Performance
- Priorizar `transform` e `opacity`.
- Evitar animacao simultanea em excesso no mobile.
- Evitar loops decorativos longos fora de pontos de foco.

## Acessibilidade
- `prefers-reduced-motion` deve reduzir animacoes para minimo funcional.
- Conteudo permanece legivel e operavel sem motion.

## Checklist de PR
- Usa tokens de motion globais?
- Evita easing/duration hardcoded?
- Mantem intencao comercial da secao?
- Passa em mobile sem jank?
