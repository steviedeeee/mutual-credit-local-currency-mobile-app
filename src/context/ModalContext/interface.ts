import {ReactNode} from 'react';

export interface IModalContext {
  showModalSuccess: (description: string, title?: string) => void;
  showModalError: (description: string, title?: string) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
  children: ReactNode;
}
