import type { PropsWithChildren } from 'react';
import {
  AuthContextProvider,
  CompanyContextProvider,
  NotificationContextProvider,
  ThemeContextProvider,
} from '@/contexts';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeContextProvider>
      <NotificationContextProvider>
        <AuthContextProvider>
          <CompanyContextProvider>{children}</CompanyContextProvider>
        </AuthContextProvider>
      </NotificationContextProvider>
    </ThemeContextProvider>
  );
}
