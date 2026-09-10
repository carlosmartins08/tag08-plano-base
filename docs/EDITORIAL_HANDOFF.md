# Pacote editorial — Landing Page TAG08

Este handoff entrega toda a copy revisável da landing page em português. Ele deve ser enviado junto com `COPY_MASTER.md`.

## Arquivo principal: toda a copy centralizada

`COPY_MASTER.md` contém as **303 mensagens editoriais em português**, identificadas por chave. É a fonte para títulos, subtítulos, benefícios, FAQs, CTAs, textos de cookies, privacidade, depoimentos de fallback e rodapé.

O redator deve revisar o valor à direita de cada chave; não deve alterar as chaves entre crases.

## Ordem da página e grupos de copy

| Ordem | Área exibida | Chaves no `COPY_MASTER.md` |
| --- | --- | --- |
| 1 | Hero | `nicheHeadlines.*`, `hero.*`, `navbar.*` |
| 2 | Problema | `problem.*` |
| 3 | Calculadora | `calculator.*` |
| 4 | Proposta de valor | `valueProposition.*` |
| 5 | Lente de decisão | `decisionLens.*` |
| 6 | Insights operacionais | `contentLab.*` |
| 7 | Pilares | `pillars.*` |
| 8 | Ciclo mensal | `monthlyCycle.*` |
| 9 | Roadmap | `growthRoadmap.*` |
| 10 | Diferenciais | `strategicBenefits.*` |
| 11 | Vídeos | `videoGallery.*` |
| 12 | Equipe | `teamShowcase.*` |
| 13 | Depoimentos | `testimonials.*` |
| 14 | Investimento e segurança | `investment.*` |
| 15 | Responsabilidades do cliente | `responsibilities.*` |
| 16 | FAQ | `faq.*` |
| 17 | Contato | `cta.*`, `contactRouting.*` |
| 18 | Rodapé | `footer.*` |
| 19 | Consentimento e políticas | `cookie.*`, `privacy.*`, `cookiePolicy.*` |

## Copy editorial fora das traduções

Estes textos também aparecem publicamente e precisam ser revisados. Eles não estão no `COPY_MASTER.md`.

### Hero

- `Capítulo 01`
- `Entrada guiada por critério, não por pressa.`
- `Direção`
- `Primeiro clareza. Depois escala.`

### Proposta de valor

- `Operação`
- `Ciclo com dono, critério e cadência.`
- `Sistema de entrega`
- `TAG08`
- `Proposta`
- `Método antes de volume.`
- `Resultado`
- `Crescimento com processo.`

### Ciclo mensal

- `Workflow`

### Contato e roteamento

- `Núcleo operacional`
- `TAG08.v3`
- `Roteamento TAG08`
- `COMERCIAL`
- `360`
- `Latência: 12ms`
- `Roteamento sênior`
- `Conectar`
- `Abrir alternativa`
- `AGÊNCIA TAG08`
- `Caminho nacional`
- `Caminho internacional`
- `Resposta comercial: até 1 dia útil`
- `Recomendação automática: Brasil + idioma PT.`
- `Recomendação automática: idioma selecionado direciona para canal internacional.`
- `Recomendação automática: localidade fora do Brasil.`
- `Recomendação automática: sinal de idioma priorizado.`
- `Empresa no Brasil`
- `Atendimento principal em português`
- `Empresa fora do Brasil`
- `Atendimento em espanhol`

### Vídeos e depoimentos

- `SLA interno: atualização em até 5 min quando a origem está estável. Em falha, mantemos cache recente ou rota oficial do canal.`
- `Política de fallback: sem resposta do Google, exibimos depoimentos curados e mantemos o link oficial para validação.`

### Metadados de política

- `Policy v1.0`
- `Last Update: 2024.12`

## Conteúdo dinâmico — não revisar como copy estática

- Títulos, datas e miniaturas dos vídeos vêm do canal público do YouTube.
- Avaliações, nomes e textos de depoimentos podem vir do Google Business Profile. Se a origem falhar, entram os depoimentos definidos em `testimonials.items` no `COPY_MASTER.md`.
- Valores do simulador (faturamento, meta de crescimento, potencial mensal, potencial anual e novo patamar mensal) são calculados em tela. A simulação é linear, em BRL, e não representa ROI, lucro ou resultado garantido.

## Dados operacionais — só alterar com validação do negócio

- Telefones, e-mails, endereço, CNPJ, perfis sociais e URLs: `constants.tsx`.
- Mensagens de WhatsApp: `contactRouting.routes.*.message` no `COPY_MASTER.md`.
- Avisos de privacidade, cookies, condições comerciais e prazo de resposta exigem aprovação do responsável jurídico/comercial.

## Critério editorial

- Preservar a lógica: problema → método → prova → ação.
- Evitar promessas absolutas de resultado, prazo ou faturamento.
- Manter CTAs claros e curtos; mudanças em botão devem respeitar a largura do componente.
- Se alterar uma mensagem em português, sinalizar a necessidade de adaptação em inglês, espanhol e francês.
