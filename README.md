# TAG08 Plano Base

Landing page institucional em Next.js para a TAG08 Studio.

O projeto usa uma única landing page com seções ancoradas, conteúdo multilíngue no client, SEO centralizado e consentimento de cookies com carregamento dinâmico de analytics.

## Rodar localmente

```bash
npm install
npm run dev
```

## Variáveis de ambiente

- `GOOGLE_MAPS_API_KEY` - necessário para buscar reviews reais do Google Business Profile
- `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics 4, opcional
- `NEXT_PUBLIC_GOOGLE_TAG_ID` - Google Tag, opcional
- `NEXT_PUBLIC_GOOGLE_ADS_ID` - Google Ads, opcional

## Validação

```bash
npm run lint
npm run build
```

## Documentação de base

- `docs/ARCHITECTURE.md` - mapa da arquitetura e fontes de verdade
- `docs/ROUTES.md` - mapa de rotas, anchors e canonical
- `docs/AI_RULES.md` - regras para alterar a base sem duplicar responsabilidade
- `docs/DESIGN-SYSTEM-GOVERNANCE.md` - regras de consistência visual
- `docs/DECISIONS.md` - decisões já tomadas
- `docs/DECISION_MATRIX.md` - matriz de decisão para alterações futuras

## Observações

- A base não tem rota de locale na URL neste momento.
- O conteúdo e o SEO devem ser editados a partir dos contratos existentes, não por arquivos paralelos.
- A seção de depoimentos usa reviews reais do Google quando `GOOGLE_MAPS_API_KEY` está configurada no ambiente.

