import { createContext, useReducer } from "react";
import SearchReducer from './SearchReducer'

const INITIA_STATE = {
    searchedData: [],
    isFetching: false,
    error: false
}

export const SearchContext = createContext(INITIA_STATE)

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIA_STATE);

    return (
        <SearchContext.Provider value={{
            searchedData: state.searchedData,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
        >

            {children}
        </SearchContext.Provider>


    )
}