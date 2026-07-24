# Permissões

## Finalidade

Estabelecer a base conceitual para autorização futura no ControlHub sem implementar regras nesta etapa.

## Modelo inicial

Permissões seguem o formato:

```txt
modulo:acao
```

Exemplos futuros:

- `companies:view`
- `finance:manage`
- `users:update`

## Escopo multiempresa

Permissões devem considerar:

- Empresa atual.
- Workspace atual, quando aplicável.
- Papel do usuário dentro da empresa.
- Permissões concedidas por empresa.

## Diretrizes

- A UI deve consultar permissões por contratos tipados.
- Services devem validar autorização no backend quando existir backend próprio ou políticas Supabase.
- Permissões visuais não substituem segurança no banco ou servidor.
