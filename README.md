# ControlHub

ControlHub é a fundação de um SaaS moderno para gestão de pequenas e médias empresas.

## Stack planejada

- React, TypeScript e Vite
- Tailwind CSS, shadcn/ui e Lucide Icons
- Supabase Auth e PostgreSQL no Supabase
- Deploy na Vercel

## Arquitetura inicial

A estrutura foi organizada para crescer por módulos de negócio, mantendo separação de responsabilidades e baixo acoplamento.

```txt
src/
  app/          # composição da aplicação e providers globais
  assets/       # arquivos estáticos locais
  components/   # componentes reutilizáveis compartilhados
  contexts/     # contextos globais reutilizáveis
  features/     # módulos funcionais isolados por domínio
  hooks/        # hooks compartilhados
  layouts/      # layouts de rotas e shells de página
  lib/          # integrações e helpers de bibliotecas
  pages/        # páginas roteáveis leves
  routes/       # configuração central de rotas
  services/     # clients/adapters para APIs externas futuramente
  styles/       # estilos globais e tokens base
  types/        # tipos compartilhados
  utils/        # funções utilitárias puras
```

## Padrões definidos

- `features/<module>` concentra evolução incremental de cada módulo.
- `pages` deve orquestrar componentes e layouts, evitando regras de negócio.
- `components/common` contém componentes reutilizáveis de aplicação.
- `components/ui` fica reservado para componentes shadcn/ui.
- `services` fica reservado para adapters de Supabase e APIs, sem conexão implementada nesta etapa.
- `types` centraliza contratos compartilhados.
- `utils/permissions.ts` define uma base mínima para autorização futura por módulo e ação.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```
