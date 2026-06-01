# Release Checklist (Replicavel TAG08)

## 1) Qualidade de Codigo
- Executar 
pm run ds:check.
- Executar 
pm run lint.
- Executar 
pm run build.
- Bloquear release se qualquer comando falhar.

## 2) Validacao Funcional
- Validar funil: hero_cta -> calculator_submit -> final_cta_click -> whatsapp_click.
- Validar disparo de eventos com parametros minimos: lang, section, cta, country.
- Validar consentimento (aceitar/revogar) e carga/remoção de scripts.
- Validar fallback de APIs externas (/api/youtube/latest, /api/google/reviews).

## 3) Validacao Visual
- Revisar desktop (>=1024px): hero, equipe, prova social, CTA final.
- Revisar mobile (360px-430px): hierarquia, spacing, legibilidade, CTAs.
- Revisar enquadramento de fotos da equipe (photoPosition e photoPositionMobile).
- Verificar ausencia de quebra de anchors e navegacao.

## 4) SEO e Descoberta
- Confirmar obots.txt e sitemap.xml com URLs corretas.
- Confirmar /llms.txt ativo e coerente com proposta de valor.
- Confirmar canonical e metadados sem conflito por idioma.

## 5) Observabilidade
- Confirmar logs estruturados ativos nas APIs publicas.
- Confirmar tracking sem eventos duplicados.
- Registrar baseline diario de funil na planilha.

## 6) Governanca
- Nao criar arquivos paralelos (V2, New, similares).
- Centralizar copy em 	ranslations.ts.
- Centralizar midia/equipe em constants.tsx.
- Atualizar docs contratuais ao alterar copy/SEO/anchors/consentimento.

## 7) Go/No-Go
- Go: qualidade passou + funil rastreavel + sem regressao visual.
- No-Go: qualquer quebra de tracking, build ou consentimento.

## 8) Replicacao para Projetos Irmaos
Aplicar esta ordem em cada repo:
1. LandingPage_hospedagem_TAG08
2. LandingPage_Influenciador_TAG08
3. LandingPage_Process Inteligente _TAG08
4. LandingPage_ProcessActivation_TAG08

Padrao obrigatorio entre todos:
- Mesmo contrato de eventos.
- Mesmo gate de qualidade.
- Mesma politica de fallback e consentimento.
- Mesma disciplina de design system.
