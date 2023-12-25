const SearchReducer = (state, action) => {
    switch(action.type) {
        case "SEARCH_START":
            return{
                searchedData: [],
                isFetching: true,
                error: false
            }

        case "SEARCH_SUCCESS":
            return {
                searchedData: action.payload,
                isFetching: false,
                error: false
            }

        case "SEARCH_FAILURE":
            return {
                searchedData: [],
                isFetching: false,
                error: action.payload
            }
    }

}

export default SearchReducer