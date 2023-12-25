import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from './StackNavigation'
import ProfileScreen from '../screens/ProfileScreen'
import { Icon } from '@rneui/base'
import CreatePost from '../screens/CreatePost'

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                showIcon: true

            }

            }
            screenOptions={({ route }) => ({
              headerShown: route.name !== 'HomeTab', // Hide header for HomeTab
              
                // Tab bar icon styling
                tabBarIcon: ({ focused, size }) => {
                  let iconName;
              
                  if (route.name === 'HomeTab') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                  } else if (route.name === 'CreatePost') {
                    iconName = focused ? 'add' : 'add-outline';
                  }
              
                  // Check if the current route is 'add' and add border styling if true
                  if (route.name === 'CreatePost') {
                    return (
                      <View style={!focused?{
                 
                        marginBottom: 25,
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#FF69B4',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: "white"
                      }: {
                        marginBottom: 25,
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: "#FCCDE5"
                      }}>
                        <Icon name={iconName} type='ionicon' color={"#FF69B4"} size={size} />
                      </View>
                    );
                  }
              
                  return <Icon name={iconName} type='ionicon' color={"#FF69B4"} size={size} />;
                },
              
                // Tab bar styling
                tabBarStyle: {
                  position: 'absolute',
                  elevation: 0,
                  backgroundColor: 'white',
                  height: 70,
                }
              })}
              
        >
            <Tabs.Screen name="HomeTab"
                component={HomeStack}


            />
            <Tabs.Screen
                name="CreatePost"
                component={CreatePost}
            />
            <Tabs.Screen


                name="Profile"
                component={ProfileScreen}

            />
        </Tabs.Navigator>
    )
}

export default TabNavigation