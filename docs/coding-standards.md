# Padrões de Código

## Finalidade

Definir convenções para manter o projeto previsível, consistente e fácil de escalar.

## Nomenclatura

- Componentes React: `PascalCase.tsx`.
- Hooks: `useNomeDoHook.ts`.
- Contexts: `NomeContext.tsx` e provider `NomeContextProvider`.
- Services: arquivos orientados ao recurso ou adapter, com funções explícitas.
- Types globais: arquivos por domínio em `src/types`.
- Utils: arquivos por responsabilidade em `src/utils`.

## Imports

- Use alias `@/` para imports internos.
- Evite imports profundos entre features.
- Uma feature deve expor contratos estáveis pelo seu `index.ts`.
- Componentes globais não devem importar código específico de módulos.

## Exportações

- Prefira named exports.
- Use barrels para pontos públicos estáveis.
- Evite exportar detalhes internos de uma feature.

## Responsabilidades

- `pages` orquestram layout e composição.
- `components` não devem conter regra de negócio.
- `services` isolam comunicação externa.
- `utils` devem ser funções puras.
- `contexts` devem encapsular estado global, quando necessário.
