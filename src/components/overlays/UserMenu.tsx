import { Avatar, Button } from '@/components/ui';
import { Dropdown } from './Dropdown';
export function UserMenu({ email = 'user@controlhub.test', name = 'Usuário' }: { name?: string; email?: string }) { return <Dropdown trigger={<Button leftIcon={<Avatar fallback={name[0] ?? 'U'} />} variant="ghost">{name}</Button>}><p className="font-medium">{name}</p><p className="text-xs text-muted-foreground">{email}</p></Dropdown>; }
