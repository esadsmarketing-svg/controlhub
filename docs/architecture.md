# Arquitetura do ControlHub

## Finalidade

Este documento define a arquitetura base do ControlHub antes da implementação das funcionalidades de produto.

## Princípios

- Feature First para manter módulos independentes.
- Separação clara entre UI global, páginas, services, tipos e utilitários.
- Baixo acoplamento entre módulos.
- Barrels públicos por feature para controlar o que é exposto.
- Preparação para multiempresa, temas, i18n e permissões por empresa.

## Camadas

- `app`: composição raiz da aplicação e providers globais.
- `routes`: roteamento central de alto nível.
- `layouts`: layouts de página e composição estrutural.
- `features`: módulos de domínio autônomos.
- `components`: componentes reutilizáveis e não específicos de módulos.
- `services`: adapters externos e clients futuros.
- `lib`: configurações, constantes, helpers e validadores compartilhados.
- `types`: contratos globais compartilhados.
- `utils`: funções puras sem dependência de framework.

## Multiempresa

A arquitetura reserva contratos para empresa atual, workspace atual e permissões escopadas por empresa. A lógica de troca de empresa, persistência e sincronização será implementada somente nas próximas etapas.
