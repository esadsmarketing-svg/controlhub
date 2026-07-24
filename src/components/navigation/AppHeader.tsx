import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks';

export function AppHeader() {
  const { user, logout, loading } = useAuth();

  return (
    <header className="mb-8 flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
      <div>
        <p className="text-sm text-muted-foreground">ControlHub</p>
        <p className="font-medium">{user?.company.tradeName ?? user?.company.name}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium">{user?.name}</p>
          <p className="text-xs text-muted-foreground">{user?.position}</p>
        </div>
        {user?.avatar ? (
          <img
            alt={`Avatar de ${user.name}`}
            className="h-10 w-10 rounded-full border border-border bg-muted"
            src={user.avatar}
          />
        ) : null}
        <Button disabled={loading} onClick={() => void logout()} variant="secondary">
          Sair
        </Button>
      </div>
    </header>
  );
}
