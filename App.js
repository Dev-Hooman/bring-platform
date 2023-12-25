import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchContextProvider } from './src/Context/Search/SearchContext';

import MainNavigation from './src/navigation/MainNavigation';



const App = () => {
  return (
    <SearchContextProvider>
      <MainNavigation/>
    </SearchContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})