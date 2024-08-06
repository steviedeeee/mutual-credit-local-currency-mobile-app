import {Dispatch, ReactNode, SetStateAction} from 'react';

export interface ISearchContext {
  users: any[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  isLoading?: boolean;
}

export interface SearchProviderProps {
  children: ReactNode;
}
