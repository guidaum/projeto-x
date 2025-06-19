import { createContext, ReactNode, useState, useEffect } from 'react';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import axios from 'axios';

interface AuthContextData {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  onLogIn: (credentials: SignInProps) => Promise<void>;
  logIn: (credentials: LogInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  logoutUser: () => Promise<void>;
}

interface UserProps {
  id: string;
  email: string;
  avatarUrl?: string;
}

type AuthProviderProps = {
  children: ReactNode;
};

interface SignInProps {
  token: string;
  user: UserProps;
}

interface SignUpProps {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface LogInProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  console.log('Error logout');
  try {
    destroyCookie(null, '@task.token', { path: '/' });
    Router.push('/login');
  } catch (err) {
    console.log('error ao sair');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | undefined>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@task.token': token } = parseCookies();

    if (token) {
      setUser({
        id: '1',
        email: 'email@gmail.com',
      });
    }
  }, []);

  async function onLogIn({ token, user }: SignInProps) {
    try {
      setCookie(undefined, '@task.token', 'token', token);

      const response = await axios.get(`/api/users/${user.id}/avatar`, {
        responseType: 'blob', // Indica que a resposta será um blob (imagem binária)
      });
      const url = URL.createObjectURL(response.data);
      setUser({ ...user, avatarUrl: url });
      Router.push('/user');
    } catch (err) {
      console.log('Error ao entrar', err);
    }
  }

  async function logIn(data: LogInProps) {
    try {
      const response = await axios.post('/api/auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      onLogIn({ token: response.data.token, user: response.data.user });
    } catch (err) {
      console.log('Error ao entrar', err);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      Router.push('/login');
    } catch (err) {
      console.log(err);
    }
  }

  async function logoutUser() {
    try {
      destroyCookie(null, '@task.token', { path: '/' });
      Router.push('/login');
      setUser(undefined);
    } catch (err) {
      console.log('Erro ao deslogar', err);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        onLogIn,
        logIn,
        signUp,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
