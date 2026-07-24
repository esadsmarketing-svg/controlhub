import { Activity, Bell, Plus, Search } from 'lucide-react';
import { Alert, EmptyState, ErrorState, InfoState, LoadingState, SuccessState } from '@/components/feedback';
import { CurrencyInput, DatePicker, FieldGroup, FileUpload, FormField, MaskInput, TimePicker } from '@/components/forms';
import { Breadcrumb, SidebarGroup, SidebarItem, Tabs, Topbar } from '@/components/navigation';
import { Card, Grid, PageHeader, StatCard } from '@/components/layout';
import { ColumnVisibility, DataTable, Filters, Pagination, SearchInput, SortButton, StatusBadge } from '@/components/data';
import { Button, Checkbox, Chip, Combobox, IconButton, Input, MultiSelect, PasswordInput, Progress, Radio, Select, Skeleton, Spinner, Switch, Textarea } from '@/components/ui';
import { CommandPalette, CompanySwitcher, Dropdown, GlobalSearch, NotificationBell, QuickActions, Tooltip, UserMenu, WorkspaceSwitcher } from '@/components/overlays';
import { ComponentExample } from '../components/ComponentExample';
import { PlaygroundSection } from '../components/PlaygroundSection';

const tableRows = [{ name: 'ControlHub', status: 'Ativo', owner: 'Admin' }];
const tableColumns = [{ key: 'name', header: 'Nome' }, { key: 'status', header: 'Status' }, { key: 'owner', header: 'Responsável' }];

export const playgroundSections = [
  {
    title: 'Botões',
    description: 'Variações, tamanhos, loading, disabled e ícones opcionais.',
    content: <PlaygroundSection title="Botões" description="Primary, secondary, outline, ghost, link, destructive, success e warning."><ComponentExample name="Button" description="Ação principal ou secundária com variants e sizes." props={['variant', 'size', 'loading', 'disabled', 'leftIcon', 'rightIcon']} code={'<Button variant="primary" size="md">Salvar</Button>'}><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button><Button variant="destructive">Destructive</Button><Button variant="success">Success</Button><Button variant="warning">Warning</Button><Button loading>Loading</Button><Button disabled>Disabled</Button><Button leftIcon={<Plus className="h-4 w-4" />}>Com ícone</Button></ComponentExample><ComponentExample name="IconButton" description="Botão compacto para ações iconográficas." props={['icon', 'label', 'variant', 'size']} code={'<IconButton icon={<Bell />} label="Notificações" />'}><IconButton icon={<Bell className="h-4 w-4" />} label="Notificações" /><IconButton icon={<Search className="h-4 w-4" />} label="Buscar" variant="outline" /></ComponentExample></PlaygroundSection>,
  },
  {
    title: 'Inputs e formulários',
    description: 'Campos base, validação visual, estados e agrupamentos.',
    content: <PlaygroundSection title="Inputs e formulários" description="Texto, senha, email, busca, select, combobox, datas, moeda, máscara e arquivo."><ComponentExample name="Inputs" description="Campos com erro, sucesso, loading e disabled." props={['error', 'success', 'loading', 'disabled', 'leftIcon', 'rightIcon']} code={'<Input placeholder="Nome" />'}><Input placeholder="Texto" /><Input error placeholder="Erro" /><Input success placeholder="Sucesso" /><Input loading placeholder="Loading" /><Input disabled placeholder="Desabilitado" /><PasswordInput placeholder="Senha" /><SearchInput placeholder="Busca" /><Textarea placeholder="Textarea" /></ComponentExample><ComponentExample name="Form controls" description="Controles de formulário reutilizáveis." props={['checked', 'multiple', 'type']} code={'<Select><option>Opção</option></Select>'}><Select><option>Select</option></Select><Combobox placeholder="Combobox" /><MultiSelect><option>MultiSelect</option></MultiSelect><Checkbox aria-label="Checkbox" /><Radio aria-label="Radio" /><Switch checked /><FieldGroup><DatePicker /><TimePicker /></FieldGroup><CurrencyInput placeholder="0,00" /><MaskInput placeholder="000.000.000-00" /><FileUpload /></ComponentExample><ComponentExample name="FormField" description="Composição acessível para label, descrição e erro." props={['id', 'label', 'description', 'error']} code={'<FormField id="email" label="E-mail"><Input /></FormField>'}><FormField id="email-playground" label="E-mail" description="Use um e-mail corporativo." error="Mensagem de erro"><Input id="email-playground" /></FormField></ComponentExample></PlaygroundSection>,
  },
  {
    title: 'Feedback',
    description: 'Estados de sistema, alertas e mensagens transacionais.',
    content: <PlaygroundSection title="Feedback" description="Alertas, loading, sucesso, erro, informação e vazio."><ComponentExample name="States" description="Estados reutilizáveis para páginas e cards." props={['message', 'title', 'description']} code={'<LoadingState />'}><LoadingState /><ErrorState /><SuccessState /><InfoState /><EmptyState title="Sem dados" description="Nada para exibir." /></ComponentExample><ComponentExample name="Alert" description="Mensagem contextual com variants." props={['variant', 'title']} code={'<Alert variant="warning">Atenção</Alert>'}><Alert variant="info" title="Info">Mensagem informativa.</Alert><Alert variant="success" title="Sucesso">Operação concluída.</Alert><Alert variant="warning" title="Atenção">Revise os dados.</Alert><Alert variant="error" title="Erro">Falha na ação.</Alert></ComponentExample></PlaygroundSection>,
  },
  {
    title: 'Cards, layout e navegação',
    description: 'Estruturas responsivas para páginas produtivas.',
    content: <PlaygroundSection title="Cards, layout e navegação" description="Container, headers, cards, breadcrumbs, tabs e sidebar."><ComponentExample name="Cards" description="Card padrão, StatCard e Grid." props={['padding', 'elevated', 'title', 'value']} code={'<StatCard title="Receita" value="R$ 10k" />'}><Grid className="w-full"><Card>Card padrão</Card><StatCard icon={<Activity className="h-4 w-4" />} title="Métrica" value="98%" description="+12% no período" /></Grid></ComponentExample><ComponentExample name="Navegação" description="Elementos estruturais de navegação." props={['items', 'activeValue', 'title']} code={'<Tabs items={items} activeValue="a" />'}><Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Design System' }]} /><Tabs activeValue="one" items={[{ value: 'one', label: 'Um' }, { value: 'two', label: 'Dois' }]} /><Topbar><span>Topbar</span><NotificationBell /></Topbar><SidebarGroup title="Grupo"><SidebarItem active label="Item ativo" /></SidebarGroup><PageHeader title="PageHeader" description="Descrição da página" /></ComponentExample></PlaygroundSection>,
  },
  {
    title: 'Dados e overlays',
    description: 'Tabelas, filtros, status e elementos avançados.',
    content: <PlaygroundSection title="Dados e overlays" description="Data display, menus e ações avançadas."><ComponentExample name="Data display" description="Tabela, paginação, filtros e status." props={['columns', 'data', 'loading', 'emptyMessage']} code={'<DataTable columns={columns} data={data} />'}><Filters><SearchInput placeholder="Filtrar" /><ColumnVisibility /><SortButton>Ordenar</SortButton></Filters><DataTable columns={tableColumns} data={tableRows} /><Pagination page={1} totalPages={3} /><StatusBadge variant="success">Ativo</StatusBadge><Progress value={66} /><Skeleton className="h-8 w-32" /><Spinner /></ComponentExample><ComponentExample name="Overlays e avançados" description="Tooltip, dropdown, command palette, menus e switchers." props={['trigger', 'children', 'content']} code={'<Tooltip content="Ajuda">...</Tooltip>'}><Tooltip content="Tooltip acessível"><Button variant="outline">Passe o mouse</Button></Tooltip><Dropdown trigger={<Button variant="secondary">Dropdown</Button>}><p className="text-sm">Conteúdo</p></Dropdown><CommandPalette /><GlobalSearch /><UserMenu /><CompanySwitcher /><WorkspaceSwitcher /><QuickActions /><Chip>Chip</Chip></ComponentExample></PlaygroundSection>,
  },
];
