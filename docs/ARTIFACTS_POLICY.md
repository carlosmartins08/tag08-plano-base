# Artifacts Policy

## Objetivo

Manter o repositorio limpo, previsivel e sem arquivos soltos no root.

## Onde cada tipo de arquivo deve ficar

- Logs de execucao manual: `docs/artifacts/logs/`
- HTMLs de investigacao ou coleta temporaria: `docs/artifacts/investigation/`
- Midia de marca oficial: `public/assets/brand/`
- Documentacao operacional/arquitetural: `docs/`

## Regras

- Nao salvar artefatos temporarios no root.
- Nao usar nomes genericos como `novo`, `teste-final`, `v2`.
- Todo arquivo temporario deve ter destino claro em `docs/artifacts/`.
- Codigo e config de build/lint devem permanecer no root apenas quando exigido pela stack.
