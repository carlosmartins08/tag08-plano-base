# TAG08 Plano Base

Landing page institucional em Next.js para a TAG08 Studio.

O projeto usa uma unica landing page com secoes ancoradas, conteudo multilingue no client, SEO centralizado e consentimento de cookies com carregamento dinamico de analytics.

## Rodar localmente

```bash
npm install
npm run dev
```

## Variaveis de ambiente

- `GOOGLE_MAPS_API_KEY` - necessario para buscar reviews reais do Google Business Profile
- `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics 4, opcional
- `NEXT_PUBLIC_GOOGLE_TAG_ID` - Google Tag, opcional
- `NEXT_PUBLIC_GOOGLE_ADS_ID` - Google Ads, opcional

## Validacao

```bash
npm run ds:check
npm run lint
npm run build
```

Ou em sequencia:

```bash
npm run validate
```

## Documentacao de base

- `docs/ARCHITECTURE.md` - mapa da arquitetura e fontes de verdade
- `docs/ROUTES.md` - mapa de rotas, anchors e canonical
- `docs/AI_RULES.md` - regras para alterar a base sem duplicar responsabilidade
- `docs/DESIGN-SYSTEM-GOVERNANCE.md` - regras de consistencia visual
- `docs/DECISIONS.md` - decisoes ja tomadas
- `docs/DECISION_MATRIX.md` - matriz de decisao para alteracoes futuras
- `docs/PR_CHECKLIST.md` - checklist obrigatorio antes de abrir PR
- `docs/MOTION_GUIDE.md` - linguagem de movimento, tokens e regras de extensao

## Observacoes

- A base nao tem rota de locale na URL neste momento.
- O conteudo e o SEO devem ser editados a partir dos contratos existentes, nao por arquivos paralelos.
- A secao de depoimentos usa reviews reais do Google quando `GOOGLE_MAPS_API_KEY` esta configurada no ambiente.
