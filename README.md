# ControlHub

ControlHub é a fundação de um SaaS moderno para gestão de pequenas e médias empresas.

## Stack planejada

- React, TypeScript e Vite
- Tailwind CSS, shadcn/ui e Lucide Icons
- Supabase Auth e PostgreSQL no Supabase
- Deploy na Vercel

## Arquitetura consolidada

O projeto segue o padrão Feature First. Cada módulo de negócio possui estrutura própria para componentes, hooks, services, tipos, páginas e rotas, evitando acoplamento entre domínios.

```txt
src/
  app/          # composição raiz e providers globais
  components/   # apenas componentes reutilizáveis globais
  contexts/     # contextos globais preparados
  features/     # módulos independentes por domínio
  lib/          # config, constants, helpers, validators e integrações futuras
  services/     # adapters externos futuros
  types/        # contratos globais compartilhados
  utils/        # funções puras compartilhadas
```

## Documentação

- `docs/architecture.md`: visão arquitetural e princípios.
- `docs/folder-structure.md`: organização de diretórios e padrão Feature First.
- `docs/coding-standards.md`: convenções de código, imports e exports.
- `docs/permissions.md`: base conceitual para permissões futuras.
- `docs/roadmap.md`: próximos passos recomendados.
- `docs/authentication-flow.md`: fluxo de autenticação mock e caminho para Supabase.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```
