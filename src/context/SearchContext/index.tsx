import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ISearchContext, SearchProviderProps} from './interface';
const SearchContext = React.createContext<ISearchContext>({
  users: [],
  search: '',
  setSearch: () => {},
});

const SearchProvider: React.FC<SearchProviderProps> = ({children}) => {
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const callSearch = useCallback(async (keyword: string) => {}, []);

  useEffect(() => {
    if (search.length < 4) return;

    callSearch(search);
  }, [search]);

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        users,
        search,
        setSearch,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

const useSearch = () => useContext(SearchContext);

export {SearchProvider, useSearch};
