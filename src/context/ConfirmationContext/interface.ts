import {Dispatch, ReactElement, ReactNode, SetStateAction} from 'react';

export interface IModalConfirmation {
  description?: string;
  callback?: () => void;
  title?: string;
  content?: ReactElement;
}

export interface IConfirmationContext {
  confirmation: (value: IModalConfirmation) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  close: () => void;
}

export interface ConfirmationProviderProps {
  children: ReactNode;
}
