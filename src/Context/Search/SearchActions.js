export const SearchStart = () => ({
    type: "SEARCH_START",
})

export const SearchSuccess = (SearchResult) => ({
    type: "SEARCH_SUCCESS",
    payload: SearchResult,
})

export const SearchFailure = (error) => ({
    type: "SEARCH_FAILURE",
    payload: error,
})