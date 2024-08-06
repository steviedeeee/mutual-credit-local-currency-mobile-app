import {Dispatch, ReactNode, SetStateAction} from 'react';
import {IMe} from '../../interfaces/user';

export interface IAuthContext {
  me: IMe | null;
  setMe: Dispatch<SetStateAction<IMe | null>>;
  isFetched?: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}
