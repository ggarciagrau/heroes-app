import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./modules/auth/context";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
