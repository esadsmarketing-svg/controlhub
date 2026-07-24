# Design System ControlHub

## Finalidade

O Design System é a biblioteca oficial de componentes reutilizáveis do ControlHub. Todos os módulos futuros devem reutilizar estes componentes antes de criar qualquer UI específica.

## Arquitetura

```txt
src/components/
  ui/          # primitivos e controles base
  layout/      # estrutura de página e composição
  feedback/    # alertas, loading, estados e dialogs
  forms/       # blocos de formulário e inputs especializados
  navigation/  # tabs, breadcrumbs, sidebar e topbar
  data/        # tabelas, filtros, busca, paginação e métricas
  overlays/    # tooltip, popover, dropdown e ações avançadas
  providers/   # providers auxiliares do DS
```

## Tokens

Os componentes usam tokens semânticos do Tailwind/CSS variables: `background`, `foreground`, `card`, `muted`, `primary`, `secondary`, `accent`, `destructive`, `border`, `input` e `ring`. A lista base de tokens vive em `src/lib/constants/designTokens.ts`.

## Padrões

- Componentes devem possuir props tipadas.
- Variants e sizes devem ser centralizados com CVA quando houver variação visual relevante.
- Componentes devem funcionar em light e dark mode.
- Estados `disabled`, `loading`, `error`, `success` e `empty` devem ser demonstrados quando aplicáveis.
- Use composition pattern para montar interfaces complexas.
- Evite lógica de negócio dentro de componentes globais.

## UI Playground

A rota protegida `/dev/ui` é registrada apenas quando `import.meta.env.DEV === true`. Ela é a documentação viva do Design System e não deve existir em produção.

Cada componente novo deve incluir:

- Descrição.
- Quando utilizar.
- Quando não utilizar.
- Props principais.
- Variações.
- Estados.
- Exemplo funcional.
- Código de exemplo.

## Boas práticas

- Reutilize componentes existentes antes de criar novos.
- Prefira componentes pequenos e composáveis.
- Preserve acessibilidade com ARIA, foco visível e navegação por teclado.
- Não importe componentes específicos de features dentro de `src/components`.
- Documente novos componentes no UI Playground antes de usá-los em módulos de negócio.

## Evolução futura

- Adicionar testes automatizados de acessibilidade.
- Integrar Storybook ou documentação estática se necessário.
- Criar geradores para novos componentes.
- Adicionar snapshots visuais para prevenir regressões.
