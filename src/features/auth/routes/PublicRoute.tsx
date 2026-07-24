import { Navigate, Outlet } from 'react-router-dom';
import { GlobalLoading } from '@/components/feedback/GlobalLoading';
import { useAuth } from '@/hooks';

export function PublicRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <GlobalLoading />;
  }

  if (isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}
