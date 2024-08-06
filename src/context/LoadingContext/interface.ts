import {ReactNode} from 'react';

export interface ILoadingContext {
  showLoading: () => void;
  closeLoading: () => void;
}

export interface LoadingProviderProps {
  children: ReactNode;
}
