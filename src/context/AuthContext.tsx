import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { jwtDecode } from 'jwt-decode';

export type User = {
  id: string;
  displayName: string;
  image?: string;
  iat: number;
  exp: number;
  isAdmin: boolean;
};

type AuthContextType = {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  // Rehydrate user from stored JWT once on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      const decoded: User = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        setUser(decoded);
      } else {
        localStorage.removeItem('token');
      }
    } catch {
      localStorage.removeItem('token');
    }
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
    localStorage.removeItem('token');
  }, []);

  const value = useMemo(() => ({ user, setUser, logout }), [user, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
