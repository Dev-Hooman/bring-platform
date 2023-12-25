import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState, useRef, useContext } from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native';

import { Avatar, Icon, Input } from "@rneui/themed";

import SearchList from '../components/SearchList'
import { SearchContext } from '../Context/Search/SearchContext';

const SearchScreen = ({ navigation }) => {
    const { isFetching, dispatch, searchedData } = useContext(SearchContext)

    const [searchInput, setSearchInput] = useState()
    const [searchedResult, setSearchedResult] = useState([])
    const [filteredSearch, setFilteredSearch] = useState(searchedData);
    const [searchedResultLower, setSearchedResultLower] = useState(null)
    const [loading, setLoading] = useState(false);
    // const inputRef = useRef();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: "white" },
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => (
                <View
                    style={{ flexDirection: "row", alignItems: "center", }}
                >
                    <Input
                        // onLayout={()=> inputRef.current.focus()}
                        // ref={inputRef}
                        style={styles.textinput}
                        placeholder='Search Anything...'
                        value={searchInput}
                        onChangeText={(text) => { setSearchInput(text) }}
                        inputContainerStyle={{
                            borderWidth: 0,
                            borderColor: "transparent",
                            width: '90%',
                        }}
                        leftIcon={
                            <TouchableOpacity activeOpacity={0.5} >
                                <Icon
                                    name="search"
                                    color='#FF69B4'
                                    type="font-awesome"
                                // style={{transform: [{rotateY: '180deg'}]}}
                                />
                            </TouchableOpacity>
                        }
                    />
                </View>


            ),

        })

    }, [navigation])

    useEffect(() => {
        const fetchSearchedResult = async () => {
            setLoading(true);
            dispatch({ type: 'SEARCH_START' })

            try {
                const resp = await fetch('http://localhost:9000/api/users/search')
                const data = await resp.json();
                dispatch({ type: 'SEARCH_SUCCESS', payload: data })
                setLoading(false)

            } catch (err) {
                console.log(err)
            }

        }
        fetchSearchedResult()
    }, [searchInput])

    useEffect(() => {
        setSearchedResultLower(searchInput?.toLocaleLowerCase())

        if (searchedResultLower) {
            const newfilteredSearches = searchedData.filter((users) => {
                return users.email.toLocaleLowerCase().includes(searchedResultLower);

            })

            setFilteredSearch(newfilteredSearches?.filter(({ displayName }) => displayName !== auth?.currentUser?.displayName));
        } else {
            setFilteredSearch([]);
        }

    }, [searchedData, searchInput])
    return (
        <View>
            {
                isFetching ? (
                    <SafeAreaView style={styles.loadingLoop}>
                        <ActivityIndicator size={"large"}/>
                    </SafeAreaView>
                )
                    : filteredSearch?.length !== 0
                        ? 
                        filteredSearch?.map(({ displayName, _id, email, profilePicture }) => (
                            <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }}>

                                <SearchList
                                    navigation={navigation}
                                    key={_id}
                                    email={email}
                                    displayName={displayName}
                                    profilePicture={profilePicture}
                                />


                            </TouchableOpacity>

                        ))
                        :
                        <Text style={styles.noresultText}> No results found </Text>
            }

            {/* {
              
                    filteredSearch?.length !== 0
                        ?
                        filteredSearch.map(({ displayName, _id, email, profilePicture }) => (

                            <SearchList
                                key={_id}
                                email={email}
                                displayName={displayName}
                                profilePicture={profilePicture}
                            />
                        ))
                        :
                        <Text style={styles.noresultText}> No results found </Text>

            } */}

        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

    textinput: {
        flex: 1,
        borderColor: 'transparent',
        backgroundColor: '#ECECEC',
        padding: 10,
        color: 'purple',
        borderRadius: 30
    },
    noresultText: {
        textAlign: 'center',
        color: 'purple',
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 50,
        padding: 50,
        top: '100%',
    },
    loadingLoop :{
        marginBottom:  100,
        padding: 50,
        top : '100%'
    }
})