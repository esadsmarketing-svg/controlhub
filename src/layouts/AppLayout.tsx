import { Outlet } from 'react-router-dom';
import { AppShell } from '@/components/common/AppShell';

export function AppLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
