import React, {useContext, useEffect, useState} from 'react';
import {IMe} from '../../interfaces/user';
import {IAuthContext, AuthProviderProps} from './interface';

const AuthContext = React.createContext<IAuthContext>({
  me: null,
  setMe: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [me, setMe] = useState<IMe | null>(null);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    setIsFetched(true);
  };

  return (
    <AuthContext.Provider
      value={{
        me,
        setMe,
        isFetched,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};
