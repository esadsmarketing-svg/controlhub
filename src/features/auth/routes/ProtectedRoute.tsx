import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { GlobalLoading } from '@/components/feedback/GlobalLoading';
import { useAuth } from '@/hooks';

export function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <GlobalLoading />;
  }

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  return <Outlet />;
}
