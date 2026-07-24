# Fluxo de Autenticação Mock

## Finalidade

Este documento descreve o fluxo de autenticação atual do ControlHub em modo Mock. A implementação foi criada para validar experiência do usuário, navegação, guards, feedbacks e arquitetura antes da integração com Supabase.

## Escopo atual

O fluxo implementa, usando dados simulados:

- Login.
- Cadastro.
- Recuperação de senha.
- Redefinição de senha.
- Logout.
- Sessão persistente via `sessionStorage` encapsulado por adapter.
- Refresh de sessão simulado.
- Rotas públicas e protegidas.
- Redirecionamentos de usuário autenticado/não autenticado.
- Loading e tratamento de erros.

## Arquitetura

A autenticação segue inversão de dependência:

```txt
Telas / Rotas / Hooks
  -> AuthContext
    -> AuthService interface
      -> MockAuthService
        -> StorageAdapter
```

As telas utilizam somente `useAuth()` e não conhecem `MockAuthService`, `sessionStorage` ou dados simulados.

## Onde o Mock vive

- Contrato: `src/features/auth/services/AuthService.ts`.
- Implementação mock: `src/features/auth/services/MockAuthService.ts`.
- Dados mock: `src/features/auth/services/mock/mockAuthData.ts`.
- Factory atual: `src/features/auth/services/authServiceFactory.ts`.
- Persistência temporária: `src/services/storage/SessionStorageAdapter.ts`.

## Usuários mock

Todos usam a senha:

```txt
controlhub123
```

Contas disponíveis:

- `admin@controlhub.test`
- `gerente@controlhub.test`
- `colaborador@controlhub.test`

## Troca futura para Supabase

Para migrar de Mock para Supabase:

1. Criar `SupabaseAuthService` implementando a mesma interface `AuthService`.
2. Ajustar `createAuthService()` para retornar `SupabaseAuthService`.
3. Manter `AuthContext`, `useAuth`, rotas e telas inalterados.
4. Substituir persistência mock por sessão gerenciada pelo Supabase Auth.
5. Mapear usuário, empresa, workspace e permissões para os tipos globais já definidos.

## Regras importantes

- Nenhuma tela deve importar `MockAuthService` diretamente.
- Nenhuma página deve acessar `sessionStorage` diretamente.
- Validações de formulário ficam em `src/lib/validators`.
- Feedback visual deve usar componentes reutilizáveis.
- Segurança real deverá ser aplicada no backend/Supabase futuramente; guards de frontend são apenas UX.
