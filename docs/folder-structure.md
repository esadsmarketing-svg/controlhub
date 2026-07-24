# Estrutura de Pastas

## Finalidade

Documentar a organização do projeto para orientar novos desenvolvedores e evitar crescimento desordenado.

## Estrutura principal

```txt
src/
  app/
  assets/
  components/
    common/
    feedback/
    forms/
    layout/
    navigation/
    ui/
  contexts/
  features/
    auth/
    calendar/
    companies/
    crm/
    dashboard/
    finance/
    integrations/
    notifications/
    permissions/
    reports/
    settings/
    tasks/
    users/
  hooks/
  layouts/
  lib/
    config/
    constants/
    helpers/
    supabase/
    validators/
  pages/
  routes/
  services/
    api/
    auth/
    http/
    storage/
    supabase/
  styles/
  types/
  utils/
```

## Padrão de feature

Cada feature deve seguir:

```txt
features/<feature>/
  components/
  hooks/
  services/
  types/
  pages/
  routes/
  index.ts
```

Componentes específicos de uma feature não devem ser colocados em `src/components`.
