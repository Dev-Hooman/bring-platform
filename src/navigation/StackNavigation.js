import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home';
import ReelsScreen from '../screens/ReelsScreen';
import SearchScreen from '../screens/SearchScreen'
import CommentsScreen from '../screens/CommentsScreen'
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Tabs'
            screenOptions={{ headerShown: false }}

        >
            <Stack.Screen name="Tabs" component={TabNavigation} />


        </Stack.Navigator>
    )
}


const HomeStack = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen options={{
                title: 'Search',
                presentation: 'modal',
                animationTypeForReplace: 'push',
                animation: 'slide_from_right'
            }}
                name='Search'
                component={SearchScreen}
            />

            <Stack.Screen options={{
                title: '',
                presentation: 'modal',
                animationTypeForReplace: 'push',
                animation: 'slide_from_right'
            }}
                name='CommentsScreen'
                component={CommentsScreen}
            />

            <Stack.Screen options={{
                // title: '',
                // presentation: 'modal',
                // animationTypeForReplace: 'push',
                // animation: 'slide_from_right'
            }}
                name='Reels Screen'
                component={ReelsScreen}
            />

        </Stack.Navigator>
    )
}

export { MainStack, HomeStack }