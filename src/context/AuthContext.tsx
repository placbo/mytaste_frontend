import { createContext, useState, ReactNode, useContext } from 'react';

export type User = {
  id: string;
  displayName: string;
  image: string;
  iat: number;
  exp: number;
  isAdmin: boolean;
};

type AuthContextType = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
